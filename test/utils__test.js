const { expect } = require('chai');

const utils = require('../src/utils');

describe('utils', () => {
  describe('formatDate', () => {
    it('should format a date correctly', () => {
      expect(utils.formatDate(new Date(0))).to.equal('1970-01-01');
    });
  });

  describe('getSubstractionFn', () => {
    context('unit is year', () => {
      it('should return a subYears function', () => {
        const fn = utils.getSubtractionFn('year');
        const rawOutput = fn('2018-02-01', 1);
        expect(utils.formatDate(rawOutput)).to.equal('2017-02-01');
      });
    });
    context('unit is quarter', () => {
      it('should return a subQuarters function', () => {
        const fn = utils.getSubtractionFn('quarter');
        const rawOutput = fn('2018-02-01', 1);
        expect(utils.formatDate(rawOutput)).to.equal('2017-11-01');
      });
    });
    context('unit is month', () => {
      it('should return a subMonths function', () => {
        const fn = utils.getSubtractionFn('month');
        const rawOutput = fn('2018-02-01', 1);
        expect(utils.formatDate(rawOutput)).to.equal('2018-01-01');
      });
    });
    context('unit is week', () => {
      it('should return a subWeeks function', () => {
        const fn = utils.getSubtractionFn('week');
        const rawOutput = fn('2018-02-01', 1);
        expect(utils.formatDate(rawOutput)).to.equal('2018-01-25');
      });
    });
    context('unit is none of the above', () => {
      it('should return a subDays function', () => {
        const fn = utils.getSubtractionFn('whatever');
        const rawOutput = fn('2018-02-01', 1);
        expect(utils.formatDate(rawOutput)).to.equal('2018-01-31');
      });
    });
  });

  describe('parseTimezoneStrToHours', () => {
    context('when passed a positive timezone', () => {
      it('should parse it corectly', () => {
        const tz = '+08:00';
        expect(utils.parseTimezoneStrToHours(tz)).to.equal(8);
      });
    });
    context('when passed a negative timezone', () => {
      it('should parse it corectly', () => {
        const tz = '-12:00';
        expect(utils.parseTimezoneStrToHours(tz)).to.equal(-12);
      });
    });
    context('when passed a complex timezone', () => {
      it('should parse it corectly', () => {
        const tz = '-10:30';
        expect(utils.parseTimezoneStrToHours(tz)).to.equal(-10.5);
      });
    });
  });

  describe('normalizeOffsetToMs', () => {
    context('when passed a string', () => {
      it('should parse it corectly and returns a miliseconds equivalent', () => {
        const tz = '+08:00';
        expect(utils.normalizeOffsetToMs(tz)).to.equal(8 * 3600 * 1000);
      });
    });
    context('when passed hours', () => {
      it('should convert them to miliseconds', () => {
        const tz = 12;
        expect(utils.normalizeOffsetToMs(tz)).to.equal(12 * 3600 * 1000);
      });
    });
    context('when passed seconds', () => {
      it('should convert them to miliseconds', () => {
        const tz = 3600;
        expect(utils.normalizeOffsetToMs(tz)).to.equal(3600000);
      });
    });
  });

  describe('getMsDiffFromUFC', () => {
    it('should correctly return a miliseconds total difference', () => {
      const diff = utils.getMsDiffFromUTC('+05:30', new Date('Mon Oct 08 2018 15:38:06 GMT+0800'));
      const expectedDiff = -((8 - 5.5) * 3600 * 1000);
      expect(diff).to.equal(expectedDiff);
    });
  });

  describe('applyOffset', () => {
    it('should apply the given offset to the given date', () => {
      const newDate = utils.applyOffset('-08:00', 'Mon Oct 08 2018 15:38:06');
      // We slice to get rid of the timezone information, which is dependant
      // on the computer this test runs on
      expect(newDate.slice(0, 24)).to.equal('Sun Oct 07 2018 23:38:06');
    });
  });
});
