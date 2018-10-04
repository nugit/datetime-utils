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
  if (unit === 'month') return subMonths;
  if (unit === 'quarter') return (date, nb) => subMonths(date, nb * 3);
  if (unit === 'week') return subWeeks;
  return subDays;
};

// :: Int -> String -> String
export const applyOffset = (offset, dateStr) => {
  if (!offset) return dateStr;
  const dateObj = new Date(dateStr);
  const tzDiff = offset * 60 + dateObj.getTimezoneOffset();
  return new Date(dateObj.getTime() + tzDiff * 60 * 1000).toString();
};

