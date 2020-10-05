import _addDays from 'date-fns/addDays';
import _addMonths from 'date-fns/addMonths';
import _addWeeks from 'date-fns/addWeeks';
import _differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import _differenceInDays from 'date-fns/differenceInDays';
import _differenceInMonths from 'date-fns/differenceInMonths';
import _differenceInQuarters from 'date-fns/differenceInQuarters';
import _differenceInWeeks from 'date-fns/differenceInWeeks';
import _differenceInYears from 'date-fns/differenceInYears';
import _eachDayOfInterval from 'date-fns/eachDayOfInterval';
import _endOfISOWeek from 'date-fns/endOfISOWeek';
import _endOfMonth from 'date-fns/endOfMonth';
import _endOfQuarter from 'date-fns/endOfQuarter';
import _endOfWeek from 'date-fns/endOfWeek';
import _endOfYear from 'date-fns/endOfYear';
import _format from 'date-fns/format';
import _formatDistanceToNow from 'date-fns/formatDistanceToNow';
import _getDate from 'date-fns/getDate';
import _getDayOfYear from 'date-fns/getDayOfYear';
import _getDaysInMonth from 'date-fns/getDaysInMonth';
import _getDaysInYear from 'date-fns/getDaysInYear';
import _getISODay from 'date-fns/getISODay';
import _getMonth from 'date-fns/getMonth';
import _getYear from 'date-fns/getYear';
import _isAfter from 'date-fns/isAfter';
import _isBefore from 'date-fns/isBefore';
import _isMonday from 'date-fns/isMonday';
import _isSameDay from 'date-fns/isSameDay';
import _isSameMonth from 'date-fns/isSameMonth';
import _isSunday from 'date-fns/isSunday';
import _isToday from 'date-fns/isToday';
import _isValid from 'date-fns/isValid';
import _isWithinInterval from 'date-fns/isWithinInterval';
import _max from 'date-fns/max';
import _min from 'date-fns/min';
import _parseISO from 'date-fns/parseISO';
import _setDate from 'date-fns/setDate';
import _setDay from 'date-fns/setDay';
import _setISODay from 'date-fns/setISODay';
import _setMonth from 'date-fns/setMonth';
import _startOfISOWeek from 'date-fns/startOfISOWeek';
import _startOfMonth from 'date-fns/startOfMonth';
import _startOfQuarter from 'date-fns/startOfQuarter';
import _startOfWeek from 'date-fns/startOfWeek';
import _startOfYear from 'date-fns/startOfYear';
import _subDays from 'date-fns/subDays';
import _subMonths from 'date-fns/subMonths';
import _subQuarters from 'date-fns/subQuarters';
import _subWeeks from 'date-fns/subWeeks';
import _subYears from 'date-fns/subYears';

