const { expect } = require('chai');
const sinon = require('sinon');

const datetimeUtils = require('../src/main').default;

describe('should retrieve period string', () => {
  describe('without baseDate', () => {
    let clock;
    beforeAll(() => {
      clock = sinon.useFakeTimers(new Date('2017-03-20').getTime());
    });

    it('should retrieve today', () => {
      const period = datetimeUtils.retrievePeriod('today');
      expect(period.start).to.equal('2017-03-20');
      expect(period.end).to.equal('2017-03-20');
    });

    it('should retrieve yesterday', () => {
      const period = datetimeUtils.retrievePeriod('yesterday');
      expect(period.start).to.equal('2017-03-19');
      expect(period.end).to.equal('2017-03-19');
    });

    it('should retrieve year_to_date', () => {
      const period = datetimeUtils.retrievePeriod('year_to_date');
      expect(period.start).to.equal('2017-01-01');
      expect(period.end).to.equal('2017-03-20');
    });

    it('should retrieve all_time', () => {
      const period = datetimeUtils.retrievePeriod('all_time');
      expect(period.start).to.equal('2014-03-20');
      expect(period.end).to.equal('2017-03-20');
    });

    it('should retrieve last_week', () => {
      const period = datetimeUtils.retrievePeriod('last_week');
      expect(period.start).to.equal('2017-03-13');
      expect(period.end).to.equal('2017-03-19');
    });

    it('should retrieve last_month', () => {
      const period = datetimeUtils.retrievePeriod('last_month');
      expect(period.start).to.equal('2017-02-01');
      expect(period.end).to.equal('2017-02-28');
    });

    it('should retrieve last_quarter', () => {
      const period = datetimeUtils.retrievePeriod('last_quarter');
      expect(period.start).to.equal('2016-10-01');
      expect(period.end).to.equal('2016-12-31');
    });

    it('should retrieve last_year', () => {
      const period = datetimeUtils.retrievePeriod('last_year');
      expect(period.start).to.equal('2016-01-01');
      expect(period.end).to.equal('2016-12-31');
    });

    it('should retrieve last_3_days', () => {
      const period = datetimeUtils.retrievePeriod('last_3_days');
      expect(period.start).to.equal('2017-03-17');
      expect(period.end).to.equal('2017-03-19');
      const period2 = datetimeUtils.retrievePeriod('last3days');
      expect(period2.start).to.equal('2017-03-17');
      expect(period2.end).to.equal('2017-03-19');
    });

    it('should retrieve last_3_weeks', () => {
      const period = datetimeUtils.retrievePeriod('last_3_weeks');
      expect(period.start).to.equal('2017-02-27');
      expect(period.end).to.equal('2017-03-19');
      const period2 = datetimeUtils.retrievePeriod('last3weeks');
      expect(period2.start).to.equal('2017-02-27');
      expect(period2.end).to.equal('2017-03-19');
    });
    it('should retrieve last_3_months', () => {
      const period = datetimeUtils.retrievePeriod('last_3_months');
      expect(period).to.deep.equal({
        start: '2016-12-01',
        end: '2017-02-28',
      });
      const period2 = datetimeUtils.retrievePeriod('last3months');
      expect(period2).to.deep.equal({
        start: '2016-12-01',
        end: '2017-02-28',
      });
    });
    it('should retrieve last_2_quarters', () => {
      const period = datetimeUtils.retrievePeriod('last_2_quarters');
      expect(period).to.deep.equal({
        start: '2016-07-01',
        end: '2016-09-30',
      });
    });

    it('should retrieve last_2_years', () => {
      const period = datetimeUtils.retrievePeriod('last_2_years');
      expect(period).to.deep.equal({
        start: '2015-01-01',
        end: '2016-12-31',
      });
    });

    it('should retrieve last_3_days_including_current', () => {
      const period = datetimeUtils.retrievePeriod('last_3_days_including_current');
      expect(period).to.deep.equal({
        start: '2017-03-18',
        end: '2017-03-20',
      });
    });

    it('should retrieve last_2_weeks_including_current', () => {
      const period = datetimeUtils.retrievePeriod('last_2_weeks_including_current');
      expect(period).to.deep.equal({
        start: '2017-03-13',
        end: '2017-03-26',
      });
    });

    it('should retrieve last_1_quarter_including_current', () => {
      const period = datetimeUtils.retrievePeriod('last_1_quarter_including_current');
      expect(period).to.deep.equal({
        start: '2017-01-01',
        end: '2017-03-31',
      });
    });

    it('should retrieve last_1_year_including_current', () => {
      const period = datetimeUtils.retrievePeriod('last_1_year_including_current');
      expect(period).to.deep.equal({
        start: '2017-01-01',
        end: '2017-12-31',
      });
    });

    afterAll(() => {
      clock.restore();
    });
  });

  describe('with utc baseDate to 1st of january 2015, 12:00am', () => {
    const january2015 = 1420070400000;
    it('should retrieve last_month', () => {
      const period = datetimeUtils.retrievePeriod('last_month', january2015);
      expect(period.start).to.equal('2014-12-01');
      expect(period.end).to.equal('2014-12-31');
    });

    it('should retrieve this_month', () => {
      const period = datetimeUtils.retrievePeriod('this_month', january2015);
      expect(period.start).to.equal('2015-01-01');
      expect(period.end).to.equal('2015-01-01');
    });

    it('should retrieve this_month', () => {
      const period = datetimeUtils.retrievePeriod('this_year', january2015);
      expect(period.start).to.equal('2015-01-01');
      expect(period.end).to.equal('2015-12-31');
    });

    it('should retrieve yesterday', () => {
      const period = datetimeUtils.retrievePeriod('yesterday', january2015);
      expect(period.start).to.equal('2014-12-31');
      expect(period.end).to.equal('2014-12-31');
    });

    it('should retrieve yesterday', () => {
      const fn = () => datetimeUtils.retrievePeriod('whatever', january2015);
      expect(fn).to.throw('Unrecognized date range: whatever');
    });

    it('should retrieve yesterday', () => {
      const period = datetimeUtils.retrievePeriod('2014-01-01_to_yesterday', january2015);
      expect(period).to.eql({
        start: '2014-01-01',
        end: '2014-12-31',
      });
    });

    describe('with offset minus 1 hour', () => {
      describe('when offset in hours', () => {
        const offset = -1;
        describe('when asking for today', () => {
          it('should retrieve yesterday', () => {
            const period = datetimeUtils.retrievePeriod('today', january2015, offset);
            expect(period.start).to.equal('2014-12-31');
            expect(period.end).to.equal('2014-12-31');
          });
        });
        describe('when asking for yesterday', () => {
          it('should retrieve 2 days before', () => {
            const period = datetimeUtils.retrievePeriod('yesterday', january2015, offset);
            expect(period.start).to.equal('2014-12-30');
            expect(period.end).to.equal('2014-12-30');
          });
        });
      });
      describe('when offset in seconds', () => {
        const offset = -3600;
        describe('when asking for today', () => {
          it('should retrieve yesterday', () => {
            const period = datetimeUtils.retrievePeriod('today', january2015, offset);
            expect(period.start).to.equal('2014-12-31');
            expect(period.end).to.equal('2014-12-31');
          });
        });
        describe('when asking for yesterday', () => {
          it('should retrieve 2 days before', () => {
            const period = datetimeUtils.retrievePeriod('yesterday', january2015, offset);
            expect(period.start).to.equal('2014-12-30');
            expect(period.end).to.equal('2014-12-30');
          });
        });
      });
      describe('when offset is a string', () => {
        const offset = '-01:00';
        describe('when asking for today', () => {
          it('should retrieve yesterday', () => {
            const period = datetimeUtils.retrievePeriod('today', january2015, offset);
            expect(period.start).to.equal('2014-12-31');
            expect(period.end).to.equal('2014-12-31');
          });
        });
        describe('when asking for yesterday', () => {
          it('should retrieve 2 days before', () => {
            const period = datetimeUtils.retrievePeriod('yesterday', january2015, offset);
            expect(period.start).to.equal('2014-12-30');
            expect(period.end).to.equal('2014-12-30');
          });
        });
      });
    });
  });
});
