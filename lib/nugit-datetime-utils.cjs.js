'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var isSameDay = _interopDefault(require('date-fns/is_same_day'));
var getDate = _interopDefault(require('date-fns/get_date'));
var getDayOfYear = _interopDefault(require('date-fns/get_day_of_year'));
var getDaysInYear = _interopDefault(require('date-fns/get_days_in_year'));
var getDaysInMonth = _interopDefault(require('date-fns/get_days_in_month'));
var isMonday = _interopDefault(require('date-fns/is_monday'));
var isSunday = _interopDefault(require('date-fns/is_sunday'));
var format = _interopDefault(require('date-fns/format'));
var subDays = _interopDefault(require('date-fns/sub_days'));
var subMonths = _interopDefault(require('date-fns/sub_months'));
var subWeeks = _interopDefault(require('date-fns/sub_weeks'));
var subQuarters = _interopDefault(require('date-fns/sub_quarters'));
var subYears = _interopDefault(require('date-fns/sub_years'));
var startOfMonth = _interopDefault(require('date-fns/start_of_month'));
var startOfISOWeek = _interopDefault(require('date-fns/start_of_iso_week'));
var startOfQuarter = _interopDefault(require('date-fns/start_of_quarter'));
var startOfYear = _interopDefault(require('date-fns/start_of_year'));
var endOfMonth = _interopDefault(require('date-fns/end_of_month'));
var endOfISOWeek = _interopDefault(require('date-fns/end_of_iso_week'));
var endOfQuarter = _interopDefault(require('date-fns/end_of_quarter'));
var endOfYear = _interopDefault(require('date-fns/end_of_year'));
var differenceInDays = _interopDefault(require('date-fns/difference_in_days'));
var differenceInWeeks = _interopDefault(require('date-fns/difference_in_weeks'));
var differenceInMonths = _interopDefault(require('date-fns/difference_in_months'));
var differenceInQuarters = _interopDefault(require('date-fns/difference_in_quarters'));
var differenceInYears = _interopDefault(require('date-fns/difference_in_years'));

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

var getDiffFn = function getDiffFn(unit) {
  if (unit === 'year') return differenceInYears;
  if (unit === 'quarter') return differenceInQuarters;
  if (unit === 'month') return differenceInMonths;
  if (unit === 'week') return differenceInWeeks;
  return differenceInDays;
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
// :: (Int | String) -> (Int | String | Date) -> Date

var applyOffset = function applyOffset(offset, date) {
  if (!offset) return date;
  var dateObj = date instanceof Date ? date : new Date(date);
  var diffFromUTC = getMsDiffFromUTC(offset, dateObj);
  return new Date(dateObj.getTime() + diffFromUTC);
};

function formatRange(start, end) {
  return {
    start: formatDate(start),
    end: formatDate(end)
  };
} // :: Int -> String -> Option(String) -> Object


function getLastRelativePeriodRange(num, unit) {
  var base = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();
  var startOf = getStartOfFn(unit);
  var endOf = getEndOfFn(unit);
  var sub = getSubtractionFn(unit);
  return formatRange(startOf(sub(base, num)), endOf(sub(base, 1)));
} // :: String -> Option(String) -> Object


function getThisRelativePeriodRange(unit) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var num = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var dayBefore = subDays(base, 1);
  var startOf = getStartOfFn(unit);
  var sub = getSubtractionFn(unit);
  return formatRange(startOf(sub(dayBefore, num - 1)), formatDate(dayBefore));
}

function getTillYesterdayRange(start) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var dayBefore = subDays(base, 1);
  return formatRange(start, dayBefore);
} // :: (String) -> Object