var parseISO = function parseISO(date, options) {
  if (typeof date === 'string') {
    return _parseISO(date, options);
  }

  return typeof date === 'number' ? new Date(date) : date;
};
var addDays = function addDays(date, days) {
  return _addDays(parseISO(date), days);
};
var addMonths = function addMonths(date, months) {
  return _addMonths(parseISO(date), months);
};
var addWeeks = function addWeeks(date, weeks) {
  return _addWeeks(parseISO(date), weeks);
};
var differenceInCalendarDays = function differenceInCalendarDays(firstDate, secondDate) {
  return _differenceInCalendarDays(parseISO(firstDate), parseISO(secondDate));
};
var differenceInDays = function differenceInDays(firstDate, secondDate) {
  return _differenceInDays(parseISO(firstDate), parseISO(secondDate));
};
var differenceInMonths = function differenceInMonths(firstDate, secondDate) {
  return _differenceInMonths(parseISO(firstDate), parseISO(secondDate));
};
var differenceInQuarters = function differenceInQuarters(firstDate, secondDate) {
  return _differenceInQuarters(parseISO(firstDate), parseISO(secondDate));
};
var differenceInWeeks = function differenceInWeeks(firstDate, secondDate) {
  return _differenceInWeeks(parseISO(firstDate), parseISO(secondDate));
};
var differenceInYears = function differenceInYears(firstDate, secondDate) {
  return _differenceInYears(parseISO(firstDate), parseISO(secondDate));
};
var eachDayOfInterval = function eachDayOfInterval(firstDate, lastDate, options) {
  return _eachDayOfInterval({
    start: parseISO(firstDate),
    end: parseISO(lastDate)
  }, options);
};
var endOfISOWeek = function endOfISOWeek(date) {
  return _endOfISOWeek(parseISO(date));
};
var endOfMonth = function endOfMonth(date) {
  return _endOfMonth(parseISO(date));
};
var endOfQuarter = function endOfQuarter(date) {
  return _endOfQuarter(parseISO(date));
};
var endOfWeek = function endOfWeek(date, options) {
  return _endOfWeek(parseISO(date), options);
};
var endOfYear = function endOfYear(date) {
  return _endOfYear(parseISO(date));
};
var format = function format(date, formatIn, options) {
  return _format(parseISO(date), formatIn, options);
};
var formatDistanceToNow = function formatDistanceToNow(date, options) {
  return _formatDistanceToNow(parseISO(date), options);
};
var getDate = function getDate(date) {
  return _getDate(parseISO(date));
};
var getDayOfYear = function getDayOfYear(date) {
  return _getDayOfYear(parseISO(date));
};
var getDaysInMonth = function getDaysInMonth(date) {
  return _getDaysInMonth(parseISO(date));
};
var getDaysInYear = function getDaysInYear(date) {
  return _getDaysInYear(parseISO(date));
};
var getISODay = function getISODay(date) {
  return _getISODay(parseISO(date));
};
var getMonth = function getMonth(date) {
  return _getMonth(parseISO(date));
};
var getYear = function getYear(date) {
  return _getYear(parseISO(date));
};
var isAfter = function isAfter(firstDate, secondDate) {
  return _isAfter(parseISO(firstDate), parseISO(secondDate));
};
var isBefore = function isBefore(firstDate, secondDate) {
  return _isBefore(parseISO(firstDate), parseISO(secondDate));
};
var isMonday = function isMonday(date) {
  return _isMonday(parseISO(date));
};
var isSameDay = function isSameDay(firstDate, secondDate) {
  return _isSameDay(parseISO(firstDate), parseISO(secondDate));
};
var isSameMonth = function isSameMonth(firstDate, secondDate) {
  return _isSameMonth(parseISO(firstDate), parseISO(secondDate));
};
var isSunday = function isSunday(date) {
  return _isSunday(parseISO(date));
};
var isToday = function isToday(date) {
  return _isToday(parseISO(date));
};
var isValid = function isValid(date) {
  return _isValid(parseISO(date));
};
var isWithinInterval = function isWithinInterval(date, startDate, endDate) {
  return _isWithinInterval(parseISO(date), {
    start: parseISO(startDate),
    end: parseISO(endDate)
  });
};
var max = function max(dates) {
  return _max(dates.map(function (d) {
    return parseISO(d);
  }));
};
var min = function min(dates) {
  return _min(dates.map(function (d) {
    return parseISO(d);
  }));
};
var setDate = function setDate(date, day) {
  return _setDate(parseISO(date), day);
};
var setDay = function setDay(date, day, options) {
  return _setDay(parseISO(date), day, options);
};
var setISODay = function setISODay(date, day) {
  return _setISODay(parseISO(date), day);
};
var setMonth = function setMonth(date, month) {
  return _setMonth(parseISO(date), month);
};
var startOfISOWeek = function startOfISOWeek(date) {
  return _startOfISOWeek(parseISO(date));
};
var startOfMonth = function startOfMonth(date) {
  return _startOfMonth(parseISO(date));
};
var startOfQuarter = function startOfQuarter(date) {
  return _startOfQuarter(parseISO(date));
};
var startOfWeek = function startOfWeek(date, options) {
  return _startOfWeek(parseISO(date), options);
};
var startOfYear = function startOfYear(date) {
  return _startOfYear(parseISO(date));
};
var subDays = function subDays(date, days) {
  return _subDays(parseISO(date), days);
};
var subMonths = function subMonths(date, months) {
  return _subMonths(parseISO(date), months);
};
var subQuarters = function subQuarters(date, quarters) {
  return _subQuarters(parseISO(date), quarters);
};
var subWeeks = function subWeeks(date, weeks) {
  return _subWeeks(parseISO(date), weeks);
};
var subYears = function subYears(date, years) {
  return _subYears(parseISO(date), years);
};

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
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

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var formatDate = function formatDate(date) {
  return format(date, 'yyyy-MM-dd');
};
var getSubtractionFn = function getSubtractionFn(unit) {
  if (unit === 'year') return subYears;
  if (unit === 'quarter') return subQuarters;
  if (unit === 'month') return subMonths;
  if (unit === 'week') return subWeeks;
  return subDays;
};
var getDiffFn = function getDiffFn(unit) {
  if (unit === 'year') return differenceInYears;
  if (unit === 'quarter') return differenceInQuarters;
  if (unit === 'month') return differenceInMonths;
  if (unit === 'week') return differenceInWeeks;
  return differenceInDays;
};
var getStartOfFn = function getStartOfFn(unit) {
  if (unit === 'year') return startOfYear;
  if (unit === 'quarter') return startOfQuarter;
  if (unit === 'month') return startOfMonth;
  if (unit === 'week') return startOfISOWeek; // return identity function when unit is day

  return parseISO;
};
var getEndOfFn = function getEndOfFn(unit) {
  if (unit === 'year') return endOfYear;
  if (unit === 'quarter') return endOfQuarter;
  if (unit === 'month') return endOfMonth;
  if (unit === 'week') return endOfISOWeek; // return identity function when unit is day

  return parseISO;
};
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

