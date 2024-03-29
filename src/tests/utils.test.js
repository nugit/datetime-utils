// @flow

import timezoneMock from 'timezone-mock';
import { applyOffset, formatDate, getDiffFn, getEndOfFn, getMsDiffFromUTC, getStartOfFn, getSubtractionFn, normalizeOffsetToMs, parseTimezoneStrToHours } from '../utils';

describe('utils', () => {
  describe('formatDate', () => {
    test('should format a date correctly', () => {
      expect(formatDate(new Date(0))).toEqual('1970-01-01');
    });
  });

  describe('getSubstractionFn', () => {
    describe('unit is year', () => {
      test('should return a subYears function', () => {
        const fn = getSubtractionFn('year');
        const rawOutput = fn('2018-02-01', 1);
        expect(formatDate(rawOutput)).toEqual('2017-02-01');
      });
    });

    describe('unit is quarter', () => {
      test('should return a subQuarters function', () => {
        const fn = getSubtractionFn('quarter');
        const rawOutput = fn('2018-02-01', 1);
        expect(formatDate(rawOutput)).toEqual('2017-11-01');
      });
    });

    describe('unit is month', () => {
      test('should return a subMonths function', () => {
        const fn = getSubtractionFn('month');
        const rawOutput = fn('2018-02-01', 1);
        expect(formatDate(rawOutput)).toEqual('2018-01-01');
      });
    });

    describe('unit is week', () => {
      test('should return a subWeeks function', () => {
        const fn = getSubtractionFn('week');
        const rawOutput = fn('2018-02-01', 1);
        expect(formatDate(rawOutput)).toEqual('2018-01-25');
      });
    });

    describe('unit is none of the above', () => {
      test('should return a subDays function', () => {
        // $FlowExpectedError[incompatible-call]
        const fn = getSubtractionFn('whatever');
        const rawOutput = fn('2018-02-01', 1);
        expect(formatDate(rawOutput)).toEqual('2018-01-31');
      });
    });
  });

  describe('getDiffFn', () => {
    describe('unit is year', () => {
      test('should return a differenceYears function', () => {
        const fn = getDiffFn('year');
        expect(fn('2013-09-01', '2018-02-01')).toEqual(-4);
      });
    });

    describe('unit is quarter', () => {
      test('should return a differenceInQuarters function', () => {
        const fn = getDiffFn('quarter');
        expect(fn('2017-02-01', '2017-09-30')).toEqual(-2);
      });
    });

    describe('unit is month', () => {
      test('should return a differenceInMonths function', () => {
        const fn = getDiffFn('month');
        expect(fn('2018-09-01', '2018-02-15')).toEqual(6);
      });
    });

    describe('unit is week', () => {
      test('should return a differenceInWeeks function', () => {
        const fn = getDiffFn('week');
        expect(fn('2018-01-01', '2018-02-01')).toEqual(-4);
      });
    });

    describe('unit is none of the above', () => {
      test('should return a differenceInDays function', () => {
        // $FlowExpectedError[incompatible-call]
        const fn = getDiffFn('whatever');
        expect(fn('2018-01-10', '2018-01-20')).toEqual(-10);
      });
    });
  });

  describe('getStartOfFn', () => {
    describe('unit is year', () => {
      test('should return a startOfYear function', () => {
        const fn = getStartOfFn('year');
        expect(formatDate(fn('2018-09-06'))).toEqual('2018-01-01');
      });
    });

    describe('unit is quarter', () => {
      test('should return a startOfQuarter function', () => {
        const fn = getStartOfFn('quarter');
        expect(formatDate(fn('2018-09-06'))).toEqual('2018-07-01');
      });
    });

    describe('unit is month', () => {
      test('should return a startOfMonth function', () => {
        const fn = getStartOfFn('month');
        expect(formatDate(fn('2018-09-06'))).toEqual('2018-09-01');
      });
    });

    describe('unit is week', () => {
      test('should return a startOfISOWeek function', () => {
        const fn = getStartOfFn('week');
        expect(formatDate(fn('2018-09-06'))).toEqual('2018-09-03');
      });
    });

    describe('unit is none of the above', () => {
      test('should return identity function', () => {
        // $FlowExpectedError[incompatible-call]
        const fn = getStartOfFn('whatever');
        expect(formatDate(fn('2018-09-06'))).toEqual('2018-09-06');
      });
    });
  });

  describe('getEndOfFn', () => {
    describe('unit is year', () => {
      test('should return a endOfYear function', () => {
        const fn = getEndOfFn('year');
        expect(formatDate(fn('2018-09-06'))).toEqual('2018-12-31');
      });
    });

    describe('unit is quarter', () => {
      test('should return a endOfQuarter function', () => {
        const fn = getEndOfFn('quarter');
        expect(formatDate(fn('2018-09-06'))).toEqual('2018-09-30');
      });
    });

    describe('unit is month', () => {
      test('should return a endOfMonth function', () => {
        const fn = getEndOfFn('month');
        expect(formatDate(fn('2018-09-06'))).toEqual('2018-09-30');
      });
    });

    describe('unit is week', () => {
      test('should return a endOfISOWeek function', () => {
        const fn = getEndOfFn('week');
        expect(formatDate(fn('2018-09-06'))).toEqual('2018-09-09');
      });
    });

    describe('unit is none of the above', () => {
      test('should return identity function', () => {
        // $FlowExpectedError[incompatible-call]
        const fn = getEndOfFn('whatever');
        expect(formatDate(fn('2018-09-06'))).toEqual('2018-09-06');
      });
    });
  });

  describe('parseTimezoneStrToHours', () => {
    describe('when passed a positive timezone', () => {
      test('should parse it correctly', () => {
        const tz = '+08:00';
        expect(parseTimezoneStrToHours(tz)).toEqual(8);
      });
    });

    describe('when passed a negative timezone', () => {
      test('should parse it correctly', () => {
        const tz = '-12:00';
        expect(parseTimezoneStrToHours(tz)).toEqual(-12);
      });
    });

    describe('when passed a complex timezone', () => {
      test('should parse it correctly', () => {
        const tz = '-10:30';
        expect(parseTimezoneStrToHours(tz)).toEqual(-10.5);
      });
    });
  });

  describe('normalizeOffsetToMs', () => {
    describe('when passed a string', () => {
      test('should parse it correctly and returns a milliseconds equivalent', () => {
        const tz = '+08:00';
        expect(normalizeOffsetToMs(tz)).toEqual(8 * 3600 * 1000);
      });
    });

    describe('when passed hours', () => {
      test('should convert them to milliseconds', () => {
        const tz = 12;
        expect(normalizeOffsetToMs(tz)).toEqual(12 * 3600 * 1000);
      });
    });

    describe('when passed seconds', () => {
      test('should convert them to milliseconds', () => {
        const tz = 3600;
        expect(normalizeOffsetToMs(tz)).toEqual(3600000);
      });
    });
  });

  describe('getMsDiffFromUFC', () => {
    test('should correctly return a milliseconds total difference', () => {
      const timezoneOffset = new Date().getTimezoneOffset() / 60;
      // getTimezoneOffset doesn't return timezone given on the date object
      // but the host system timezone
      // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
      const diff = getMsDiffFromUTC('+05:30');
      const expectedDiff = ((timezoneOffset + 5.5) * 3600 * 1000);
      expect(diff).toEqual(expectedDiff);
    });
  });

  describe.skip('applyOffset', () => {
    describe.each([['US/Pacific'], ['US/Eastern'], ['UTC']])(
      'when timezone is %s',
      (tz) => {
        beforeAll(() => {
          timezoneMock.register(tz);
        });

        afterAll(() => {
          timezoneMock.unregister();
        });

        test('should apply the given offset is UTC', () => {
          const date = new Date('2018-10-08T22:00:00');
          const convertedDate = applyOffset('+00:00', date);
          expect(convertedDate.getHours()).toEqual(22);
          expect(convertedDate.getMinutes()).toEqual(0);
          expect(formatDate(convertedDate)).toEqual('2018-10-08');
        });

        test('should apply the given offset is US/Pacific', () => {
          const date = new Date(2018, 9, 8, 22, 0, 0);
          const convertedDate = applyOffset('-08:00', date);
          expect(convertedDate.getHours()).toEqual(22);
          expect(convertedDate.getMinutes()).toEqual(0);
          expect(formatDate(convertedDate)).toEqual('2018-10-08');
        });

        test('should apply the given offset is US/Eastern', () => {
          const date = new Date(2018, 9, 8, 4, 0, 0);
          const convertedDate = applyOffset('-05:00', date);
          expect(convertedDate.getHours()).toEqual(4);
          expect(convertedDate.getMinutes()).toEqual(0);
          expect(formatDate(convertedDate)).toEqual('2018-10-08');
        });
      },
    );
  });
});