function getPeriodParams(period) {
  var LAST_RANGE_REGEX_1 = /^last_(day|week|month|quarter|year)(_including_current)?$/;
  var LAST_RANGE_REGEX_2 = /^last_(\d+)_(day|week|month|quarter|year)s?(_including_current)?$/;
  var THIS_RANGE_REGEX = /^this_(day|week|month|quarter|year)$/;
  var TILL_YESTERDAY_REGEX = /^(\d{4}-\d{2}-\d{2})_to_yesterday$/;
  var CUSTOM_REGEX = /^(\d{4}-\d{2}-\d{2})_to_(\d{4}-\d{2}-\d{2})$/;
  var match = period.match(LAST_RANGE_REGEX_1);

  if (match) {
    return {
      type: 'last',
      num: 1,
      unit: match[1],
      including_current: match[2] === '_including_current',
      includingParam: 'this'
    };
  }

  match = period.match(LAST_RANGE_REGEX_2);

  if (match) {
    return {
      type: 'last',
      num: Number(match[1]),
      unit: match[2],
      including_current: match[3] === '_including_current',
      includingParam: match[2] === 'day' ? 'today' : "this ".concat(match[2])
    };
  }

  match = period.match(THIS_RANGE_REGEX);
  if (match) return {
    type: 'this',
    unit: match[1]
  };
  match = period.match(TILL_YESTERDAY_REGEX);
  if (match) return {
    type: 'till_yesterday',
    start: match[1]
  };
  match = period.match(CUSTOM_REGEX);
  if (match) return {
    type: 'custom',
    start: match[1],
    end: match[2]
  };

  switch (period) {
    case 'yesterday':
      return {
        type: 'yesterday'
      };

    case 'all_time':
      return {
        type: 'all_time'
      };

    default:
      throw new Error("Unrecognized date range: ".concat(period));
  }
} // :: (String) -> Option(String) -> Int


function getRange(period) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var utcOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var baseDate = applyOffset(utcOffset, base);
  var params = getPeriodParams(period);

  switch (params.type) {
    case 'last':
      {
        var unit = params.unit,
            num = params.num;

        if (params.including_current) {
          return getThisRelativePeriodRange(unit, baseDate, num);
        }

        return getLastRelativePeriodRange(num, unit, baseDate);
      }

    case 'this':
      return getThisRelativePeriodRange(params.unit, baseDate);

    case 'till_yesterday':
      return getTillYesterdayRange(applyOffset(utcOffset, params.start), baseDate);

    case 'yesterday':
      return getThisRelativePeriodRange('day', baseDate);

    case 'all_time':
      // arbritary start in 2015
      return getTillYesterdayRange(new Date('2015-01-01'), baseDate);

    case 'custom':
      return formatRange(applyOffset(utcOffset, params.start), applyOffset(utcOffset, params.end));

    default:
      throw new Error("Unrecognized date range: ".concat(period));
  }
}

function getBestCompareUnit(start, end) {
  if (getDayOfYear(start) === 1 && getDayOfYear(end) === getDaysInYear(end)) {
    return 'year';
  }

  var startOfQuarter$$1 = getStartOfFn('quarter');
  var endOfQuarter$$1 = getEndOfFn('quarter');

  if (isSameDay(startOfQuarter$$1(start), start) && isSameDay(endOfQuarter$$1(end), end)) {
    return 'quarter';
  }

  if (getDate(start) === 1 && getDate(end) === getDaysInMonth(end)) {
    return 'month';
  }

  if (isMonday(start) && isSunday(end)) {
    return 'week';
  }

  return 'day';
} // :: (String) -> Option(String) -> Object


function getAutoCompareRangeAndLabel(period) {
  var baseDate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  var _getRange = getRange(period, baseDate),
      start = _getRange.start,
      end = _getRange.end;

  var params = getPeriodParams(period);

  switch (params.type) {
    case 'last':
      {
        var subtract = getSubtractionFn(params.unit);
        return {
          label: "Previous ".concat(params.num, " ").concat(params.unit),
          range: formatRange(subtract(start, params.num), subDays(start, 1))
        };
      }

    case 'this':
      {
        var _subtract = getSubtractionFn(params.unit);

        return {
          label: "Previous ".concat(params.unit),
          range: formatRange(_subtract(start, 1), subDays(start, 1))
        };
      }

    case 'yesterday':
      return {
        label: 'Previous Day',
        range: formatRange(subDays(start, 1), subDays(start, 1))
      };

    default:
      {
        var compareUnit = getBestCompareUnit(start, end);

        var _subtract2 = getSubtractionFn(compareUnit);

        var diffFn = getDiffFn(compareUnit);

        var compareStart = _subtract2(start, diffFn(end, start) + 1);

        var compareEnd = subDays(start, 1);
        return {
          label: 'Previous Period',
          range: formatRange(compareStart, compareEnd)
        };
      }
  }
} // :: Object -> Option(String) -> Object


