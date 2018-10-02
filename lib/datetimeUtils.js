"use strict";

var _require = require('date-fns'),
    addDays = _require.addDays,
    endOfYear = _require.endOfYear,
    format = _require.format,
    differenceInDays = _require.differenceInDays,
    getDate = _require.getDate,
    getMonth = _require.getMonth,
    getYear = _require.getYear,
    lastDayOfYear = _require.lastDayOfYear,
    setDate = _require.setDate,
    setDay = _require.setDay,
    setDayOfYear = _require.setDayOfYear,
    subDays = _require.subDays,
    subMonths = _require.subMonths,
    subWeeks = _require.subWeeks,
    subYears = _require.subYears;

var formatDate = function formatDate(date) {
  return format(date, 'YYYY-MM-DD');
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

  throw new Error('Unrecognized date range: ' + key);
}

function retrieveLastRelativePeriod(num, unit) {
  var base = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Date();

  if (unit === 'day') {
    return {
      start: formatDate(subDays(base, num)),
      end: formatDate(subDays(base, 1))
    };
  }

  if (unit === 'week') {
    return {
      start: formatDate(setDay(subWeeks(base, num), 1)),
      end: formatDate(setDay(subWeeks(base, 1), 7))
    };
  }

  if (unit === 'month') {
    return {
      start: formatDate(setDate(subMonths(base, num), 1)),
      end: formatDate(setDate(base, 0))
    };
  }

  if (unit === 'quarter') {
    return {
      start: start.subtract(3 * num, 'months').subtract(start.month() % 3, 'months').date(1).format(dateFormat),
      end: end.subtract(3 * num, 'months').add(3 - end.month() % 3, 'months').date(0).format(dateFormat)
    };
  }

  if (unit === 'year') {
    return {
      start: formatDate(setDayOfYear(subYears(start, num), 1)),
      end: formatDate(setDate(setMonth(subYears(base, 1), 11), 31))
    };
  }
}

function retrieveThisRelativePeriod(unit) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date();

  if (unit === 'day') {
    var date = formatDate(base);
    return {
      start: date,
      end: date
    };
  }

  if (unit === 'week') {
    return {
      start: formatDate(setDay(base, 1)),
      end: formatDate(setDay(base, 7))
    };
  }

  if (unit === 'month') {
    return {
      start: formatDate(setDate(base, 1)),
      end: formatDate(base)
    };
  }

  if (unit === 'quarter') {
    return {
      start: start.subtract(start.month() % 3, 'months').date(1).format(dateFormat),
      end: end.add(3 - end.month() % 3, 'months').date(0).format(dateFormat)
    };
  }

  if (unit === 'year') {
    return {
      start: formatDate(setDayOfYear(base, 1)),
      end: formatDate(lastDayOfYear(base))
    };
  }
}

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
  }; //old format e.g.: last12months

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
}

function retrievePeriod(periodOrKey, baseDate, utcOffset) {
  if (typeof periodOrKey !== 'string') return periodOrKey;

  if (utcOffset) {
    baseDate = moment.utc(baseDate).utcOffset(utcOffset);
  }

  var params = retrievePeriodParams(periodOrKey);

  if (params && params.type === 'last') {
    var num = params.num;

    if (params.including_current) {
      if (params.num === 1) {
        return retrieveThisRelativePeriod(params.unit, baseDate);
      } else {
        var part1 = retrieveLastRelativePeriod(params.num - 1, params.unit, baseDate);
        var part2 = retrieveThisRelativePeriod(params.unit, baseDate);
        return {
          start: part1.start,
          end: part2.end
        };
      }
    } else {
      return retrieveLastRelativePeriod(params.num, params.unit, baseDate);
    }
  } else if (params && params.type === 'this') {
    return retrieveThisRelativePeriod(params.unit, baseDate);
  } else if (params && params.type === 'till_tomorrow') {
    return {
      start: params.start,
      end: formatDate(subDays(baseDate, 1))
    };
  }

  return retrievePredefindedDateRange(periodOrKey, baseDate);
}

var getSubtractionFn = function getSubtractionFn(unit) {
  if ('year') return subYears;
  if ('month') return subMonths;
  if ('week') return subWeeks;
  return subDays;
};

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
      label: "Previous Year",
      period: {
        start: formatDate(setDayOfYear(subYears(baseDate, 1), 1)),
        end: formatDate(endOfYear(subYears(baseDate, 1)))
      }
    };
  }

  if (periodOrKey === 'today' || periodOrKey === 'yesterday') {
    autoCompareInfo.label = 'Previous Day';
  } else {
    autoCompareInfo.label = "Previous Period";
  }

  var start = period.start,
      end = period.end;
  var span = differenceInDays(end, start) + 1;
  var compareStart = subDays(start, span);
  var compareEnd = subDays(start, 1);
  var endTomorrow = addDays(end, 1); //handle whole month date range

  if (getDate(start) === 1 && getDate(endTomorrow) === 1) {
    var monthdiff = (getYear(endTomorrow) - getYear(start)) * 12 + getMonth(endTomorrow) - getMonth(start);
    compareStart = subMonths(period.start, monthdiff);
  } //handle whole year date range


  if (getMonth(start) === 1 && getDate(start) === 1 && getMonth(endTomorrow) === 1 && getDate(endTomorrow) === 1) {
    compareStart = subYears(start, getYears(endTomorrow) - getYears(start));
  }

  autoCompareInfo.period = {
    start: formatDate(compareStart),
    end: formatDate(compareEnd)
  };
  return autoCompareInfo;
}

function retrieveComparePeriod(period) {
  var comparison = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
  if (comparison === 'auto') return calculateAutoCompare(period).period;

  if (comparison === '12_months_ago') {
    var yearPeriod = retrievePeriod(period);
    return {
      start: formatDate(subYear(yearPeriod.start, 1)),
      end: formatDate(subYear(yearPeriod.end, 1))
    };
  }

  return comparison;
}

var getDateRange = retrievePeriod;
module.exports = {
  getDateRange: getDateRange,
  retrievePeriod: retrievePeriod,
  retrievePeriodParams: retrievePeriodParams,
  retrieveComparePeriod: retrieveComparePeriod,
  calculateAutoCompare: calculateAutoCompare
};