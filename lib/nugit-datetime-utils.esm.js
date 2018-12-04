import addDays from 'date-fns/add_days';
import differenceInDays from 'date-fns/difference_in_days';
import getDate from 'date-fns/get_date';
import getDayOfYear from 'date-fns/get_day_of_year';
import getMonth from 'date-fns/get_month';
import getYear from 'date-fns/get_year';
import format from 'date-fns/format';
import subDays from 'date-fns/sub_days';
import subMonths from 'date-fns/sub_months';
import subWeeks from 'date-fns/sub_weeks';
import subQuarters from 'date-fns/sub_quarters';
import subYears from 'date-fns/sub_years';
import startOfMonth from 'date-fns/start_of_month';
import startOfISOWeek from 'date-fns/start_of_iso_week';
import startOfQuarter from 'date-fns/start_of_quarter';
import startOfYear from 'date-fns/start_of_year';
import endOfMonth from 'date-fns/end_of_month';
import endOfISOWeek from 'date-fns/end_of_iso_week';
import endOfQuarter from 'date-fns/end_of_quarter';
import endOfYear from 'date-fns/end_of_year';

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var formatDate = function formatDate(date) {
  return format(date, 'YYYY-MM-DD');
}; // :: String -> ((Date | String | Int) -> Int -> Date)

var getSubtractionFn = function getSubtractionFn(unit) {
  if (unit === 'year') return subYears;
  if (unit === 'quarter') return subQuarters;
  if (unit === 'month') return subMonths;
  if (unit === 'week') return subWeeks;
  return subDays;
}; // :: String -> ((Date | String | Int) -> Int -> Date)

var getStartOfFn = function getStartOfFn(unit) {
  if (unit === 'year') return startOfYear;
  if (unit === 'quarter') return startOfQuarter;
  if (unit === 'month') return startOfMonth;
  if (unit === 'week') return startOfISOWeek;
  return function (_) {
    return _;
  };
}; // :: String -> ((Date | String | Int) -> Int -> Date)

var getEndOfFn = function getEndOfFn(unit) {
  if (unit === 'year') return endOfYear;
  if (unit === 'quarter') return endOfQuarter;
  if (unit === 'month') return endOfMonth;
  if (unit === 'week') return endOfISOWeek;
  return function (_) {
    return _;
  };
}; // :: String -> Float

var parseTimezoneStrToHours = function parseTimezoneStrToHours(tz) {
  var _tz$split = tz.split(':'),
      _tz$split2 = _slicedToArray(_tz$split, 2),
      chunk1 = _tz$split2[0],
      chunk2 = _tz$split2[1];

  var isPositive = chunk1[0] === '+';
  var hours = parseInt(chunk1.slice(1), 10);
  var minutes = parseInt(chunk2, 10);
  var result = hours + minutes / 60;
  return isPositive ? result : -result;
}; // The offset can be either in hours or in seconds. Or it can be a string.
// :: (Int | String) -> Int

var normalizeOffsetToMs = function normalizeOffsetToMs(offset) {
  if (typeof offset !== 'number') return parseTimezoneStrToHours(offset) * 3600 * 1000;
  if (Math.abs(offset) > 15) return offset * 1000; // If the offset looks like seconds

  return offset * 3600 * 1000;
}; // :: (Int | String) -> Object -> Int

var getMsDiffFromUTC = function getMsDiffFromUTC(offset, date) {
  return (// The getTimezoneOffset retuns minutes
    normalizeOffsetToMs(offset) + date.getTimezoneOffset() * 60 * 1000
  );
}; // The offset can be either in hours or in seconds. Or it can be a string.
// Returns a new Date string with the offset applied to it.
// :: (Int | String) -> String -> String

var applyOffset = function applyOffset(offset, dateStr) {
  if (!offset) return dateStr;
  var dateObj = new Date(dateStr);
  var diffFromUTC = getMsDiffFromUTC(offset, dateObj);
  return new Date(dateObj.getTime() + diffFromUTC).toString();
};

function migrateLegacyPeriodString(periodString) {
  if (typeof periodString !== 'string') return periodString;
  var LAST_RANGE_REGEX_LEGACY = /^last(\d+)(day|week|month|quarter|year)s?$/;
  var matchLegacyFormat = periodString.match(LAST_RANGE_REGEX_LEGACY);

  if (matchLegacyFormat) {
    return "last_".concat(matchLegacyFormat[1], "_").concat(matchLegacyFormat[2]);
  } // last_x_days_including current is deprecated


  var LAST_RANGE_REGEX = /^(last_(\d+)_days?)_including_current$/;
  var matchIncludingCurrentDay = periodString.match(LAST_RANGE_REGEX);

  if (matchIncludingCurrentDay) {
    return matchIncludingCurrentDay[1];
  }

  switch (periodString) {
    case 'today':
      return 'yesterday';

    case 'year_to_date':
      return 'this_year';

    default:
      return periodString;
  }
} // Proxy given function to migrate legacy period parameter


