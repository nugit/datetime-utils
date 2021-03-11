// @flow

import type { Locale } from 'date-fns';
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
import type { DateLike } from './types.js.flow';

type ParseIsoOptions = {|
  additionalDigits?: 0 | 1 | 2,
|};

const parseISO = (date: DateLike, options?: ParseIsoOptions): Date => {
  if (typeof date === 'string') {
    return _parseISO(date, options);
  }

  return typeof date === 'number' ? new Date(date) : date;
};

const addDays = (date: DateLike, days: number): Date => _addDays(parseISO(date), days);

const addMonths = (date: DateLike, months: number): Date => (
  _addMonths(parseISO(date), months)
);

const addWeeks = (date: DateLike, weeks: number): Date => _addWeeks(parseISO(date), weeks);

const differenceInCalendarDays = (firstDate: DateLike, secondDate: DateLike): number => (
  _differenceInCalendarDays(parseISO(firstDate), parseISO(secondDate))
);

const differenceInDays = (firstDate: DateLike, secondDate: DateLike): number => (
  _differenceInDays(parseISO(firstDate), parseISO(secondDate))
);

const differenceInMonths = (firstDate: DateLike, secondDate: DateLike): number => (
  _differenceInMonths(parseISO(firstDate), parseISO(secondDate))
);

const differenceInQuarters = (firstDate: DateLike, secondDate: DateLike): number => (
  _differenceInQuarters(parseISO(firstDate), parseISO(secondDate))
);

const differenceInWeeks = (firstDate: DateLike, secondDate: DateLike): number => (
  _differenceInWeeks(parseISO(firstDate), parseISO(secondDate))
);

const differenceInYears = (firstDate: DateLike, secondDate: DateLike): number => (
  _differenceInYears(parseISO(firstDate), parseISO(secondDate))
);

type EachDayOfIntervalOptions = {|
  step?: number,
|};

const eachDayOfInterval = (
  firstDate: DateLike, lastDate: DateLike, options?: EachDayOfIntervalOptions,
): Date[] => (
  _eachDayOfInterval(
    { start: parseISO(firstDate), end: parseISO(lastDate) },
    options,
  )
);

const endOfISOWeek = (date: DateLike): Date => _endOfISOWeek(parseISO(date));

const endOfMonth = (date: DateLike): Date => _endOfMonth(parseISO(date));

const endOfQuarter = (date: DateLike): Date => _endOfQuarter(parseISO(date));

type EndOfWeekOptions = {|
  locale?: Locale,
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6,
|};

const endOfWeek = (
  date: DateLike, options?: EndOfWeekOptions,
): Date => _endOfWeek(parseISO(date), options);

const endOfYear = (date: DateLike): Date => _endOfYear(parseISO(date));

type FormatOptions = {|
  firstWeekContainsDate?: number,
  locale?: Locale,
  useAdditionalDayOfYearTokens?: boolean,
  useAdditionalWeekYearTokens?: boolean,
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6,
|};

const format = (date: DateLike, formatIn: string, options?: FormatOptions): string => (
  _format(parseISO(date), formatIn, options)
);

type FormatDistanceToNowOptions = {|
  addSuffix?: boolean,
  includeSeconds?: boolean,
  locale?: Locale,
|};

const formatDistanceToNow = (
  date: DateLike, options?: FormatDistanceToNowOptions,
): string => (
  _formatDistanceToNow(parseISO(date), options)
);

const getDate = (date: DateLike): number => _getDate(parseISO(date));

const getDayOfYear = (date: DateLike): number => _getDayOfYear(parseISO(date));

const getDaysInMonth = (date: DateLike): number => _getDaysInMonth(parseISO(date));

const getDaysInYear = (date: DateLike): number => _getDaysInYear(parseISO(date));

const getISODay = (date: DateLike): number => _getISODay(parseISO(date));

const getMonth = (date: DateLike): number => _getMonth(parseISO(date));

const getYear = (date: DateLike): number => _getYear(parseISO(date));

