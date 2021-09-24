'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _addDays = require('date-fns/addDays');
var _addMonths = require('date-fns/addMonths');
var _addWeeks = require('date-fns/addWeeks');
var _differenceInCalendarDays = require('date-fns/differenceInCalendarDays');
var _differenceInDays = require('date-fns/differenceInDays');
var _differenceInMonths = require('date-fns/differenceInMonths');
var _differenceInQuarters = require('date-fns/differenceInQuarters');
var _differenceInWeeks = require('date-fns/differenceInWeeks');
var _differenceInYears = require('date-fns/differenceInYears');
var _eachDayOfInterval = require('date-fns/eachDayOfInterval');
var _endOfISOWeek = require('date-fns/endOfISOWeek');
var _endOfMonth = require('date-fns/endOfMonth');
var _endOfQuarter = require('date-fns/endOfQuarter');
var _endOfWeek = require('date-fns/endOfWeek');
var _endOfYear = require('date-fns/endOfYear');
var _format = require('date-fns/format');
var _formatDistanceToNow = require('date-fns/formatDistanceToNow');
var _getDate = require('date-fns/getDate');
var _getDayOfYear = require('date-fns/getDayOfYear');
var _getDaysInMonth = require('date-fns/getDaysInMonth');
var _getDaysInYear = require('date-fns/getDaysInYear');
var _getISODay = require('date-fns/getISODay');
var _getMonth = require('date-fns/getMonth');
var _getYear = require('date-fns/getYear');
var _isAfter = require('date-fns/isAfter');
var _isBefore = require('date-fns/isBefore');
var _isMonday = require('date-fns/isMonday');
var _isSameDay = require('date-fns/isSameDay');
var _isSameMonth = require('date-fns/isSameMonth');
var _isSunday = require('date-fns/isSunday');
var _isToday = require('date-fns/isToday');
var _isValid = require('date-fns/isValid');
var _isWithinInterval = require('date-fns/isWithinInterval');
var _max = require('date-fns/max');
var _min = require('date-fns/min');
var _parseISO = require('date-fns/parseISO');
var _setDate = require('date-fns/setDate');
var _setDay = require('date-fns/setDay');
var _setISODay = require('date-fns/setISODay');
var _setMonth = require('date-fns/setMonth');
var _startOfISOWeek = require('date-fns/startOfISOWeek');
var _startOfMonth = require('date-fns/startOfMonth');
var _startOfQuarter = require('date-fns/startOfQuarter');
var _startOfWeek = require('date-fns/startOfWeek');
var _startOfYear = require('date-fns/startOfYear');
var _subDays = require('date-fns/subDays');
var _subMonths = require('date-fns/subMonths');
var _subQuarters = require('date-fns/subQuarters');
var _subWeeks = require('date-fns/subWeeks');
var _subYears = require('date-fns/subYears');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _addDays__default = /*#__PURE__*/_interopDefaultLegacy(_addDays);
var _addMonths__default = /*#__PURE__*/_interopDefaultLegacy(_addMonths);
var _addWeeks__default = /*#__PURE__*/_interopDefaultLegacy(_addWeeks);
var _differenceInCalendarDays__default = /*#__PURE__*/_interopDefaultLegacy(_differenceInCalendarDays);
var _differenceInDays__default = /*#__PURE__*/_interopDefaultLegacy(_differenceInDays);
var _differenceInMonths__default = /*#__PURE__*/_interopDefaultLegacy(_differenceInMonths);
var _differenceInQuarters__default = /*#__PURE__*/_interopDefaultLegacy(_differenceInQuarters);
var _differenceInWeeks__default = /*#__PURE__*/_interopDefaultLegacy(_differenceInWeeks);
var _differenceInYears__default = /*#__PURE__*/_interopDefaultLegacy(_differenceInYears);
var _eachDayOfInterval__default = /*#__PURE__*/_interopDefaultLegacy(_eachDayOfInterval);
var _endOfISOWeek__default = /*#__PURE__*/_interopDefaultLegacy(_endOfISOWeek);
var _endOfMonth__default = /*#__PURE__*/_interopDefaultLegacy(_endOfMonth);
var _endOfQuarter__default = /*#__PURE__*/_interopDefaultLegacy(_endOfQuarter);
var _endOfWeek__default = /*#__PURE__*/_interopDefaultLegacy(_endOfWeek);
var _endOfYear__default = /*#__PURE__*/_interopDefaultLegacy(_endOfYear);
var _format__default = /*#__PURE__*/_interopDefaultLegacy(_format);
var _formatDistanceToNow__default = /*#__PURE__*/_interopDefaultLegacy(_formatDistanceToNow);
var _getDate__default = /*#__PURE__*/_interopDefaultLegacy(_getDate);
var _getDayOfYear__default = /*#__PURE__*/_interopDefaultLegacy(_getDayOfYear);
var _getDaysInMonth__default = /*#__PURE__*/_interopDefaultLegacy(_getDaysInMonth);
var _getDaysInYear__default = /*#__PURE__*/_interopDefaultLegacy(_getDaysInYear);
var _getISODay__default = /*#__PURE__*/_interopDefaultLegacy(_getISODay);
var _getMonth__default = /*#__PURE__*/_interopDefaultLegacy(_getMonth);
var _getYear__default = /*#__PURE__*/_interopDefaultLegacy(_getYear);
var _isAfter__default = /*#__PURE__*/_interopDefaultLegacy(_isAfter);
var _isBefore__default = /*#__PURE__*/_interopDefaultLegacy(_isBefore);
var _isMonday__default = /*#__PURE__*/_interopDefaultLegacy(_isMonday);
var _isSameDay__default = /*#__PURE__*/_interopDefaultLegacy(_isSameDay);
var _isSameMonth__default = /*#__PURE__*/_interopDefaultLegacy(_isSameMonth);
var _isSunday__default = /*#__PURE__*/_interopDefaultLegacy(_isSunday);
var _isToday__default = /*#__PURE__*/_interopDefaultLegacy(_isToday);
var _isValid__default = /*#__PURE__*/_interopDefaultLegacy(_isValid);
var _isWithinInterval__default = /*#__PURE__*/_interopDefaultLegacy(_isWithinInterval);
var _max__default = /*#__PURE__*/_interopDefaultLegacy(_max);
var _min__default = /*#__PURE__*/_interopDefaultLegacy(_min);
var _parseISO__default = /*#__PURE__*/_interopDefaultLegacy(_parseISO);
var _setDate__default = /*#__PURE__*/_interopDefaultLegacy(_setDate);
var _setDay__default = /*#__PURE__*/_interopDefaultLegacy(_setDay);
var _setISODay__default = /*#__PURE__*/_interopDefaultLegacy(_setISODay);
var _setMonth__default = /*#__PURE__*/_interopDefaultLegacy(_setMonth);
var _startOfISOWeek__default = /*#__PURE__*/_interopDefaultLegacy(_startOfISOWeek);
var _startOfMonth__default = /*#__PURE__*/_interopDefaultLegacy(_startOfMonth);
var _startOfQuarter__default = /*#__PURE__*/_interopDefaultLegacy(_startOfQuarter);
var _startOfWeek__default = /*#__PURE__*/_interopDefaultLegacy(_startOfWeek);
var _startOfYear__default = /*#__PURE__*/_interopDefaultLegacy(_startOfYear);
var _subDays__default = /*#__PURE__*/_interopDefaultLegacy(_subDays);
var _subMonths__default = /*#__PURE__*/_interopDefaultLegacy(_subMonths);
var _subQuarters__default = /*#__PURE__*/_interopDefaultLegacy(_subQuarters);
var _subWeeks__default = /*#__PURE__*/_interopDefaultLegacy(_subWeeks);
var _subYears__default = /*#__PURE__*/_interopDefaultLegacy(_subYears);

