// @flow

import sinon from 'sinon';
import timezoneMock from 'timezone-mock';
import { addDays, addMonths, addWeeks, differenceInCalendarDays, differenceInDays, differenceInMonths, differenceInQuarters, differenceInWeeks, differenceInYears, eachDayOfInterval, endOfISOWeek, endOfMonth, endOfQuarter, endOfWeek, endOfYear, format, formatDistanceToNow, getDate, getDayOfYear, getDaysInMonth, getDaysInYear, getISODay, getMonth, getYear, isAfter, isBefore, isMonday, isSameDay, isSameMonth, isSunday, isToday, isValid, isWithinInterval, max, min, parseISO, setDate, setDay, setISODay, setMonth, startOfISOWeek, startOfMonth, startOfQuarter, startOfWeek, startOfYear, subDays, subMonths, subQuarters, subWeeks, subYears } from '../helpers';

describe('helpers', () => {
  beforeAll(() => {
    timezoneMock.register('UTC');
  });

  afterAll(() => {
    timezoneMock.unregister();
  });

  describe('parseISO', () => {
    describe('with options', () => {
      test('should return correct date', () => {
        const date = '+020190101';
        expect(parseISO(date, { additionalDigits: 1 })).toEqual(
          new Date(2019, 0, 1),
        );
      });
    });

    describe('without options', () => {
      describe('date is a date type', () => {
        test('should return date as it is', () => {
          const date = new Date(2018, 0, 1);
          expect(parseISO(date)).toEqual(date);
        });
      });

      describe('date is a string type', () => {
        test('should return date as date type', () => {
          const date = '2018-01-01';
          expect(parseISO(date)).toEqual(new Date(date));
        });
      });

      describe('date is a integer type', () => {
        test('should return date as date type', () => {
          const date = 1514764800000; // 2018-01-01
          expect(parseISO(date)).toEqual(new Date(date));
        });
      });
    });
  });

  describe('addDays', () => {
    test('should return date with days added', () => {
      expect(addDays('2018-01-10', 5)).toEqual(
        new Date(2018, 0, 15),
      );
    });
  });

  describe('addMonths', () => {
    test('should return date with months added', () => {
      expect(addMonths('2018-01-10', 5)).toEqual(
        new Date(2018, 5, 10),
      );
    });
  });

  describe('addWeeks', () => {
    test('should return date with weeks added', () => {
      expect(addWeeks('2018-01-10', 5)).toEqual(
        new Date(2018, 1, 14),
      );
    });
  });

  describe('differenceInCalendarDays', () => {
    test('should return difference in calendar days', () => {
      expect(differenceInCalendarDays('2018-01-20', '2018-01-10')).toEqual(10);
    });
  });

  describe('differenceInDays', () => {
    test('should return difference in days', () => {
      expect(differenceInDays('2018-01-20', '2018-01-10')).toEqual(10);
    });
  });

  describe('differenceInMonths', () => {
    test('should return difference in months', () => {
      expect(differenceInMonths('2018-11-20', '2018-01-10')).toEqual(10);
    });
  });

  describe('differenceInQuarters', () => {
    test('should return difference in quarters', () => {
      expect(differenceInQuarters('2019-01-20', '2018-01-10')).toEqual(4);
    });
  });

  describe('differenceInWeeks', () => {
    test('should return difference in weeks', () => {
      expect(differenceInWeeks('2018-02-10', '2018-01-10')).toEqual(4);
    });
  });

  describe('differenceInYears', () => {
    test('should return difference in years', () => {
      expect(differenceInYears('2019-01-20', '2018-01-10')).toEqual(1);
    });
  });

  describe('eachDayOfInterval', () => {
    describe('with options', () => {
      test('should return array of dates within the range', () => {
        expect(eachDayOfInterval('2018-01-10', '2018-01-16', { step: 3 })).toEqual([
          new Date(2018, 0, 10),
          new Date(2018, 0, 13),
          new Date(2018, 0, 16),
        ]);
      });
    });

    describe('without options', () => {
      test('should return array of dates within the range', () => {
        expect(eachDayOfInterval('2018-01-10', '2018-01-12')).toEqual([
          new Date(2018, 0, 10),
          new Date(2018, 0, 11),
          new Date(2018, 0, 12),
        ]);
      });
    });
  });

  describe('endOfISOWeek', () => {
    test('should return the end date of the ISO week', () => {
      expect(endOfISOWeek('2018-01-10')).toEqual(
        new Date(2018, 0, 14, 23, 59, 59, 999),
      );
    });
  });

  describe('endOfMonth', () => {
    test('should return the end date of the month', () => {
      expect(endOfMonth('2018-01-10')).toEqual(
        new Date(2018, 0, 31, 23, 59, 59, 999),
      );
    });
  });

  describe('endOfQuarter', () => {
    test('should return the end date of the quarter', () => {
      expect(endOfQuarter('2018-01-10')).toEqual(
        new Date(2018, 2, 31, 23, 59, 59, 999),
      );
    });
  });

  describe('endOfWeek', () => {
    describe('with options', () => {
      test('should return the end date of the week', () => {
        expect(endOfWeek('2018-01-10', { weekStartsOn: 1 })).toEqual(
          new Date(2018, 0, 14, 23, 59, 59, 999),
        );
      });
    });

    describe('without options', () => {
      test('should return the end date of the week', () => {
        expect(endOfWeek('2018-01-10')).toEqual(
          new Date(2018, 0, 13, 23, 59, 59, 999),
        );
      });
    });
  });

  describe('endOfYear', () => {
    test('should return the end date of the year', () => {
      expect(endOfYear('2018-01-10')).toEqual(
        new Date(2018, 11, 31, 23, 59, 59, 999),
      );
    });
  });

  describe('format', () => {
    describe('with options', () => {
      test('should return the correct formatted date', () => {
        expect(
          format('2018-02-10', 'DD', { useAdditionalDayOfYearTokens: true }),
        ).toEqual('41');
      });
    });

    describe('without options', () => {
      test.each([
        ['2018-01-10', 'dd MMM yyyy', '10 Jan 2018'],
        ['2018-01-10', 'do MMM yyyy', '10th Jan 2018'],
        ['2018-01-10', 'RRRR-\'W\'II', '2018-W02'],
        ['2018-01-10', '\'Q\'Q yyyy', 'Q1 2018'],
      ])('should return the correct formatted date', (date, formatIn, formattedDate) => {
        expect(format(date, formatIn)).toEqual(formattedDate);
      });
    });
  });

  describe('formatDistanceToNow', () => {
    let clock;

    beforeEach(() => {
      clock = sinon.useFakeTimers(new Date(2018, 0, 10).getTime());
    });

    afterEach(() => {
      clock.restore();
    });

    describe('with options', () => {
      test('should return the distance in words', () => {
        expect(
          formatDistanceToNow('2018-02-15', { addSuffix: true }),
        ).toEqual('in about 1 month');
      });
    });

    describe('without options', () => {
      test('should return the distance in words', () => {
        expect(formatDistanceToNow('2018-02-15')).toEqual('about 1 month');
      });
    });
  });

  describe('getDate', () => {
    test('should return the day of month', () => {
      expect(getDate('2018-01-20')).toEqual(20);
    });
  });

  describe('getDayOfYear', () => {
    test('should return the day of year', () => {
      expect(getDayOfYear('2018-02-10')).toEqual(41);
    });
  });

  describe('getDaysInMonth', () => {
    test('should return the number of days in a month', () => {
      expect(getDaysInMonth('2016-02-10')).toEqual(29);
    });
  });

  describe('getDaysInYear', () => {
    test('should return the number of days in a year', () => {
      expect(getDaysInYear('2018-01-10')).toEqual(365);
    });
  });

  describe('getISODay', () => {
    test('should return the day of ISO week', () => {
      expect(getISODay('2018-01-20')).toEqual(6);
    });
  });

  describe('getMonth', () => {
    test('should return the month', () => {
      expect(getMonth('2018-01-10')).toEqual(0);
    });
  });

  describe('getYear', () => {
    test('should return the year', () => {
      expect(getYear('2018-01-10')).toEqual(2018);
    });
  });

  describe('isAfter', () => {
    test('should return true if first date is after second date', () => {
      expect(isAfter('2018-01-20', '2018-01-10')).toEqual(true);
    });
  });

  describe('isBefore', () => {
    test('should return true if first date is before second date', () => {
      expect(isBefore('2018-01-10', '2018-01-20')).toEqual(true);
    });
  });

  describe('isMonday', () => {
    test('should return true if the date is a Monday', () => {
      expect(isMonday('2018-02-12')).toEqual(true);
    });
  });

  describe('isSameDay', () => {
    test('should return true if the dates are the same', () => {
      expect(isSameDay('2018-02-12', '2018-02-12')).toEqual(true);
    });
  });

  describe('isSameMonth', () => {
    test('should return true if the months are the same', () => {
      expect(isSameMonth('2018-02-01', '2018-02-20')).toEqual(true);
    });
  });

  describe('isSunday', () => {
    test('should return true if the date is a Sunday', () => {
      expect(isSunday('2018-02-11')).toEqual(true);
    });
  });

  describe('isToday', () => {
    test('should return true if the date is today', () => {
      const clock = sinon.useFakeTimers(new Date(2018, 0, 10).getTime());
      expect(isToday('2018-01-10')).toEqual(true);
      clock.restore();
    });
  });

  describe('isValid', () => {
    test('should return true if the date is valid', () => {
      expect(isValid('2018-01-10')).toEqual(true);
    });
  });

  describe('isWithinInterval', () => {
    test('should return if the date is within the interval', () => {
      expect(isWithinInterval('2018-01-10', '2018-01-01', '2018-01-20')).toEqual(true);
    });
  });

  describe('max', () => {
    test('should return the latest date', () => {
      expect(max(['2018-01-10', '2018-01-01', '2018-01-20'])).toEqual(
        new Date(2018, 0, 20),
      );
    });
  });

  describe('min', () => {
    test('should return the earliest date', () => {
      expect(min(['2018-01-10', '2018-01-01', '2018-01-20'])).toEqual(
        new Date(2018, 0, 1),
      );
    });
  });

  describe('setDate', () => {
    test('should return date with date set', () => {
      expect(setDate('2018-01-10', 5)).toEqual(
        new Date(2018, 0, 5),
      );
    });
  });

  describe('setDay', () => {
    describe('with options', () => {
      test('should return date with day set', () => {
        expect(setDay('2018-01-10', 1, { weekStartsOn: 2 })).toEqual(
          new Date(2018, 0, 15),
        );
      });
    });

    describe('without options', () => {
      test('should return date with day set', () => {
        expect(setDay('2018-01-10', 0)).toEqual(
          new Date(2018, 0, 7),
        );
      });
    });
  });

  describe('setISODay', () => {
    test('should return date with ISO day set', () => {
      expect(setISODay('2018-01-10', 1)).toEqual(
        new Date(2018, 0, 8),
      );
    });
  });

  describe('setMonth', () => {
    test('should return date with month set', () => {
      expect(setMonth('2018-02-10', 5)).toEqual(
        new Date(2018, 5, 10),
      );
    });
  });

  describe('startOfISOWeek', () => {
    test('should return the start date of the ISO week', () => {
      expect(startOfISOWeek('2018-01-10')).toEqual(
        new Date(2018, 0, 8, 0, 0, 0, 0),
      );
    });
  });

  describe('startOfMonth', () => {
    test('should return the start date of the month', () => {
      expect(startOfMonth('2018-01-10')).toEqual(
        new Date(2018, 0, 1, 0, 0, 0, 0),
      );
    });
  });

  describe('startOfQuarter', () => {
    test('should return the start date of the quarter', () => {
      expect(startOfQuarter('2018-01-10')).toEqual(
        new Date(2018, 0, 1, 0, 0, 0, 0),
      );
    });
  });

  describe('startOfWeek', () => {
    describe('with options', () => {
      test('should return the start date of the week', () => {
        expect(startOfWeek('2018-01-10', { weekStartsOn: 1 })).toEqual(
          new Date(2018, 0, 8, 0, 0, 0, 0),
        );
      });
    });

    describe('without options', () => {
      test('should return the start date of the week', () => {
        expect(startOfWeek('2018-01-10')).toEqual(
          new Date(2018, 0, 7, 0, 0, 0, 0),
        );
      });
    });
  });

  describe('startOfYear', () => {
    test('should return the start date of the year', () => {
      expect(startOfYear('2018-01-10')).toEqual(
        new Date(2018, 0, 1, 0, 0, 0, 0),
      );
    });
  });

  describe('subDays', () => {
    test('should return date with days subtracted', () => {
      expect(subDays('2018-01-10', 5)).toEqual(
        new Date(2018, 0, 5),
      );
    });
  });

  describe('subMonths', () => {
    test('should return date with months subtracted', () => {
      expect(subMonths('2018-01-10', 5)).toEqual(
        new Date(2017, 7, 10),
      );
    });
  });

  describe('subQuarters', () => {
    test('should return date with quarters subtracted', () => {
      expect(subQuarters('2018-01-10', 2)).toEqual(
        new Date(2017, 6, 10),
      );
    });
  });

  describe('subWeeks', () => {
    test('should return date with weeks subtracted', () => {
      expect(subWeeks('2018-01-10', 5)).toEqual(
        new Date(2017, 11, 6),
      );
    });
  });

  describe('subYears', () => {
    test('should return date with years subtracted', () => {
      expect(subYears('2018-01-10', 2)).toEqual(
        new Date(2016, 0, 10),
      );
    });
  });
});
