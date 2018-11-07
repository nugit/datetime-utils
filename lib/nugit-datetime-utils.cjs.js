'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var addDays = _interopDefault(require('date-fns/add_days'));
var addMonths = _interopDefault(require('date-fns/add_months'));
var endOfYear = _interopDefault(require('date-fns/end_of_year'));
var differenceInDays = _interopDefault(require('date-fns/difference_in_days'));
var getDate = _interopDefault(require('date-fns/get_date'));
var getDayOfYear = _interopDefault(require('date-fns/get_day_of_year'));
var getMonth = _interopDefault(require('date-fns/get_month'));
var getYear = _interopDefault(require('date-fns/get_year'));
var lastDayOfYear = _interopDefault(require('date-fns/last_day_of_year'));
var setDate = _interopDefault(require('date-fns/set_date'));
var setDay = _interopDefault(require('date-fns/set_day'));
var setDayOfYear = _interopDefault(require('date-fns/set_day_of_year'));
var setMonth = _interopDefault(require('date-fns/set_month'));
var format = _interopDefault(require('date-fns/format'));
var subDays = _interopDefault(require('date-fns/sub_days'));
var subMonths = _interopDefault(require('date-fns/sub_months'));
var subWeeks = _interopDefault(require('date-fns/sub_weeks'));
var subYears = _interopDefault(require('date-fns/sub_years'));

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
  if (unit === 'quarter') return function (date, nb) {
    return subMonths(date, nb * 3);
  };
  if (unit === 'month') return subMonths;
  if (unit === 'week') return subWeeks;
  return subDays;
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

module.exports = main;