var parseISO = function parseISO(date, options) {
  if (typeof date === 'string') {
    return _parseISO__default["default"](date, options);
  }

  return typeof date === 'number' ? new Date(date) : date;
};

var addDays = function addDays(date, days) {
  return _addDays__default["default"](parseISO(date), days);
};

var addMonths = function addMonths(date, months) {
  return _addMonths__default["default"](parseISO(date), months);
};

var addWeeks = function addWeeks(date, weeks) {
  return _addWeeks__default["default"](parseISO(date), weeks);
};

var differenceInCalendarDays = function differenceInCalendarDays(firstDate, secondDate) {
  return _differenceInCalendarDays__default["default"](parseISO(firstDate), parseISO(secondDate));
};

var differenceInDays = function differenceInDays(firstDate, secondDate) {
  return _differenceInDays__default["default"](parseISO(firstDate), parseISO(secondDate));
};

var differenceInMonths = function differenceInMonths(firstDate, secondDate) {
  return _differenceInMonths__default["default"](parseISO(firstDate), parseISO(secondDate));
};

var differenceInQuarters = function differenceInQuarters(firstDate, secondDate) {
  return _differenceInQuarters__default["default"](parseISO(firstDate), parseISO(secondDate));
};

var differenceInWeeks = function differenceInWeeks(firstDate, secondDate) {
  return _differenceInWeeks__default["default"](parseISO(firstDate), parseISO(secondDate));
};

var differenceInYears = function differenceInYears(firstDate, secondDate) {
  return _differenceInYears__default["default"](parseISO(firstDate), parseISO(secondDate));
};

