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

// :: (Date | String | Int) -> String
export const formatDate = date => format(date, 'YYYY-MM-DD');

// :: String -> ((Date | String | Int) -> Int -> Date)
export const getSubtractionFn = (unit) => {
  if (unit === 'year') return subYears;
  if (unit === 'quarter') return subQuarters;
  if (unit === 'month') return subMonths;
  if (unit === 'week') return subWeeks;
  return subDays;
};

// :: String -> ((Date | String | Int) -> Int -> Date)
export const getStartOfFn = (unit) => {
  if (unit === 'year') return startOfYear;
  if (unit === 'quarter') return startOfQuarter;
  if (unit === 'month') return startOfMonth;
  if (unit === 'week') return startOfISOWeek;
  return _ => _;
};

// :: String -> ((Date | String | Int) -> Int -> Date)
export const getEndOfFn = (unit) => {
  if (unit === 'year') return endOfYear;
  if (unit === 'quarter') return endOfQuarter;
  if (unit === 'month') return endOfMonth;
  if (unit === 'week') return endOfISOWeek;
  return _ => _;
};

// :: String -> Float
export const parseTimezoneStrToHours = (tz) => {
  const [chunk1, chunk2] = tz.split(':');
  const isPositive = chunk1[0] === '+';
  const hours = parseInt(chunk1.slice(1), 10);
  const minutes = parseInt(chunk2, 10);
  const result = hours + (minutes / 60);
  return isPositive ? result : -result;
};

// The offset can be either in hours or in seconds. Or it can be a string.
// :: (Int | String) -> Int
export const normalizeOffsetToMs = (offset) => {
  if (typeof offset !== 'number') return parseTimezoneStrToHours(offset) * 3600 * 1000;
  if (Math.abs(offset) > 15) return offset * 1000; // If the offset looks like seconds
  return offset * 3600 * 1000;
};

// :: (Int | String) -> Object -> Int
export const getMsDiffFromUTC = (offset, date) => (
  // The getTimezoneOffset retuns minutes
  normalizeOffsetToMs(offset) + (date.getTimezoneOffset() * 60 * 1000)
);

// The offset can be either in hours or in seconds. Or it can be a string.
// Returns a new Date string with the offset applied to it.
// :: (Int | String) -> String -> String
export const applyOffset = (offset, dateStr) => {
  if (!offset) return dateStr;
  const dateObj = new Date(dateStr);
  const diffFromUTC = getMsDiffFromUTC(offset, dateObj);
  return new Date(dateObj.getTime() + diffFromUTC).toString();
};
