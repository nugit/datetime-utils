// @flow

import sinon from 'sinon';
import timezoneMock from 'timezone-mock';
import * as helpers from '../src/helpers';

describe('helpers', () => {
  beforeAll(() => {
    timezoneMock.register('UTC');
  });

  afterAll(() => {
    timezoneMock.unregister();
  });

  describe('parseISO', () => {
    describe('with options', () => {
      it('should return correct date', () => {
        const date = '+020190101';
        expect(helpers.parseISO(date, { additionalDigits: 1 })).toEqual(
          new Date(2019, 0, 1),
        );
      });
    });

    describe('without options', () => {
      describe('date is a date type', () => {
        it('should return date as it is', () => {
          const date = new Date(2018, 0, 1);
          expect(helpers.parseISO(date)).toEqual(date);
        });
      });

      describe('date is a string type', () => {
        it('should return date as date type', () => {
          const date = '2018-01-01';
          expect(helpers.parseISO(date)).toEqual(new Date(date));
        });
      });

      describe('date is a integer type', () => {
        it('should return date as it is', () => {
          const date = 1514764800000; // 2018-01-01
          expect(helpers.parseISO(date)).toEqual(new Date(date));
        });
      });
    });
  });

  describe('addDays', () => {
    test('should return date with days added', () => {
      expect(helpers.addDays('2018-01-10', 5)).toEqual(
        new Date(2018, 0, 15),
      );
    });
  });

  describe('addMonths', () => {
    test('should return date with months added', () => {
      expect(helpers.addMonths('2018-01-10', 5)).toEqual(
        new Date(2018, 5, 10),
      );
    });
  });

  describe('addWeeks', () => {
    test('should return date with weeks added', () => {
      expect(helpers.addWeeks('2018-01-10', 5)).toEqual(
        new Date(2018, 1, 14),
      );
    });
  });

  describe('differenceInCalendarDays', () => {
    test('should return difference in calendar days', () => {
      expect(helpers.differenceInCalendarDays('2018-01-20', '2018-01-10')).toEqual(10);
    });
  });

  describe('differenceInDays', () => {
    test('should return difference in days', () => {
      expect(helpers.differenceInDays('2018-01-20', '2018-01-10')).toEqual(10);
    });
  });

  describe('differenceInMonths', () => {
    test('should return difference in months', () => {
      expect(helpers.differenceInMonths('2018-11-20', '2018-01-10')).toEqual(10);
    });
  });

  describe('differenceInQuarters', () => {
    test('should return difference in quarters', () => {
      expect(helpers.differenceInQuarters('2019-01-20', '2018-01-10')).toEqual(4);
    });
  });

  describe('differenceInWeeks', () => {
    test('should return difference in weeks', () => {
      expect(helpers.differenceInWeeks('2018-02-10', '2018-01-10')).toEqual(4);
    });
  });

  describe('differenceInYears', () => {
    test('should return difference in years', () => {
      expect(helpers.differenceInYears('2019-01-20', '2018-01-10')).toEqual(1);
    });
  });

  describe('eachDayOfInterval', () => {
    describe('with options', () => {
      test('should return array of dates within the range', () => {
        expect(helpers.eachDayOfInterval('2018-01-10', '2018-01-16', { step: 3 })).toEqual([
          new Date(2018, 0, 10),
          new Date(2018, 0, 13),
          new Date(2018, 0, 16),
        ]);
      });
    });

    describe('without options', () => {
      test('should return array of dates within the range', () => {
        expect(helpers.eachDayOfInterval('2018-01-10', '2018-01-12')).toEqual([
          new Date(2018, 0, 10),
          new Date(2018, 0, 11),
          new Date(2018, 0, 12),
        ]);
      });
    });
  });

  describe('endOfISOWeek', () => {
    test('should return the end date of the ISO week', () => {
      expect(helpers.endOfISOWeek('2018-01-10')).toEqual(
        new Date(2018, 0, 14, 23, 59, 59, 999),
      );
    });
  });

  describe('endOfMonth', () => {
    test('should return the end date of the month', () => {
      expect(helpers.endOfMonth('2018-01-10')).toEqual(
        new Date(2018, 0, 31, 23, 59, 59, 999),
      );
    });
  });

  describe('endOfQuarter', () => {
    test('should return the end date of the quarter', () => {
      expect(helpers.endOfQuarter('2018-01-10')).toEqual(
        new Date(2018, 2, 31, 23, 59, 59, 999),
      );
    });
  });

  describe('endOfWeek', () => {
    describe('with options', () => {
      test('should return the end date of the week', () => {
        expect(helpers.endOfWeek('2018-01-10', { weekStartsOn: 1 })).toEqual(
          new Date(2018, 0, 14, 23, 59, 59, 999),
        );
      });
    });

    describe('without options', () => {
      test('should return the end date of the week', () => {
        expect(helpers.endOfWeek('2018-01-10')).toEqual(
          new Date(2018, 0, 13, 23, 59, 59, 999),
        );
      });
    });
  });

  describe('endOfYear', () => {
    test('should return the end date of the year', () => {
      expect(helpers.endOfYear('2018-01-10')).toEqual(
        new Date(2018, 11, 31, 23, 59, 59, 999),
      );
    });
  });

  describe('format', () => {
    describe('with options', () => {
      it('should return the correct formatted date', () => {
        expect(
          helpers.format('2018-02-10', 'DD', { useAdditionalDayOfYearTokens: true }),
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
        expect(helpers.format(date, formatIn)).toEqual(formattedDate);
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
      it('should return the distance in words', () => {
        expect(
          helpers.formatDistanceToNow('2018-02-15', { addSuffix: true }),
        ).toEqual('in about 1 month');
      });
    });

    describe('without options', () => {
      it('should return the distance in words', () => {
        expect(helpers.formatDistanceToNow('2018-02-15')).toEqual('about 1 month');
      });
    });
  });

  describe('getDate', () => {
    test('should return the day of month', () => {
      expect(helpers.getDate('2018-01-20')).toEqual(20);
    });
  });

  describe('getDayOfYear', () => {
    test('should return the day of year', () => {
      expect(helpers.getDayOfYear('2018-02-10')).toEqual(41);
    });
  });

  describe('getDaysInMonth', () => {
    test('should return the number of days in a month', () => {
      expect(helpers.getDaysInMonth('2016-02-10')).toEqual(29);
    });
  });

  describe('getDaysInYear', () => {
    test('should return the number of days in a year', () => {
      expect(helpers.getDaysInYear('2018-01-10')).toEqual(365);
    });
  });

  describe('getISODay', () => {
    test('should return the day of ISO week', () => {
      expect(helpers.getISODay('2018-01-20')).toEqual(6);
    });
  });

  describe('getMonth', () => {
    test('should return the month', () => {
      expect(helpers.getMonth('2018-01-10')).toEqual(0);
    });
  });

  describe('getYear', () => {
    test('should return the year', () => {
      expect(helpers.getYear('2018-01-10')).toEqual(2018);
    });
  });

  describe('isAfter', () => {
    test('should return true if first date is after second date', () => {
      expect(helpers.isAfter('2018-01-20', '2018-01-10')).toEqual(true);
    });
  });

  describe('isBefore', () => {
    test('should return true if first date is before second date', () => {
      expect(helpers.isBefore('2018-01-10', '2018-01-20')).toEqual(true);
    });
  });

  describe('isMonday', () => {
    test('should return true if the date is a Monday', () => {
      expect(helpers.isMonday('2018-02-12')).toEqual(true);
    });
  });

  describe('isSameDay', () => {
    test('should return true if the dates are the same', () => {
      expect(helpers.isSameDay('2018-02-12', '2018-02-12')).toEqual(true);
    });
  });

  describe('isSameMonth', () => {
    test('should return true if the months are the same', () => {
      expect(helpers.isSameMonth('2018-02-01', '2018-02-20')).toEqual(true);
    });
  });

  describe('isSunday', () => {
    test('should return true if the date is a Sunday', () => {
      expect(helpers.isSunday('2018-02-11')).toEqual(true);
    });
  });

  describe('isToday', () => {
    test('should return true if the date is today', () => {
      const clock = sinon.useFakeTimers(new Date(2018, 0, 10).getTime());
      expect(helpers.isToday('2018-01-10')).toEqual(true);
      clock.restore();
    });
  });

  describe('isValid', () => {
    test('should return true if the date is valid', () => {
      expect(helpers.isValid('2018-01-10')).toEqual(true);
    });
  });

  describe('isWithinInterval', () => {
    test('should return if the date is within the interval', () => {
      expect(helpers.isWithinInterval('2018-01-10', '2018-01-01', '2018-01-20')).toEqual(true);
    });
  });

  describe('max', () => {
    test('should return the latest date', () => {
      expect(helpers.max(['2018-01-10', '2018-01-01', '2018-01-20'])).toEqual(
        new Date(2018, 0, 20),
      );
    });
  });

  describe('min', () => {
    test('should return the earliest date', () => {
      expect(helpers.min(['2018-01-10', '2018-01-01', '2018-01-20'])).toEqual(
        new Date(2018, 0, 1),
      );
    });
  });

  describe('setDate', () => {
    test('should return date with date set', () => {
      expect(helpers.setDate('2018-01-10', 5)).toEqual(
        new Date(2018, 0, 5),
      );
    });
  });

  describe('setDay', () => {
    describe('with options', () => {
      test('should return date with day set', () => {
        expect(helpers.setDay('2018-01-10', 1, { weekStartsOn: 2 })).toEqual(
          new Date(2018, 0, 15),
        );
      });
    });

    describe('without options', () => {
      test('should return date with day set', () => {
        expect(helpers.setDay('2018-01-10', 0)).toEqual(
          new Date(2018, 0, 7),
        );
      });
    });
  });

  describe('setISODay', () => {
    test('should return date with ISO day set', () => {
      expect(helpers.setISODay('2018-01-10', 1)).toEqual(
        new Date(2018, 0, 8),
      );
    });
  });

  describe('setMonth', () => {
    test('should return date with month set', () => {
      expect(helpers.setMonth('2018-02-10', 5)).toEqual(
        new Date(2018, 5, 10),
      );
    });
  });

  describe('startOfISOWeek', () => {
    test('should return the start date of the ISO week', () => {
      expect(helpers.startOfISOWeek('2018-01-10')).toEqual(
        new Date(2018, 0, 8, 0, 0, 0, 0),
      );
    });
  });

  describe('startOfMonth', () => {
    test('should return the start date of the month', () => {
      expect(helpers.startOfMonth('2018-01-10')).toEqual(
        new Date(2018, 0, 1, 0, 0, 0, 0),
      );
    });
  });

  describe('startOfQuarter', () => {
    test('should return the start date of the quarter', () => {
      expect(helpers.startOfQuarter('2018-01-10')).toEqual(
        new Date(2018, 0, 1, 0, 0, 0, 0),
      );
    });
  });

  describe('startOfWeek', () => {
    describe('with options', () => {
      test('should return the start date of the week', () => {
        expect(helpers.startOfWeek('2018-01-10', { weekStartsOn: 1 })).toEqual(
          new Date(2018, 0, 8, 0, 0, 0, 0),
        );
      });
    });

    describe('without options', () => {
      test('should return the start date of the week', () => {
        expect(helpers.startOfWeek('2018-01-10')).toEqual(
          new Date(2018, 0, 7, 0, 0, 0, 0),
        );
      });
    });
  });

  describe('startOfYear', () => {
    test('should return the start date of the year', () => {
      expect(helpers.startOfYear('2018-01-10')).toEqual(
        new Date(2018, 0, 1, 0, 0, 0, 0),
      );
    });
  });

  describe('subDays', () => {
    test('should return date with days subtracted', () => {
      expect(helpers.subDays('2018-01-10', 5)).toEqual(
        new Date(2018, 0, 5),
      );
    });
  });

  describe('subMonths', () => {
    test('should return date with months subtracted', () => {
      expect(helpers.subMonths('2018-01-10', 5)).toEqual(
        new Date(2017, 7, 10),
      );
    });
  });

  describe('subQuarters', () => {
    test('should return date with quarters subtracted', () => {
      expect(helpers.subQuarters('2018-01-10', 2)).toEqual(
        new Date(2017, 6, 10),
      );
    });
  });

  describe('subWeeks', () => {
    test('should return date with weeks subtracted', () => {
      expect(helpers.subWeeks('2018-01-10', 5)).toEqual(
        new Date(2017, 11, 6),
      );
    });
  });

  describe('subYears', () => {
    test('should return date with years subtracted', () => {
      expect(helpers.subYears('2018-01-10', 2)).toEqual(
        new Date(2016, 0, 10),
      );
    });
  });
});
