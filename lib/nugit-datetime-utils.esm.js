import format from 'date-fns/format';
import subDays from 'date-fns/sub_days';
import subMonths from 'date-fns/sub_months';
import subWeeks from 'date-fns/sub_weeks';
import subYears from 'date-fns/sub_years';
import addDays from 'date-fns/add_days';
import addMonths from 'date-fns/add_months';
import endOfYear from 'date-fns/end_of_year';
import differenceInDays from 'date-fns/difference_in_days';
import getDate from 'date-fns/get_date';
import getMonth from 'date-fns/get_month';
import getYear from 'date-fns/get_year';
import lastDayOfYear from 'date-fns/last_day_of_year';
import setDate from 'date-fns/set_date';
import setDay from 'date-fns/set_day';
import setDayOfYear from 'date-fns/set_day_of_year';
import setMonth from 'date-fns/set_month';

var formatDate = function formatDate(date) {
  return format(date, 'YYYY-MM-DD');
}; // :: String -> ((Date | String | Int) -> Int -> Date)

var getSubtractionFn = function getSubtractionFn(unit) {
  if (unit === 'year') return subYears;
  if (unit === 'month') return subMonths;
  if (unit === 'quarter') return function (date, nb) {
    return subMonths(date, nb * 3);
  };
  if (unit === 'week') return subWeeks;
  return subDays;
}; // :: Int -> String -> String

var applyOffset = function applyOffset(offset, dateStr) {
  if (!offset) return dateStr;
  var dateObj = new Date(dateStr);
  var tzDiff = offset * 60 + dateObj.getTimezoneOffset();
  return new Date(dateObj.getTime() + tzDiff * 60 * 1000).toString();
};

function retrievePredefindedDateRange(key) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date();

  if (key === 'today') {
    var date = formatDate(base);
    return {
      start: date,
      end: date
    };
  }

  if (key === 'yesterday') {
    var yesterday = formatDate(subDays(base, 1));
    return {
      start: yesterday,
      end: yesterday
    };
  }

  if (key === 'year_to_date') {
    return {
      start: formatDate(setDayOfYear(base, 1)),
      end: formatDate(base)
    };
  }

  if (key === 'all_time') {
    return {
      start: formatDate(subYears(base, 3)),
      end: formatDate(base)
    };
  }

  throw new Error("Unrecognized date range: ".concat(key));
} // :: Int -> String -> Option(String) -> Object


function retrieveLastRelativePeriod(num, unit) {
  var base = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Date();

  if (unit === 'year') {
    return {
      start: formatDate(setDayOfYear(subYears(base, num), 1)),
      end: formatDate(setDate(setMonth(subYears(base, 1), 11), 31))
    };
  }

  if (unit === 'quarter') {
    return {
      start: formatDate(setDate(subMonths(base, num * 3 + getMonth(base) % 3), 1)),
      end: formatDate(setDate(addMonths(subMonths(base, 3 * num), 3 - getMonth(base) % 3), 0))
    };
  }

  if (unit === 'month') {
    return {
      start: formatDate(setDate(subMonths(base, num), 1)),
      end: formatDate(setDate(base, 0))
    };
  }

  if (unit === 'week') {
    return {
      start: formatDate(setDay(subWeeks(base, num), 1)),
      end: formatDate(setDay(subWeeks(base, 1), 7))
    };
  } // Default case: day


  return {
    start: formatDate(subDays(base, num)),
    end: formatDate(subDays(base, 1))
  };
} // :: String -> Option(String) -> Object


function retrieveThisRelativePeriod(unit) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date();

  if (unit === 'year') {
    return {
      start: formatDate(setDayOfYear(base, 1)),
      end: formatDate(lastDayOfYear(base))
    };
  }

  if (unit === 'quarter') {
    return {
      start: formatDate(setDate(subMonths(base, getMonth(base) % 3), 1)),
      end: formatDate(setDate(addMonths(base, 3 - getMonth(base) % 3), 0))
    };
  }

  if (unit === 'month') {
    return {
      start: formatDate(setDate(base, 1)),
      end: formatDate(base)
    };
  }

  if (unit === 'week') {
    return {
      start: formatDate(setDay(base, 1)),
      end: formatDate(setDay(base, 7))
    };
  } // Default case: day


  var date = formatDate(base);
  return {
    start: date,
    end: date
  };
} // :: (Object | String) -> Object


