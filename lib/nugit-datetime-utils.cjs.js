'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _addDays = _interopDefault(require('date-fns/addDays'));
var _addMonths = _interopDefault(require('date-fns/addMonths'));
var _addWeeks = _interopDefault(require('date-fns/addWeeks'));
var _differenceInCalendarDays = _interopDefault(require('date-fns/differenceInCalendarDays'));
var _differenceInDays = _interopDefault(require('date-fns/differenceInDays'));
var _differenceInMonths = _interopDefault(require('date-fns/differenceInMonths'));
var _differenceInQuarters = _interopDefault(require('date-fns/differenceInQuarters'));
var _differenceInWeeks = _interopDefault(require('date-fns/differenceInWeeks'));
var _differenceInYears = _interopDefault(require('date-fns/differenceInYears'));
var _eachDayOfInterval = _interopDefault(require('date-fns/eachDayOfInterval'));
var _endOfISOWeek = _interopDefault(require('date-fns/endOfISOWeek'));
var _endOfMonth = _interopDefault(require('date-fns/endOfMonth'));
var _endOfQuarter = _interopDefault(require('date-fns/endOfQuarter'));
var _endOfWeek = _interopDefault(require('date-fns/endOfWeek'));
var _endOfYear = _interopDefault(require('date-fns/endOfYear'));
var _format = _interopDefault(require('date-fns/format'));
var _formatDistanceToNow = _interopDefault(require('date-fns/formatDistanceToNow'));
var _getDate = _interopDefault(require('date-fns/getDate'));
var _getDayOfYear = _interopDefault(require('date-fns/getDayOfYear'));
var _getDaysInMonth = _interopDefault(require('date-fns/getDaysInMonth'));
var _getDaysInYear = _interopDefault(require('date-fns/getDaysInYear'));
var _getISODay = _interopDefault(require('date-fns/getISODay'));
var _getMonth = _interopDefault(require('date-fns/getMonth'));
var _getYear = _interopDefault(require('date-fns/getYear'));
var _isAfter = _interopDefault(require('date-fns/isAfter'));
var _isBefore = _interopDefault(require('date-fns/isBefore'));
var _isMonday = _interopDefault(require('date-fns/isMonday'));
var _isSameDay = _interopDefault(require('date-fns/isSameDay'));
var _isSameMonth = _interopDefault(require('date-fns/isSameMonth'));
var _isSunday = _interopDefault(require('date-fns/isSunday'));
var _isToday = _interopDefault(require('date-fns/isToday'));
var _isValid = _interopDefault(require('date-fns/isValid'));
var _isWithinInterval = _interopDefault(require('date-fns/isWithinInterval'));
var _max = _interopDefault(require('date-fns/max'));
var _min = _interopDefault(require('date-fns/min'));
var _parseISO = _interopDefault(require('date-fns/parseISO'));
var _setDate = _interopDefault(require('date-fns/setDate'));
var _setDay = _interopDefault(require('date-fns/setDay'));
var _setISODay = _interopDefault(require('date-fns/setISODay'));
var _setMonth = _interopDefault(require('date-fns/setMonth'));
var _startOfISOWeek = _interopDefault(require('date-fns/startOfISOWeek'));
var _startOfMonth = _interopDefault(require('date-fns/startOfMonth'));
var _startOfQuarter = _interopDefault(require('date-fns/startOfQuarter'));
var _startOfWeek = _interopDefault(require('date-fns/startOfWeek'));
var _startOfYear = _interopDefault(require('date-fns/startOfYear'));
var _subDays = _interopDefault(require('date-fns/subDays'));
var _subMonths = _interopDefault(require('date-fns/subMonths'));
var _subQuarters = _interopDefault(require('date-fns/subQuarters'));
var _subWeeks = _interopDefault(require('date-fns/subWeeks'));
var _subYears = _interopDefault(require('date-fns/subYears'));

var parseISO = function parseISO(date, options) {
  return typeof date === 'string' ? _parseISO(date, options) : date;
}; // :: (Date | Int | String) -> Number -> Date

var addDays = function addDays(date, days) {
  return _addDays(parseISO(date), days);
}; // :: (Date | Int | String) -> Number -> Date

var addMonths = function addMonths(date, months) {
  return _addMonths(parseISO(date), months);
}; // :: (Date | Int | String) -> Number -> Date

var addWeeks = function addWeeks(date, weeks) {
  return _addWeeks(parseISO(date), weeks);
}; // :: (Date | Int | String) -> (Date | Int | String) -> Number