var eachDayOfInterval = function eachDayOfInterval(firstDate, lastDate, options) {
  return _eachDayOfInterval__default["default"]({
    start: parseISO(firstDate),
    end: parseISO(lastDate)
  }, options);
};

var endOfISOWeek = function endOfISOWeek(date) {
  return _endOfISOWeek__default["default"](parseISO(date));
};

var endOfMonth = function endOfMonth(date) {
  return _endOfMonth__default["default"](parseISO(date));
};

var endOfQuarter = function endOfQuarter(date) {
  return _endOfQuarter__default["default"](parseISO(date));
};

var endOfWeek = function endOfWeek(date, options) {
  return _endOfWeek__default["default"](parseISO(date), options);
};

var endOfYear = function endOfYear(date) {
  return _endOfYear__default["default"](parseISO(date));
};

var format = function format(date, formatIn, options) {
  return _format__default["default"](parseISO(date), formatIn, options);
};

var formatDistanceToNow = function formatDistanceToNow(date, options) {
  return _formatDistanceToNow__default["default"](parseISO(date), options);
};

var getDate = function getDate(date) {
  return _getDate__default["default"](parseISO(date));
};

var getDayOfYear = function getDayOfYear(date) {
  return _getDayOfYear__default["default"](parseISO(date));
};

var getDaysInMonth = function getDaysInMonth(date) {
  return _getDaysInMonth__default["default"](parseISO(date));
};

var getDaysInYear = function getDaysInYear(date) {
  return _getDaysInYear__default["default"](parseISO(date));
};

var getISODay = function getISODay(date) {
  return _getISODay__default["default"](parseISO(date));
};

var getMonth = function getMonth(date) {
  return _getMonth__default["default"](parseISO(date));
};

var getYear = function getYear(date) {
  return _getYear__default["default"](parseISO(date));
};

var isAfter = function isAfter(firstDate, secondDate) {
  return _isAfter__default["default"](parseISO(firstDate), parseISO(secondDate));
};

var isBefore = function isBefore(firstDate, secondDate) {
  return _isBefore__default["default"](parseISO(firstDate), parseISO(secondDate));
};

var isMonday = function isMonday(date) {
  return _isMonday__default["default"](parseISO(date));
};

var isSameDay = function isSameDay(firstDate, secondDate) {
  return _isSameDay__default["default"](parseISO(firstDate), parseISO(secondDate));
};

var isSameMonth = function isSameMonth(firstDate, secondDate) {
  return _isSameMonth__default["default"](parseISO(firstDate), parseISO(secondDate));
};

var isSunday = function isSunday(date) {
  return _isSunday__default["default"](parseISO(date));
};

var isToday = function isToday(date) {
  return _isToday__default["default"](parseISO(date));
};

var isValid = function isValid(date) {
  return _isValid__default["default"](parseISO(date));
};

var isWithinInterval = function isWithinInterval(date, startDate, endDate) {
  return _isWithinInterval__default["default"](parseISO(date), {
    start: parseISO(startDate),
    end: parseISO(endDate)
  });
};

var max = function max(dates) {
  return _max__default["default"](dates.map(function (d) {
    return parseISO(d);
  }));
};

var min = function min(dates) {
  return _min__default["default"](dates.map(function (d) {
    return parseISO(d);
  }));
};

var setDate = function setDate(date, day) {
  return _setDate__default["default"](parseISO(date), day);
};

var setDay = function setDay(date, day, options) {
  return _setDay__default["default"](parseISO(date), day, options);
};

var setISODay = function setISODay(date, day) {
  return _setISODay__default["default"](parseISO(date), day);
};

var setMonth = function setMonth(date, month) {
  return _setMonth__default["default"](parseISO(date), month);
};

var startOfISOWeek = function startOfISOWeek(date) {
  return _startOfISOWeek__default["default"](parseISO(date));
};

var startOfMonth = function startOfMonth(date) {
  return _startOfMonth__default["default"](parseISO(date));
};

var startOfQuarter = function startOfQuarter(date) {
  return _startOfQuarter__default["default"](parseISO(date));
};

var startOfWeek = function startOfWeek(date, options) {
  return _startOfWeek__default["default"](parseISO(date), options);
};

var startOfYear = function startOfYear(date) {
  return _startOfYear__default["default"](parseISO(date));
};

var subDays = function subDays(date, days) {
  return _subDays__default["default"](parseISO(date), days);
};

var subMonths = function subMonths(date, months) {
  return _subMonths__default["default"](parseISO(date), months);
};

var subQuarters = function subQuarters(date, quarters) {
  return _subQuarters__default["default"](parseISO(date), quarters);
};

var subWeeks = function subWeeks(date, weeks) {
  return _subWeeks__default["default"](parseISO(date), weeks);
};

var subYears = function subYears(date, years) {
  return _subYears__default["default"](parseISO(date), years);
};

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
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