function convertLegacyParams(fn) {
  return function (period) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, [migrateLegacyPeriodString(period)].concat(args));
  };
}

function retrieveLastRelativePeriod(num, unit) {
  var base = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Date();
  var startOf = getStartOfFn(unit);
  var endOf = getEndOfFn(unit);
  var sub = getSubtractionFn(unit);
  return {
    start: formatDate(startOf(sub(base, num))),
    end: formatDate(endOf(sub(base, 1)))
  };
} // :: String -> Option(String) -> Object


function retrieveThisRelativePeriod(unit) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date();
  var num = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var dayBefore = subDays(base, 1);
  var startOf = getStartOfFn(unit);
  var sub = getSubtractionFn(unit);
  return {
    start: formatDate(startOf(sub(dayBefore, num - 1))),
    end: formatDate(dayBefore)
  };
}

function retrieveTillYesterday(start) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date();
  var dayBefore = subDays(base, 1);
  return {
    start: formatDate(start),
    end: formatDate(dayBefore)
  };
} // :: String -> Option(String) -> Object


function retrievePredefinedDateRange(key) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date();

  switch (key) {
    case 'yesterday':
      return retrieveThisRelativePeriod('day', base);

    case 'all_time':
      // arbritary start in 2015
      return retrieveTillYesterday(Date('2015-01-01'), base);

    default:
      throw new Error("Unrecognized date range: ".concat(key));
  }
} // :: (Object | String) -> Object


function retrievePeriodParams(periodOrKey) {
  if (typeof periodOrKey !== 'string') return periodOrKey;
  var LAST_RANGE_REGEX_1 = /^last_(day|week|month|quarter|year)(_including_current)?$/;
  var LAST_RANGE_REGEX_2 = /^last_(\d+)_(day|week|month|quarter|year)s?(_including_current)?$/;
  var THIS_RANGE_REGEX = /^this_(day|week|month|quarter|year)$/;
  var TILL_YESTERDAY_REGEX = /^(\d{4}-\d{2}-\d{2})_to_yesterday$/;
  var CUSTOM_REGEX = /^(\d{4}-\d{2}-\d{2})_to_(\d{4}-\d{2}-\d{2})$/;
  var match = periodOrKey.match(LAST_RANGE_REGEX_1);

  if (match) {
    return {
      type: 'last',
      num: 1,
      unit: match[1],
      including_current: match[2] === '_including_current',
      includeingParam: match[1] === 'day' ? 'today' : 'this'
    };
  }

  match = periodOrKey.match(LAST_RANGE_REGEX_2);

  if (match) {
    return {
      type: 'last',
      num: Number(match[1]),
      unit: match[2],
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
    type: 'till_yesterday',
    start: match[1]
  };
  match = periodOrKey.match(CUSTOM_REGEX);
  if (match) return {
    start: match[1],
    end: match[2]
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
    var unit = params.unit,
        num = params.num;

    if (params.including_current) {
      return retrieveThisRelativePeriod(unit, baseDate, num);
    }

    return retrieveLastRelativePeriod(num, unit, baseDate);
  }

  if (params && params.type === 'this') {
    return retrieveThisRelativePeriod(params.unit, baseDate);
  }

  if (params && params.type === 'till_yesterday') {
    return retrieveTillYesterday(params.start, base);
  }

  if (params && params.type === 'custom') {
    return {
      start: params.start,
      end: params.end
    };
  }

  return retrievePredefinedDateRange(periodOrKey, baseDate);
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

  if (periodOrKey === 'yesterday') {
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


  if (getDayOfYear(start) === 1 && getDayOfYear(endTomorrow) === 1) {
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
    // For 12 month comparison, we compare with same period length
    var yearPeriod = retrievePeriod(period);
    return {
      start: formatDate(subYears(yearPeriod.start, 1)),
      end: formatDate(subYears(yearPeriod.end, 1))
    };
  }

  return comparison;
}

var main = {
  migrateLegacyPeriodString: migrateLegacyPeriodString,
  retrievePeriod: convertLegacyParams(retrievePeriod),
  retrievePeriodParams: convertLegacyParams(retrievePeriodParams),
  calculateAutoCompare: convertLegacyParams(calculateAutoCompare),
  retrieveComparePeriod: convertLegacyParams(retrieveComparePeriod)
};

export default main;