var differenceInCalendarDays = function differenceInCalendarDays(firstDate, secondDate) {
  return _differenceInCalendarDays(parseISO(firstDate), parseISO(secondDate));
}; // :: (Date | Int | String) -> (Date | Int | String) -> Number

var differenceInDays = function differenceInDays(firstDate, secondDate) {
  return _differenceInDays(parseISO(firstDate), parseISO(secondDate));
}; // :: (Date | Int | String) -> (Date | Int | String) -> Number

var differenceInMonths = function differenceInMonths(firstDate, secondDate) {
  return _differenceInMonths(parseISO(firstDate), parseISO(secondDate));
}; // :: (Date | Int | String) -> (Date | Int | String) -> Number

var differenceInQuarters = function differenceInQuarters(firstDate, secondDate) {
  return _differenceInQuarters(parseISO(firstDate), parseISO(secondDate));
}; // :: (Date | Int | String) -> (Date | Int | String) -> Number

var differenceInWeeks = function differenceInWeeks(firstDate, secondDate) {
  return _differenceInWeeks(parseISO(firstDate), parseISO(secondDate));
}; // :: (Date | Int | String) -> (Date | Int | String) -> Number

var differenceInYears = function differenceInYears(firstDate, secondDate) {
  return _differenceInYears(parseISO(firstDate), parseISO(secondDate));
}; // :: (Date | Int | String) -> (Date | Int | String) -> Option(Object) -> Array(Date)

var eachDayOfInterval = function eachDayOfInterval(firstDate, lastDate, options) {
  return _eachDayOfInterval({
    start: parseISO(firstDate),
    end: parseISO(lastDate)
  }, options);
}; // :: (Date | Int | String) -> Date

var endOfISOWeek = function endOfISOWeek(date) {
  return _endOfISOWeek(parseISO(date));
}; // :: (Date | Int | String) -> Date

var endOfMonth = function endOfMonth(date) {
  return _endOfMonth(parseISO(date));
}; // :: (Date | Int | String) -> Date

var endOfQuarter = function endOfQuarter(date) {
  return _endOfQuarter(parseISO(date));
}; // :: (Date | Int | String) -> Option(Object) -> Date

var endOfWeek = function endOfWeek(date, options) {
  return _endOfWeek(parseISO(date), options);
}; // :: (Date | Int | String) -> Date

var endOfYear = function endOfYear(date) {
  return _endOfYear(parseISO(date));
}; // :: (Date | Int | String) -> String -> Option(Object) -> String

var format = function format(date, formatIn, options) {
  return _format(parseISO(date), formatIn, options);
}; // :: (Date | Int | String) -> Option(Object) -> String

var formatDistanceToNow = function formatDistanceToNow(date, options) {
  return _formatDistanceToNow(parseISO(date), options);
}; // :: (Date | Int | String) -> Number

var getDate = function getDate(date) {
  return _getDate(parseISO(date));
}; // :: (Date | Int | String) -> Number

var getDayOfYear = function getDayOfYear(date) {
  return _getDayOfYear(parseISO(date));
}; // :: (Date | Int | String) -> Number

var getDaysInMonth = function getDaysInMonth(date) {
  return _getDaysInMonth(parseISO(date));
}; // :: (Date | Int | String) -> Number

var getDaysInYear = function getDaysInYear(date) {
  return _getDaysInYear(parseISO(date));
}; // :: (Date | Int | String) -> Number

var getISODay = function getISODay(date) {
  return _getISODay(parseISO(date));
}; // :: (Date | Int | String) -> Number

var getMonth = function getMonth(date) {
  return _getMonth(parseISO(date));
}; // :: (Date | Int | String) -> Number

var getYear = function getYear(date) {
  return _getYear(parseISO(date));
}; // :: (Date | Int | String) -> (Date | Int | String) -> Boolean

var isAfter = function isAfter(firstDate, secondDate) {
  return _isAfter(parseISO(firstDate), parseISO(secondDate));
}; // :: (Date | Int | String) -> (Date | Int | String) -> Boolean

var isBefore = function isBefore(firstDate, secondDate) {
  return _isBefore(parseISO(firstDate), parseISO(secondDate));
}; // :: (Date | Int | String) -> Boolean

var isMonday = function isMonday(date) {
  return _isMonday(parseISO(date));
}; // :: (Date | Int | String) -> (Date | Int | String) -> Boolean

var isSameDay = function isSameDay(firstDate, secondDate) {
  return _isSameDay(parseISO(firstDate), parseISO(secondDate));
}; // :: (Date | Int | String) -> (Date | Int | String) -> Boolean

