// @flow

import { differenceInDays, differenceInMonths, differenceInQuarters, differenceInWeeks, differenceInYears, endOfISOWeek, endOfMonth, endOfQuarter, endOfYear, format, parseISO, startOfISOWeek, startOfMonth, startOfQuarter, startOfYear, subDays, subMonths, subQuarters, subWeeks, subYears } from './helpers';
import type { DateLike, Unit } from './types.js.flow';

export const formatDate = (date: DateLike): string => format(date, 'yyyy-MM-dd');

export const getSubtractionFn = (unit: Unit): ((DateLike, number) => Date) => {
  if (unit === 'year') return subYears;
  if (unit === 'quarter') return subQuarters;
  if (unit === 'month') return subMonths;
  if (unit === 'week') return subWeeks;
  return subDays;
};

export const getDiffFn = (unit: Unit): ((DateLike, DateLike) => number) => {
  if (unit === 'year') return differenceInYears;
  if (unit === 'quarter') return differenceInQuarters;
  if (unit === 'month') return differenceInMonths;
  if (unit === 'week') return differenceInWeeks;
  return differenceInDays;
};

export const getStartOfFn = (unit: Unit): (DateLike => Date) => {
  if (unit === 'year') return startOfYear;
  if (unit === 'quarter') return startOfQuarter;
  if (unit === 'month') return startOfMonth;
  if (unit === 'week') return startOfISOWeek;
  // return identity function when unit is day
  return parseISO;
};

export const getEndOfFn = (unit: Unit): (DateLike => Date) => {
  if (unit === 'year') return endOfYear;
  if (unit === 'quarter') return endOfQuarter;
  if (unit === 'month') return endOfMonth;
  if (unit === 'week') return endOfISOWeek;
  // return identity function when unit is day
  return parseISO;
};

export const parseTimezoneStrToHours = (tz: string): number => {
  const [chunk1, chunk2] = tz.split(':');
  const isPositive = chunk1[0] === '+';
  const hours = parseInt(chunk1.slice(1), 10);
  const minutes = parseInt(chunk2, 10);
  const result = hours + (minutes / 60);
  return isPositive ? result : -result;
};

// The offset can be either in hours or in seconds. Or it can be a string.
export const normalizeOffsetToMs = (offset: number | string): number => {
  if (typeof offset !== 'number') return parseTimezoneStrToHours(offset) * 3600 * 1000;
  if (Math.abs(offset) > 15) return offset * 1000; // If the offset looks like seconds
  return offset * 3600 * 1000;
};

export const getMsDiffFromUTC = (offset: number | string): number => (
  // The getTimezoneOffset retuns minutes
  normalizeOffsetToMs(offset) + (new Date().getTimezoneOffset() * 60 * 1000)
);

// The offset can be either in hours or in seconds. Or it can be a string.
// Returns a new Date string with the offset applied to it.
export const applyOffset = (offset: number | string, date: DateLike): Date => {
  if (!offset) return parseISO(date);
  const dateObj = date instanceof Date ? date : new Date(date);
  const diffFromUTC = getMsDiffFromUTC(offset);
  return new Date(dateObj.getTime() + diffFromUTC);
};