var normalizeOffsetToMs = function normalizeOffsetToMs(offset) {
  if (typeof offset !== 'number') return parseTimezoneStrToHours(offset) * 3600 * 1000;
  if (Math.abs(offset) > 15) return offset * 1000; // If the offset looks like seconds

  return offset * 3600 * 1000;
};
var getMsDiffFromUTC = function getMsDiffFromUTC(offset) {
  return (// The getTimezoneOffset retuns minutes
    normalizeOffsetToMs(offset) + new Date().getTimezoneOffset() * 60 * 1000
  );
}; // The offset can be either in hours or in seconds. Or it can be a string.
// Returns a new Date string with the offset applied to it.

var applyOffset = function applyOffset(offset, date) {
  if (!offset) return parseISO(date);
  var dateObj = date instanceof Date ? date : new Date(date);
  var diffFromUTC = getMsDiffFromUTC(offset);
  return new Date(dateObj.getTime() + diffFromUTC);
};

var formatRange = function formatRange(start, end) {
  return {
    start: formatDate(start),
    end: formatDate(end)
  };
};

var getLastRelativePeriodRange = function getLastRelativePeriodRange(num, unit) {
  var base = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();
  var startOf = getStartOfFn(unit);
  var endOf = getEndOfFn(unit);
  var sub = getSubtractionFn(unit);
  return formatRange(startOf(sub(base, num)), endOf(sub(base, 1)));
};

var getThisRelativePeriodRange = function getThisRelativePeriodRange(unit) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var num = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var dayBefore = subDays(base, 1);
  var startOf = getStartOfFn(unit);
  var sub = getSubtractionFn(unit);
  return formatRange(startOf(sub(dayBefore, num - 1)), formatDate(dayBefore));
};

var getTillYesterdayRange = function getTillYesterdayRange(start) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var dayBefore = subDays(base, 1);
  return formatRange(start, dayBefore);
};