function retrievePeriodParams(periodOrKey) {
  if (typeof periodOrKey !== 'string') return periodOrKey;
  var LAST_RANGE_REGEX = /^last(\d+)(day|week|month|quarter|year)s?$/;
  var LAST_RANGE_REGEX_1 = /^last_(day|week|month|quarter|year)$/;
  var LAST_RANGE_REGEX_2 = /^last_(\d+)_(day|week|month|quarter|year)s?(_including_current)?$/;
  var THIS_RANGE_REGEX = /^this_(day|week|month|quarter|year)$/;
  var TILL_YESTERDAY_REGEX = /^(\d{4}-\d{2}-\d{2})_to_yesterday$/;
  var match = periodOrKey.match(LAST_RANGE_REGEX);
  if (match) return {
    type: 'last',
    num: Number(match[1]),
    unit: match[2]
  }; // Old format e.g.: last12months

  match = periodOrKey.match(LAST_RANGE_REGEX_1);
  if (match) return {
    type: 'last',
    num: 1,
    unit: match[1]
  };
  match = periodOrKey.match(LAST_RANGE_REGEX_2);

  if (match) {
    return {
      type: 'last',
      num: Number(match[1]),
      unit: match[2],
      newFormat: true,
      including_current: match[3] === '_including_current',
      includeingParam: match[2] === 'day' ? 'today' : "this ".concat(match[2])
    };
  }

  match = periodOrKey.match(THIS_RANGE_REGEX);
  if (match) return {
    type: 'this',
    unit: match[1]
  };
  match = periodOrKey.match(TILL_YESTERDAY_REGEX);
  if (match) return {
    type: 'till_tomorrow',
    start: match[1]
  };
  if (periodOrKey === 'last') return {
    type: 'last',
    num: undefined,
    unit: undefined
  };
  return null;
} // :: (Object | String) -> Option(String) -> Int


function retrievePeriod(periodOrKey) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date();
  var utcOffset = arguments.length > 2 ? arguments[2] : undefined;
  if (typeof periodOrKey !== 'string') return periodOrKey;
  var baseDate = applyOffset(utcOffset, base);
  var params = retrievePeriodParams(periodOrKey);

  if (params && params.type === 'last') {
    if (params.including_current) {
      if (params.num === 1) {
        return retrieveThisRelativePeriod(params.unit, baseDate);
      }

      var _retrieveLastRelative = retrieveLastRelativePeriod(params.num - 1, params.unit, baseDate),
          start = _retrieveLastRelative.start;

      var _retrieveThisRelative = retrieveThisRelativePeriod(params.unit, baseDate),
          end = _retrieveThisRelative.end;

      return {
        start: start,
        end: end
      };
    }

    return retrieveLastRelativePeriod(params.num, params.unit, baseDate);
  }

  if (params && params.type === 'this') {
    return retrieveThisRelativePeriod(params.unit, baseDate);
  }

  if (params && params.type === 'till_tomorrow') {
    return {
      start: params.start,
      end: formatDate(subDays(baseDate, 1))
    };
  }

  return retrievePredefindedDateRange(periodOrKey, baseDate);
} // :: (Object | String) -> Option(String) -> Object


function calculateAutoCompare(periodOrKey) {
  var baseDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date();
  var autoCompareInfo = {
    period: {}
  };
  var period = retrievePeriod(periodOrKey, baseDate);
  var params = retrievePeriodParams(periodOrKey);

  if (params && params.type === 'this') {
    var subtract = getSubtractionFn(params.unit);
    return {
      label: "Previous ".concat(params.unit),
      period: {
        start: formatDate(subtract(period.start, 1)),
        end: formatDate(subDays(period.start, 1))
      }
    };
  }

  if (params && params.type === 'last') {
    var _subtract = getSubtractionFn(params.unit);

    return {
      label: "Previous ".concat(params.num, " ").concat(params.unit),
      period: {
        start: formatDate(_subtract(period.start, params.num)),
        end: formatDate(subDays(period.start, 1))
      }
    };
  }

  if (periodOrKey === 'year_to_date') {
    return {
      label: 'Previous Year',
      period: {
        start: formatDate(setDayOfYear(subYears(baseDate, 1), 1)),
        end: formatDate(endOfYear(subYears(baseDate, 1)))
      }
    };
  }

  if (periodOrKey === 'today' || periodOrKey === 'yesterday') {
    autoCompareInfo.label = 'Previous Day';
  } else {
    autoCompareInfo.label = 'Previous Period';
  }

  var start = period.start,
      end = period.end;
  var span = differenceInDays(end, start) + 1;
  var compareStart = subDays(start, span);
  var compareEnd = subDays(start, 1);
  var endTomorrow = addDays(end, 1); // Handle whole month date range

  if (getDate(start) === 1 && getDate(endTomorrow) === 1) {
    var yearsDiff = getYear(endTomorrow) - getYear(start);
    var monthDiff = yearsDiff * 12 + getMonth(endTomorrow) - getMonth(start);
    compareStart = subMonths(period.start, monthDiff);
  } // Handle whole year date range


  if (getMonth(start) === 1 && getDate(start) === 1 && getMonth(endTomorrow) === 1 && getDate(endTomorrow) === 1) {
    compareStart = subYears(start, getYear(endTomorrow) - getYear(start));
  }

  autoCompareInfo.period = {
    start: formatDate(compareStart),
    end: formatDate(compareEnd)
  };
  return autoCompareInfo;
} // :: Object -> Option(String) -> Object


function retrieveComparePeriod(period) {
  var comparison = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
  if (comparison === 'auto') return calculateAutoCompare(period).period;

  if (comparison === '12_months_ago') {
    var yearPeriod = retrievePeriod(period);
    return {
      start: formatDate(subYears(yearPeriod.start, 1)),
      end: formatDate(subYears(yearPeriod.end, 1))
    };
  }

  return comparison;
}

var main = {
  retrievePeriod: retrievePeriod,
  retrievePeriodParams: retrievePeriodParams,
  calculateAutoCompare: calculateAutoCompare,
  retrieveComparePeriod: retrieveComparePeriod
};

export default main;
