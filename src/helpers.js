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

// :: (Date | Int | String) -> Option(Object) -> (Date | Int)
export const parseISO = (date, options) => (
  typeof date === 'string' ? _parseISO(date, options) : date
);

// :: (Date | Int | String) -> Number -> Date
export const addDays = (date, days) => _addDays(parseISO(date), days);

// :: (Date | Int | String) -> Number -> Date
export const addMonths = (date, months) => _addMonths(parseISO(date), months);

// :: (Date | Int | String) -> Number -> Date
export const addWeeks = (date, weeks) => _addWeeks(parseISO(date), weeks);

// :: (Date | Int | String) -> (Date | Int | String) -> Number
export const differenceInCalendarDays = (firstDate, secondDate) => (
  _differenceInCalendarDays(parseISO(firstDate), parseISO(secondDate))
);

// :: (Date | Int | String) -> (Date | Int | String) -> Number
export const differenceInDays = (firstDate, secondDate) => (
  _differenceInDays(parseISO(firstDate), parseISO(secondDate))
);

// :: (Date | Int | String) -> (Date | Int | String) -> Number
export const differenceInMonths = (firstDate, secondDate) => (
  _differenceInMonths(parseISO(firstDate), parseISO(secondDate))
);

// :: (Date | Int | String) -> (Date | Int | String) -> Number
export const differenceInQuarters = (firstDate, secondDate) => (
  _differenceInQuarters(parseISO(firstDate), parseISO(secondDate))
);

// :: (Date | Int | String) -> (Date | Int | String) -> Number
export const differenceInWeeks = (firstDate, secondDate) => (
  _differenceInWeeks(parseISO(firstDate), parseISO(secondDate))
);

// :: (Date | Int | String) -> (Date | Int | String) -> Number
export const differenceInYears = (firstDate, secondDate) => (
  _differenceInYears(parseISO(firstDate), parseISO(secondDate))
);

// :: (Date | Int | String) -> (Date | Int | String) -> Option(Object) -> Array(Date)
export const eachDayOfInterval = (firstDate, lastDate, options) => (
  _eachDayOfInterval(
    { start: parseISO(firstDate), end: parseISO(lastDate) },
    options,
  )
);

// :: (Date | Int | String) -> Date
export const endOfISOWeek = date => _endOfISOWeek(parseISO(date));

// :: (Date | Int | String) -> Date
export const endOfMonth = date => _endOfMonth(parseISO(date));

// :: (Date | Int | String) -> Date
export const endOfQuarter = date => _endOfQuarter(parseISO(date));

// :: (Date | Int | String) -> Option(Object) -> Date
export const endOfWeek = (date, options) => _endOfWeek(parseISO(date), options);

// :: (Date | Int | String) -> Date
export const endOfYear = date => _endOfYear(parseISO(date));

// :: (Date | Int | String) -> String -> Option(Object) -> String
export const format = (date, formatIn, options) => (
  _format(parseISO(date), formatIn, options)
);

// :: (Date | Int | String) -> Number
export const getDate = date => _getDate(parseISO(date));

// :: (Date | Int | String) -> Number
export const getDayOfYear = date => _getDayOfYear(parseISO(date));

// :: (Date | Int | String) -> Number
export const getDaysInMonth = date => _getDaysInMonth(parseISO(date));

// :: (Date | Int | String) -> Number
export const getDaysInYear = date => _getDaysInYear(parseISO(date));

// :: (Date | Int | String) -> Number
export const getISODay = date => _getISODay(parseISO(date));

// :: (Date | Int | String) -> Number
export const getMonth = date => _getMonth(parseISO(date));

// :: (Date | Int | String) -> Number
export const getYear = date => _getYear(parseISO(date));

// :: (Date | Int | String) -> (Date | Int | String) -> Boolean
export const isAfter = (firstDate, secondDate) => (
  _isAfter(parseISO(firstDate), parseISO(secondDate))
);

// :: (Date | Int | String) -> (Date | Int | String) -> Boolean
export const isBefore = (firstDate, secondDate) => (
  _isBefore(parseISO(firstDate), parseISO(secondDate))
);

// :: (Date | Int | String) -> Boolean
export const isMonday = date => _isMonday(parseISO(date));

// :: (Date | Int | String) -> (Date | Int | String) -> Boolean
export const isSameDay = (firstDate, secondDate) => (
  _isSameDay(parseISO(firstDate), parseISO(secondDate))
);

// :: (Date | Int | String) -> (Date | Int | String) -> Boolean
export const isSameMonth = (firstDate, secondDate) => (
  _isSameMonth(parseISO(firstDate), parseISO(secondDate))
);

// :: (Date | Int | String) -> Boolean
export const isSunday = date => _isSunday(parseISO(date));

// :: (Date | Int | String) -> Boolean
export const isToday = date => _isToday(parseISO(date));

// :: (Date | Int | String) -> Boolean
export const isValid = date => _isValid(parseISO(date));

// :: (Date | Int | String) -> (Date | Int | String) -> (Date | Int | String) -> Boolean
export const isWithinInterval = (date, startDate, endDate) => (
  _isWithinInterval(
    parseISO(date),
    { start: parseISO(startDate), end: parseISO(endDate) },
  )
);

// :: Array(Date | Int | String) -> Date
export const max = dates => _max(dates.map(parseISO));

// :: Array(Date | Int | String) -> Date
export const min = dates => _min(dates.map(parseISO));

// :: (Date | Int | String) -> Number -> Date
export const setDate = (date, day) => _setDate(parseISO(date), day);

// :: (Date | Int | String) -> Number -> Option(Object) -> Date
export const setDay = (date, day, options) => (
  _setDay(parseISO(date), day, options)
);

// :: (Date | Int | String) -> Number -> Date
export const setISODay = (date, day) => _setISODay(parseISO(date), day);

// :: (Date | Int | String) -> Number -> Date
export const setMonth = (date, month) => _setMonth(parseISO(date), month);

// :: (Date | Int | String) -> Date
export const startOfISOWeek = date => _startOfISOWeek(parseISO(date));

// :: (Date | Int | String) -> Date
export const startOfMonth = date => _startOfMonth(parseISO(date));

// :: (Date | Int | String) -> Date
export const startOfQuarter = date => _startOfQuarter(parseISO(date));

// :: (Date | Int | String) -> Option(Object) -> Date
export const startOfWeek = (date, options) => _startOfWeek(parseISO(date), options);

// :: (Date | Int | String) -> Date
export const startOfYear = date => _startOfYear(parseISO(date));

// :: (Date | Int | String) -> Number -> Date
export const subDays = (date, days) => _subDays(parseISO(date), days);

// :: (Date | Int | String) -> Number -> Date
export const subMonths = (date, months) => _subMonths(parseISO(date), months);

// :: (Date | Int | String) -> Number -> Date
export const subQuarters = (date, quarters) => _subQuarters(parseISO(date), quarters);

// :: (Date | Int | String) -> Number -> Date
export const subWeeks = (date, weeks) => _subWeeks(parseISO(date), weeks);

// :: (Date | Int | String) -> Number -> Date
export const subYears = (date, years) => _subYears(parseISO(date), years);