var getUnit = function getUnit(value) {
  switch (value) {
    case 'day':
    case 'week':
    case 'month':
    case 'quarter':
    case 'year':
      return value;

    default:
      throw new Error('Unexpected unit');
  }
};

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
      unit: getUnit(match[1]),
      including_current: match[2] === '_including_current',
      includingParam: 'this'
    };
  }

  match = period.match(LAST_RANGE_REGEX_2);

  if (match) {
    return {
      type: 'last',
      num: Number(match[1]),
      unit: getUnit(match[2]),
      including_current: match[3] === '_including_current',
      includingParam: match[2] === 'day' ? 'today' : "this ".concat(match[2])
    };
  }

  match = period.match(THIS_RANGE_REGEX);
  if (match) return {
    type: 'this',
    unit: getUnit(match[1])
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
};

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
};

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
};

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
};

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
};

var getTillYesterdayPeriod = function getTillYesterdayPeriod(date) {
  return "".concat(formatDate(date), "_to_yesterday");
};

var getCustomPeriod = function getCustomPeriod(start, end) {
  return "".concat(formatDate(start), "_to_").concat(formatDate(end));
};

var getLastPeriod = function getLastPeriod(num, unit, includingCurrent) {
  var suffix = "".concat(unit).concat(includingCurrent ? '_including_current' : '');

  if (num === 1) {
    return "last_".concat(suffix);
  }

  return "last_".concat(num, "_").concat(suffix);
};

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
};

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
};

var toLegacyPeriod = function toLegacyPeriod(period) {
  var _getPeriodParams = getPeriodParams(period),
      type = _getPeriodParams.type;

  return type === 'custom' ? getRange(period) : period;
};

var toLegacyCompareMode = function toLegacyCompareMode(compareMode) {
  switch (compareMode) {
    case 'auto':
    case '12_months_ago':
      return compareMode;

    default:
      return toLegacyPeriod(compareMode);
  }
};

var retrievePeriod = function retrievePeriod(period) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return getRange(migrateLegacyPeriod(period), base, offset);
};

var retrievePeriodParams = function retrievePeriodParams(period) {
  return getPeriodParams(migrateLegacyPeriod(period));
};

var retrieveComparePeriod = function retrieveComparePeriod(period) {
  var compareMode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
  return getCompareRange(migrateLegacyPeriod(period), migrateLegacyCompareMode(compareMode));
};

var calculateAutoCompare = function calculateAutoCompare(period) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

  var _getAutoCompareRangeA = getAutoCompareRangeAndLabel(migrateLegacyPeriod(period), base),
      label = _getAutoCompareRangeA.label,
      range = _getAutoCompareRangeA.range;

  return {
    label: label,
    period: range
  };
};

export { addDays, addMonths, addWeeks, calculateAutoCompare, differenceInCalendarDays, differenceInDays, differenceInMonths, differenceInQuarters, differenceInWeeks, differenceInYears, eachDayOfInterval, endOfISOWeek, endOfMonth, endOfQuarter, endOfWeek, endOfYear, format, formatDate, formatDistanceToNow, getAutoCompareRangeAndLabel, getCompareRange, getCustomPeriod, getDate, getDayOfYear, getDaysInMonth, getDaysInYear, getISODay, getLastPeriod, getMonth, getPeriodParams, getRange, getThisPeriod, getTillYesterdayPeriod, getYear, isAfter, isBefore, isMonday, isSameDay, isSameMonth, isSunday, isToday, isValid, isWithinInterval, max, migrateLegacyCompareMode, migrateLegacyPeriod, min, parseISO, retrieveComparePeriod, retrievePeriod, retrievePeriodParams, setDate, setDay, setISODay, setMonth, startOfISOWeek, startOfMonth, startOfQuarter, startOfWeek, startOfYear, subDays, subMonths, subQuarters, subWeeks, subYears, toLegacyCompareMode, toLegacyPeriod };