var isSameMonth = function isSameMonth(firstDate, secondDate) {
  return _isSameMonth(parseISO(firstDate), parseISO(secondDate));
}; // :: (Date | Int | String) -> Boolean

var isSunday = function isSunday(date) {
  return _isSunday(parseISO(date));
}; // :: (Date | Int | String) -> Boolean

var isToday = function isToday(date) {
  return _isToday(parseISO(date));
}; // :: (Date | Int | String) -> Boolean

var isValid = function isValid(date) {
  return _isValid(parseISO(date));
}; // :: (Date | Int | String) -> (Date | Int | String) -> (Date | Int | String) -> Boolean

var isWithinInterval = function isWithinInterval(date, startDate, endDate) {
  return _isWithinInterval(parseISO(date), {
    start: parseISO(startDate),
    end: parseISO(endDate)
  });
}; // :: Array(Date | Int | String) -> Date

var max = function max(dates) {
  return _max(dates.map(parseISO));
}; // :: Array(Date | Int | String) -> Date

var min = function min(dates) {
  return _min(dates.map(parseISO));
}; // :: (Date | Int | String) -> Number -> Date

var setDate = function setDate(date, day) {
  return _setDate(parseISO(date), day);
}; // :: (Date | Int | String) -> Number -> Option(Object) -> Date

var setDay = function setDay(date, day, options) {
  return _setDay(parseISO(date), day, options);
}; // :: (Date | Int | String) -> Number -> Date

var setISODay = function setISODay(date, day) {
  return _setISODay(parseISO(date), day);
}; // :: (Date | Int | String) -> Number -> Date

var setMonth = function setMonth(date, month) {
  return _setMonth(parseISO(date), month);
}; // :: (Date | Int | String) -> Date

var startOfISOWeek = function startOfISOWeek(date) {
  return _startOfISOWeek(parseISO(date));
}; // :: (Date | Int | String) -> Date

var startOfMonth = function startOfMonth(date) {
  return _startOfMonth(parseISO(date));
}; // :: (Date | Int | String) -> Date

var startOfQuarter = function startOfQuarter(date) {
  return _startOfQuarter(parseISO(date));
}; // :: (Date | Int | String) -> Option(Object) -> Date

var startOfWeek = function startOfWeek(date, options) {
  return _startOfWeek(parseISO(date), options);
}; // :: (Date | Int | String) -> Date

var startOfYear = function startOfYear(date) {
  return _startOfYear(parseISO(date));
}; // :: (Date | Int | String) -> Number -> Date

var subDays = function subDays(date, days) {
  return _subDays(parseISO(date), days);
}; // :: (Date | Int | String) -> Number -> Date

var subMonths = function subMonths(date, months) {
  return _subMonths(parseISO(date), months);
}; // :: (Date | Int | String) -> Number -> Date

var subQuarters = function subQuarters(date, quarters) {
  return _subQuarters(parseISO(date), quarters);
}; // :: (Date | Int | String) -> Number -> Date

var subWeeks = function subWeeks(date, weeks) {
  return _subWeeks(parseISO(date), weeks);
}; // :: (Date | Int | String) -> Number -> Date

var subYears = function subYears(date, years) {
  return _subYears(parseISO(date), years);
};

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

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
  return format(date, 'yyyy-MM-dd');
}; // :: String -> ((Date | String | Int) -> Int -> Date)

var getSubtractionFn = function getSubtractionFn(unit) {
  if (unit === 'year') return subYears;
  if (unit === 'quarter') return subQuarters;
  if (unit === 'month') return subMonths;
  if (unit === 'week') return subWeeks;
  return subDays;
}; // :: String -> ((Date | String | Int) -> (Date | String | Int) -> Int)

var getDiffFn = function getDiffFn(unit) {
  if (unit === 'year') return differenceInYears;
  if (unit === 'quarter') return differenceInQuarters;
  if (unit === 'month') return differenceInMonths;
  if (unit === 'week') return differenceInWeeks;
  return differenceInDays;
}; // :: String -> ((Date | String | Int) -> Date)

var getStartOfFn = function getStartOfFn(unit) {
  if (unit === 'year') return startOfYear;
  if (unit === 'quarter') return startOfQuarter;
  if (unit === 'month') return startOfMonth;
  if (unit === 'week') return startOfISOWeek; // return identity function when unit is day

  return function (_) {
    return _;
  };
}; // :: String -> ((Date | String | Int) -> Date)

