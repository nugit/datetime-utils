import { expect } from 'chai';
import timezoneMock from 'timezone-mock';
import * as utils from '../src/utils';

describe('utils', () => {
  describe('formatDate', () => {
    it('should format a date correctly', () => {
      expect(utils.formatDate(new Date(0))).to.equal('1970-01-01');
    });
  });

  describe('getSubstractionFn', () => {
    describe('unit is year', () => {
      it('should return a subYears function', () => {
        const fn = utils.getSubtractionFn('year');
        const rawOutput = fn('2018-02-01', 1);
        expect(utils.formatDate(rawOutput)).to.equal('2017-02-01');
      });
    });
    describe('unit is quarter', () => {
      it('should return a subQuarters function', () => {
        const fn = utils.getSubtractionFn('quarter');
        const rawOutput = fn('2018-02-01', 1);
        expect(utils.formatDate(rawOutput)).to.equal('2017-11-01');
      });
    });
    describe('unit is month', () => {
      it('should return a subMonths function', () => {
        const fn = utils.getSubtractionFn('month');
        const rawOutput = fn('2018-02-01', 1);
        expect(utils.formatDate(rawOutput)).to.equal('2018-01-01');
      });
    });
    describe('unit is week', () => {
      it('should return a subWeeks function', () => {
        const fn = utils.getSubtractionFn('week');
        const rawOutput = fn('2018-02-01', 1);
        expect(utils.formatDate(rawOutput)).to.equal('2018-01-25');
      });
    });
    describe('unit is none of the above', () => {
      it('should return a subDays function', () => {
        const fn = utils.getSubtractionFn('whatever');
        const rawOutput = fn('2018-02-01', 1);
        expect(utils.formatDate(rawOutput)).to.equal('2018-01-31');
      });
    });
  });

  describe('getDiffFn', () => {
    describe('unit is year', () => {
      it('should return a differenceYears function', () => {
        const fn = utils.getDiffFn('year');
        expect(fn('2013-09-01', '2018-02-01')).to.equal(-4);
      });
    });
    describe('unit is quarter', () => {
      it('should return a differenceInQuarters function', () => {
        const fn = utils.getDiffFn('quarter');
        expect(fn('2017-02-01', '2017-09-30')).to.equal(-2);
      });
    });
    describe('unit is month', () => {
      it('should return a differenceInMonths function', () => {
        const fn = utils.getDiffFn('month');
        expect(fn('2018-09-01', '2018-02-15')).to.equal(6);
      });
    });
    describe('unit is week', () => {
      it('should return a differenceInWeeks function', () => {
        const fn = utils.getDiffFn('week');
        expect(fn('2018-01-01', '2018-02-01')).to.equal(-4);
      });
    });
    describe('unit is none of the above', () => {
      it('should return a differenceInDays function', () => {
        const fn = utils.getDiffFn('whatever');
        expect(fn('2018-01-10', '2018-01-20')).to.equal(-10);
      });
    });
  });

  describe('getStartOfFn', () => {
    describe('unit is year', () => {
      it('should return a startOfYear function', () => {
        const fn = utils.getStartOfFn('year');
        expect(utils.formatDate(fn('2018-09-06'))).to.equal('2018-01-01');
      });
    });
    describe('unit is quarter', () => {
      it('should return a startOfQuarter function', () => {
        const fn = utils.getStartOfFn('quarter');
        expect(utils.formatDate(fn('2018-09-06'))).to.equal('2018-07-01');
      });
    });
    describe('unit is month', () => {
      it('should return a startOfMonth function', () => {
        const fn = utils.getStartOfFn('month');
        expect(utils.formatDate(fn('2018-09-06'))).to.equal('2018-09-01');
      });
    });
    describe('unit is week', () => {
      it('should return a startOfISOWeek function', () => {
        const fn = utils.getStartOfFn('week');
        expect(utils.formatDate(fn('2018-09-06'))).to.equal('2018-09-03');
      });
    });
    describe('unit is none of the above', () => {
      it('should return identity function', () => {
        const fn = utils.getStartOfFn('whatever');
        expect(utils.formatDate(fn('2018-09-06'))).to.equal('2018-09-06');
      });
    });
  });

  describe('getEndOfFn', () => {
    describe('unit is year', () => {
      it('should return a endOfYear function', () => {
        const fn = utils.getEndOfFn('year');
        expect(utils.formatDate(fn('2018-09-06'))).to.equal('2018-12-31');
      });
    });
    describe('unit is quarter', () => {
      it('should return a endOfQuarter function', () => {
        const fn = utils.getEndOfFn('quarter');
        expect(utils.formatDate(fn('2018-09-06'))).to.equal('2018-09-30');
      });
    });
    describe('unit is month', () => {
      it('should return a endOfMonth function', () => {
        const fn = utils.getEndOfFn('month');
        expect(utils.formatDate(fn('2018-09-06'))).to.equal('2018-09-30');
      });
    });
    describe('unit is week', () => {
      it('should return a endOfISOWeek function', () => {
        const fn = utils.getEndOfFn('week');
        expect(utils.formatDate(fn('2018-09-06'))).to.equal('2018-09-09');
      });
    });
    describe('unit is none of the above', () => {
      it('should return identity function', () => {
        const fn = utils.getEndOfFn('whatever');
        expect(utils.formatDate(fn('2018-09-06'))).to.equal('2018-09-06');
      });
    });
  });

  describe('parseTimezoneStrToHours', () => {
    describe('when passed a positive timezone', () => {
      it('should parse it correctly', () => {
        const tz = '+08:00';
        expect(utils.parseTimezoneStrToHours(tz)).to.equal(8);
      });
    });
    describe('when passed a negative timezone', () => {
      it('should parse it correctly', () => {
        const tz = '-12:00';
        expect(utils.parseTimezoneStrToHours(tz)).to.equal(-12);
      });
    });
    describe('when passed a complex timezone', () => {
      it('should parse it correctly', () => {
        const tz = '-10:30';
        expect(utils.parseTimezoneStrToHours(tz)).to.equal(-10.5);
      });
    });
  });

  describe('normalizeOffsetToMs', () => {
    describe('when passed a string', () => {
      it('should parse it correctly and returns a milliseconds equivalent', () => {
        const tz = '+08:00';
        expect(utils.normalizeOffsetToMs(tz)).to.equal(8 * 3600 * 1000);
      });
    });
    describe('when passed hours', () => {
      it('should convert them to milliseconds', () => {
        const tz = 12;
        expect(utils.normalizeOffsetToMs(tz)).to.equal(12 * 3600 * 1000);
      });
    });
    describe('when passed seconds', () => {
      it('should convert them to milliseconds', () => {
        const tz = 3600;
        expect(utils.normalizeOffsetToMs(tz)).to.equal(3600000);
      });
    });
  });

  describe('getMsDiffFromUFC', () => {
    it('should correctly return a milliseconds total difference', () => {
      const timezoneOffset = new Date().getTimezoneOffset() / 60;
      // getTimezoneOffset doesn't return timezone given on the date object
      // but the host system timezone
      // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
      const diff = utils.getMsDiffFromUTC('+05:30', new Date('Mon Oct 08 2018 15:38:06 GMT+0800'));
      const expectedDiff = ((timezoneOffset + 5.5) * 3600 * 1000);
      expect(diff).to.equal(expectedDiff);
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

        it('should apply the given offset is UTC', () => {
          const date = new Date('2018-10-08T22:00:00');
          const convertedDate = utils.applyOffset('+00:00', date);
          expect(convertedDate.getHours()).to.equal(22);
          expect(convertedDate.getMinutes()).to.equal(0);
          expect(utils.formatDate(convertedDate)).to.equal('2018-10-08');
        });

        it('should apply the given offset is US/Pacific', () => {
          const date = new Date(2018, 9, 8, 22, 0, 0);
          const convertedDate = utils.applyOffset('-08:00', date);
          expect(convertedDate.getHours()).to.equal(22);
          expect(convertedDate.getMinutes()).to.equal(0);
          expect(utils.formatDate(convertedDate)).to.equal('2018-10-08');
        });

        it('should apply the given offset is US/Eastern', () => {
          const date = new Date(2018, 9, 8, 4, 0, 0);
          const convertedDate = utils.applyOffset('-05:00', date);
          expect(convertedDate.getHours()).to.equal(4);
          expect(convertedDate.getMinutes()).to.equal(0);
          expect(utils.formatDate(convertedDate)).to.equal('2018-10-08');
        });
      },
    );
  });
});