const isAfter = (firstDate: DateLike, secondDate: DateLike): boolean => (
  _isAfter(parseISO(firstDate), parseISO(secondDate))
);

const isBefore = (firstDate: DateLike, secondDate: DateLike): boolean => (
  _isBefore(parseISO(firstDate), parseISO(secondDate))
);

const isMonday = (date: DateLike): boolean => _isMonday(parseISO(date));

const isSameDay = (firstDate: DateLike, secondDate: DateLike): boolean => (
  _isSameDay(parseISO(firstDate), parseISO(secondDate))
);

const isSameMonth = (firstDate: DateLike, secondDate: DateLike): boolean => (
  _isSameMonth(parseISO(firstDate), parseISO(secondDate))
);

const isSunday = (date: DateLike): boolean => _isSunday(parseISO(date));

const isToday = (date: DateLike): boolean => _isToday(parseISO(date));

const isValid = (date: DateLike): boolean => _isValid(parseISO(date));

const isWithinInterval = (
  date: DateLike, startDate: DateLike, endDate: DateLike,
): boolean => (
  _isWithinInterval(
    parseISO(date),
    { start: parseISO(startDate), end: parseISO(endDate) },
  )
);

const max = (dates: DateLike[]): Date => _max(dates.map(d => parseISO(d)));

const min = (dates: DateLike[]): Date => _min(dates.map(d => parseISO(d)));

const setDate = (date: DateLike, day: number): Date => _setDate(parseISO(date), day);

type SetDayOptions = {|
  locale?: Locale,
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6,
|};

const setDay = (date: DateLike, day: number, options?: SetDayOptions): Date => (
  _setDay(parseISO(date), day, options)
);

const setISODay = (date: DateLike, day: number): Date => _setISODay(parseISO(date), day);

const setMonth = (date: DateLike, month: number): Date => _setMonth(parseISO(date), month);

const startOfISOWeek = (date: DateLike): Date => _startOfISOWeek(parseISO(date));

const startOfMonth = (date: DateLike): Date => _startOfMonth(parseISO(date));

const startOfQuarter = (date: DateLike): Date => _startOfQuarter(parseISO(date));

type StartOfWeekOptions = {|
  locale?: Locale,
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6,
|};

const startOfWeek = (
  date: DateLike, options?: StartOfWeekOptions,
): Date => _startOfWeek(parseISO(date), options);

const startOfYear = (date: DateLike): Date => _startOfYear(parseISO(date));

const subDays = (date: DateLike, days: number): Date => _subDays(parseISO(date), days);

const subMonths = (
  date: DateLike, months: number,
): Date => _subMonths(parseISO(date), months);

const subQuarters = (
  date: DateLike, quarters: number,
): Date => _subQuarters(parseISO(date), quarters);

const subWeeks = (date: DateLike, weeks: number): Date => _subWeeks(parseISO(date), weeks);

const subYears = (date: DateLike, years: number): Date => _subYears(parseISO(date), years);

export {
  addDays,
  addMonths,
  addWeeks,
  differenceInCalendarDays,
  differenceInDays,
  differenceInMonths,
  differenceInQuarters,
  differenceInWeeks,
  differenceInYears,
  eachDayOfInterval,
  endOfISOWeek,
  endOfMonth,
  endOfQuarter,
  endOfWeek,
  endOfYear,
  format,
  formatDistanceToNow,
  getDate,
  getDayOfYear,
  getDaysInMonth,
  getDaysInYear,
  getISODay,
  getMonth,
  getYear,
  isAfter,
  isBefore,
  isMonday,
  isSameDay,
  isSameMonth,
  isSunday,
  isToday,
  isValid,
  isWithinInterval,
  max,
  min,
  parseISO,
  setDate,
  setDay,
  setISODay,
  setMonth,
  startOfISOWeek,
  startOfMonth,
  startOfQuarter,
  startOfWeek,
  startOfYear,
  subDays,
  subMonths,
  subQuarters,
  subWeeks,
  subYears,
};