var getEndOfFn = function getEndOfFn(unit) {
  if (unit === 'year') return endOfYear;
  if (unit === 'quarter') return endOfQuarter;
  if (unit === 'month') return endOfMonth;
  if (unit === 'week') return endOfISOWeek; // return identity function when unit is day

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

var getMsDiffFromUTC = function getMsDiffFromUTC(offset) {
  return (// The getTimezoneOffset retuns minutes
    normalizeOffsetToMs(offset) + new Date().getTimezoneOffset() * 60 * 1000
  );
}; // The offset can be either in hours or in seconds. Or it can be a string.
// Returns a new Date string with the offset applied to it.
// :: (Int | String) -> (Int | String | Date) -> Date

var applyOffset = function applyOffset(offset, date) {
  if (!offset) return date;
  var dateObj = date instanceof Date ? date : new Date(date);
  var diffFromUTC = getMsDiffFromUTC(offset);
  return new Date(dateObj.getTime() + diffFromUTC);
};

var formatRange = function formatRange(start, end) {
  return {
    start: formatDate(start),
    end: formatDate(end)
  };
}; // :: Int -> String -> Option(Date | Int | String) = new Date() -> Object


var getLastRelativePeriodRange = function getLastRelativePeriodRange(num, unit) {
  var base = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();
  var startOf = getStartOfFn(unit);
  var endOf = getEndOfFn(unit);
  var sub = getSubtractionFn(unit);
  return formatRange(startOf(sub(base, num)), endOf(sub(base, 1)));
}; // :: String -> Option(Date | Int | String) = new Date() -> Object


var getThisRelativePeriodRange = function getThisRelativePeriodRange(unit) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var num = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var dayBefore = subDays(base, 1);
  var startOf = getStartOfFn(unit);
  var sub = getSubtractionFn(unit);
  return formatRange(startOf(sub(dayBefore, num - 1)), formatDate(dayBefore));
}; // :: (Date | Int | String) -> Option(Date | Int | String) = new Date() -> Object


var getTillYesterdayRange = function getTillYesterdayRange(start) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var dayBefore = subDays(base, 1);
  return formatRange(start, dayBefore);
}; // :: String -> Object


var getPeriodParams = function getPeriodParams(period) {
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
}; // :: (String) -> Option(Date | Int | String) -> Option(Int) = 0 -> Object


var getRange = function getRange(period) {
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
}; // :: (Date | Int | String) -> (Date | Int | String) -> String


var getBestCompareUnit = function getBestCompareUnit(start, end) {
  if (getDayOfYear(start) === 1 && getDayOfYear(end) === getDaysInYear(end)) {
    return 'year';
  }

  var startOfQuarter = getStartOfFn('quarter');
  var endOfQuarter = getEndOfFn('quarter');

  if (isSameDay(startOfQuarter(start), start) && isSameDay(endOfQuarter(end), end)) {
    return 'quarter';
  }

  if (getDate(start) === 1 && getDate(end) === getDaysInMonth(end)) {
    return 'month';
  }

  if (isMonday(start) && isSunday(end)) {
    return 'week';
  }

  return 'day';
}; // :: (String) -> Option(Date | Int | String) = new Date() -> Object


var getAutoCompareRangeAndLabel = function getAutoCompareRangeAndLabel(period) {
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
}; // :: String -> Option(String) = 'auto' -> Object


var getCompareRange = function getCompareRange(period) {
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
}; // :: (Date | Int | String) -> String


var getTillYesterdayPeriod = function getTillYesterdayPeriod(date) {
  return "".concat(formatDate(date), "_to_yesterday");
}; // :: (Date | Int | String) -> (Date | Int | String) -> String


var getCustomPeriod = function getCustomPeriod(start, end) {
  return "".concat(formatDate(start), "_to_").concat(formatDate(end));
}; // :: Int -> String -> Boolean -> String


var getLastPeriod = function getLastPeriod(num, unit, includingCurrent) {
  var suffix = "".concat(unit).concat(includingCurrent ? '_including_current' : '');

  if (num === 1) {
    return "last_".concat(suffix);
  }

  return "last_".concat(num, "_").concat(suffix);
}; // :: String -> String


var getThisPeriod = function getThisPeriod(unit) {
  return "this_".concat(unit);
};

var migrateLegacyPeriod = function migrateLegacyPeriod(period) {
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
}; // (Object | String) -> String


var migrateLegacyCompareMode = function migrateLegacyCompareMode() {
  var compareMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';

  switch (compareMode) {
    case 'auto':
    case '12_months_ago':
      return compareMode;

    default:
      // in that case compareMode is actually a range
      return migrateLegacyPeriod(compareMode);
  }
}; // Proxy given function to migrate legacy period parameter
// Function -> Function


