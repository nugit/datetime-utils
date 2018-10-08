import format from 'date-fns/format';
import subDays from 'date-fns/sub_days';
import subMonths from 'date-fns/sub_months';
import subWeeks from 'date-fns/sub_weeks';
import subYears from 'date-fns/sub_years';

// :: (Date | String | Int) -> String
export const formatDate = date => format(date, 'YYYY-MM-DD');

// :: String -> ((Date | String | Int) -> Int -> Date)
export const getSubtractionFn = (unit) => {
  if (unit === 'year') return subYears;
  if (unit === 'quarter') return (date, nb) => subMonths(date, nb * 3);
  if (unit === 'month') return subMonths;
  if (unit === 'week') return subWeeks;
  return subDays;
};

// Parse timezone string and returns its hours equivalent (`+08:00` -> 8)
// :: String -> Float
export const parseTimezone = (tz) => {
  const [chunk1, chunk2] = tz.split(':');
  const isPositive = chunk1[0] === '+';
  const hours = parseInt(chunk1.slice(1), 10);
  const minutes = parseInt(chunk2, 10);
  const result = hours + (minutes / 60);
  return isPositive ? result : -result;
};

// The offset can be either in hours or in seconds. Or it can be a string.
// Returns the offset in miliseconds
// :: (Int | String) -> Int
export const normalizeOffset = (offset) => {
  // It's not a number: we assume it's in the shape of `+08:00` and parse it
  if (typeof offset !== 'number') return parseTimezone(offset) * 3600 * 1000;
  // Offset in seconds: we convert to miliseconds
  if (Math.abs(offset) > 15) return offset * 1000;
  // Othewise we assume it's hours: we convert to seconds then miliseconds
  return offset * 3600 * 1000;
};

// Gets the number of miliseconds separating a date plus an offset from UTC
// :: (Int | String) -> Object -> Int
export const getTzDiff = (offset, date) => (
  // The getTimezoneOffset retuns minutes
  normalizeOffset(offset) + (date.getTimezoneOffset() * 60 * 1000)
);

// :: Int -> String -> String
export const applyOffset = (offset, dateStr) => {
  if (!offset) return dateStr;
  const dateObj = new Date(dateStr);
  const tzDiff = getTzDiff(offset, dateObj);
  return new Date(dateObj.getTime() + tzDiff).toString();
};