function getCompareRange(period) {
  var compareMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';

  switch (compareMode) {
    case 'auto':
      return getAutoCompareRangeAndLabel(period).range;

    case '12_months_ago':
      {
        // For 12 month comparison, we compare with same period length
        var _getRange2 = getRange(period),
            start = _getRange2.start,
            end = _getRange2.end;

        return formatRange(subYears(start, 1), subYears(end, 1));
      }

    default:
      return getRange(compareMode);
  }
}

function getTillYesterdayPeriod(date) {
  return "".concat(formatDate(date), "_to_yesterday");
}

function getCustomPeriod(start, end) {
  return "".concat(formatDate(start), "_to_").concat(formatDate(end));
}

function getLastPeriod(num, unit, includingCurrent) {
  var suffix = "".concat(unit).concat(includingCurrent ? '_including_current' : '');

  if (num === 1) {
    return "last_".concat(suffix);
  }

  return "last_".concat(num, "_").concat(suffix);
}

function getThisPeriod(unit) {
  return "this_".concat(unit);
}

function migrateLegacyPeriod(period) {
  if (typeof period !== 'string') {
    // a range is provided, this is legacy way to handle custom periods
    return getCustomPeriod(period.start, period.end);
  }

  var LAST_RANGE_REGEX_LEGACY = /^last(\d+)(day|week|month|quarter|year)s?$/;
  var matchLegacyFormat = period.match(LAST_RANGE_REGEX_LEGACY);

  if (matchLegacyFormat) {
    return "last_".concat(matchLegacyFormat[1], "_").concat(matchLegacyFormat[2]);
  } // last_x_days_including current is deprecated


  var LAST_RANGE_REGEX = /^(last_(\d+)_days?)_including_current$/;
  var matchIncludingCurrentDay = period.match(LAST_RANGE_REGEX);

  if (matchIncludingCurrentDay) {
    return matchIncludingCurrentDay[1];
  }

  switch (period) {
    case 'today':
      return 'yesterday';

    case 'year_to_date':
      return 'this_year';

    default:
      return period;
  }
}

function migrateLegacyCompareMode() {
  var compareMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';

  switch (compareMode) {
    case 'auto':
    case '12_months_ago':
      return compareMode;

    default:
      // in that case compareMode is actually a range
      return migrateLegacyPeriod(compareMode);
  }
} // Proxy given function to migrate legacy period parameter


function convertLegacyParams(fn) {
  return function (period) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, [migrateLegacyPeriod(period)].concat(args));
  };
}

function toLegacyPeriod(period) {
  var _getPeriodParams = getPeriodParams(period),
      type = _getPeriodParams.type;

  return type === 'custom' ? getRange(period) : period;
}

function toLegacyCompareMode(compareMode) {
  switch (compareMode) {
    case 'auto':
    case '12_months_ago':
      return compareMode;

    default:
      return toLegacyPeriod(compareMode);
  }
}

var retrievePeriod = convertLegacyParams(getRange);
var retrievePeriodParams = convertLegacyParams(getPeriodParams);

var retrieveComparePeriod = function retrieveComparePeriod(period, compareMode) {
  return getCompareRange(migrateLegacyPeriod(period), migrateLegacyCompareMode(compareMode));
};

var calculateAutoCompare = function calculateAutoCompare(period, base) {
  var _getAutoCompareRangeA = getAutoCompareRangeAndLabel(getRange(migrateLegacyPeriod(period)), base),
      label = _getAutoCompareRangeA.label,
      range = _getAutoCompareRangeA.range;

  return {
    label: label,
    period: range
  };
};

var index = {
  getRange: getRange,
  getPeriodParams: getPeriodParams,
  getCompareRange: getCompareRange,
  getAutoCompareRangeAndLabel: getAutoCompareRangeAndLabel,
  getTillYesterdayPeriod: getTillYesterdayPeriod,
  getCustomPeriod: getCustomPeriod,
  getLastPeriod: getLastPeriod,
  getThisPeriod: getThisPeriod,
  formatDate: formatDate,
  // legacy
  migrateLegacyPeriod: migrateLegacyPeriod,
  migrateLegacyCompareMode: migrateLegacyCompareMode,
  toLegacyPeriod: toLegacyPeriod,
  toLegacyCompareMode: toLegacyCompareMode,
  retrievePeriod: retrievePeriod,
  retrievePeriodParams: retrievePeriodParams,
  retrieveComparePeriod: retrieveComparePeriod,
  calculateAutoCompare: calculateAutoCompare
};

module.exports = index;