var convertLegacyParams = function convertLegacyParams(fn) {
  return function (period) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, [migrateLegacyPeriod(period)].concat(args));
  };
}; // String -> (Object | String)


var toLegacyPeriod = function toLegacyPeriod(period) {
  var _getPeriodParams = getPeriodParams(period),
      type = _getPeriodParams.type;

  return type === 'custom' ? getRange(period) : period;
}; // String -> (Object | String)


var toLegacyCompareMode = function toLegacyCompareMode(compareMode) {
  switch (compareMode) {
    case 'auto':
    case '12_months_ago':
      return compareMode;

    default:
      return toLegacyPeriod(compareMode);
  }
}; // :: (String | Object) -> Option(Date | Int | String) -> Option(Int) = 0 -> Object


var retrievePeriod = convertLegacyParams(getRange); // :: (String | Object) -> Object

var retrievePeriodParams = convertLegacyParams(getPeriodParams); // :: (String | Object) -> Option(String | Object) = 'auto' -> Object

var retrieveComparePeriod = function retrieveComparePeriod(period, compareMode) {
  return getCompareRange(migrateLegacyPeriod(period), migrateLegacyCompareMode(compareMode));
}; // :: (String | Object) -> Option(Date | Int | String) = new Date() -> Object


var calculateAutoCompare = function calculateAutoCompare(period, base) {
  var _getAutoCompareRangeA = getAutoCompareRangeAndLabel(migrateLegacyPeriod(period), base),
      label = _getAutoCompareRangeA.label,
      range = _getAutoCompareRangeA.range;

  return {
    label: label,
    period: range
  };
};

exports.addDays = addDays;
exports.addMonths = addMonths;
exports.addWeeks = addWeeks;
exports.calculateAutoCompare = calculateAutoCompare;
exports.differenceInCalendarDays = differenceInCalendarDays;
exports.differenceInDays = differenceInDays;
exports.differenceInMonths = differenceInMonths;
exports.differenceInQuarters = differenceInQuarters;
exports.differenceInWeeks = differenceInWeeks;
exports.differenceInYears = differenceInYears;
exports.eachDayOfInterval = eachDayOfInterval;
exports.endOfISOWeek = endOfISOWeek;
exports.endOfMonth = endOfMonth;
exports.endOfQuarter = endOfQuarter;
exports.endOfWeek = endOfWeek;
exports.endOfYear = endOfYear;
exports.format = format;
exports.formatDate = formatDate;
exports.formatDistanceToNow = formatDistanceToNow;
exports.getAutoCompareRangeAndLabel = getAutoCompareRangeAndLabel;
exports.getCompareRange = getCompareRange;
exports.getCustomPeriod = getCustomPeriod;
exports.getDate = getDate;
exports.getDayOfYear = getDayOfYear;
exports.getDaysInMonth = getDaysInMonth;
exports.getDaysInYear = getDaysInYear;
exports.getISODay = getISODay;
exports.getLastPeriod = getLastPeriod;
exports.getMonth = getMonth;
exports.getPeriodParams = getPeriodParams;
exports.getRange = getRange;
exports.getThisPeriod = getThisPeriod;
exports.getTillYesterdayPeriod = getTillYesterdayPeriod;
exports.getYear = getYear;
exports.isAfter = isAfter;
exports.isBefore = isBefore;
exports.isMonday = isMonday;
exports.isSameDay = isSameDay;
exports.isSameMonth = isSameMonth;
exports.isSunday = isSunday;
exports.isToday = isToday;
exports.isValid = isValid;
exports.isWithinInterval = isWithinInterval;
exports.max = max;
exports.migrateLegacyCompareMode = migrateLegacyCompareMode;
exports.migrateLegacyPeriod = migrateLegacyPeriod;
exports.min = min;
exports.parseISO = parseISO;
exports.retrieveComparePeriod = retrieveComparePeriod;
exports.retrievePeriod = retrievePeriod;
exports.retrievePeriodParams = retrievePeriodParams;
exports.setDate = setDate;
exports.setDay = setDay;
exports.setISODay = setISODay;
exports.setMonth = setMonth;
exports.startOfISOWeek = startOfISOWeek;
exports.startOfMonth = startOfMonth;
exports.startOfQuarter = startOfQuarter;
exports.startOfWeek = startOfWeek;
exports.startOfYear = startOfYear;
exports.subDays = subDays;
exports.subMonths = subMonths;
exports.subQuarters = subQuarters;
exports.subWeeks = subWeeks;
exports.subYears = subYears;
exports.toLegacyCompareMode = toLegacyCompareMode;
exports.toLegacyPeriod = toLegacyPeriod;
