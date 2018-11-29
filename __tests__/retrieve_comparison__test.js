const { expect } = require('chai');
const sinon = require('sinon');

const datetimeUtils = require('../src/main').default;

describe('#retrieveComparePeriod', () => {
  describe('when current date is 20/03/2017', () => {
    let clock;
    beforeAll(() => {
      clock = sinon.useFakeTimers(new Date('2017-03-20').getTime());
    });

    it('should auto compare period for today be the day before yesterday (today is deprecated and replaced by yesterday)', () => {
      const period = datetimeUtils.retrieveComparePeriod('today', 'auto');
      expect(period.start).to.equal('2017-03-18');
      expect(period.end).to.equal('2017-03-18');
    });

    it('should auto compare period for yesterday be the day before', () => {
      const period = datetimeUtils.retrieveComparePeriod('yesterday', 'auto');
      expect(period.start).to.equal('2017-03-18');
      expect(period.end).to.equal('2017-03-18');
    });

    it('should auto compare period for last week be two weeks before', () => {
      const period = datetimeUtils.retrieveComparePeriod('last_week', 'auto');
      expect(period.start).to.equal('2017-03-06');
      expect(period.end).to.equal('2017-03-12');
    });

    it('should auto compare period for this week be two weeks before as today is Monday', () => {
      const period = datetimeUtils.retrieveComparePeriod('this_week', 'auto');
      expect(period.start).to.equal('2017-03-06');
      expect(period.end).to.equal('2017-03-12');
    });

    it('should auto compare period for last week be two weeks before, implicitly using auto mode', () => {
      const period = datetimeUtils.retrieveComparePeriod('last_week');
      expect(period.start).to.equal('2017-03-06');
      expect(period.end).to.equal('2017-03-12');
    });

    it('should auto compare period for this month be last month', () => {
      const period = datetimeUtils.retrieveComparePeriod('this_month', 'auto');
      expect(period.start).to.equal('2017-02-01');
      expect(period.end).to.equal('2017-02-28');
    });

    it('should auto compare period for year_to_date be last year', () => {
      const period = datetimeUtils.retrieveComparePeriod('year_to_date', 'auto');
      expect(period.start).to.equal('2016-01-01');
      expect(period.end).to.equal('2016-12-31');
    });

    it('should auto compare period for [15/03/2017 - 19/03/2017] be [10/03/2017 - 14/03/2017] (previous period of same duration)', () => {
      const period = datetimeUtils.retrieveComparePeriod({ start: '2017-03-15', end: '2017-03-19' }, 'auto');
      expect(period.start).to.equal('2017-03-10');
      expect(period.end).to.equal('2017-03-14');
    });

    it('should auto compare period for this quarter be last quarter', () => {
      const period = datetimeUtils.retrieveComparePeriod('this_quarter', 'auto');
      expect(period.start).to.equal('2016-10-01');
      expect(period.end).to.equal('2016-12-31');
    });

    it('should auto compare period for [01/06/2017 - 30/06/2017] (fit the whole month) be the month before ', () => {
      const period = datetimeUtils.retrieveComparePeriod({ start: '2017-06-01', end: '2017-06-30' }, 'auto');
      expect(period.start).to.equal('2017-05-01');
      expect(period.end).to.equal('2017-05-31');
    });

    it('should auto compare period for [01/06/2017 - 29/06/2017] (don\'t fit the whole month) be a period of the same duration', () => {
      const period = datetimeUtils.retrieveComparePeriod({ start: '2017-06-01', end: '2017-06-29' }, 'auto');
      expect(period.start).to.equal('2017-05-03');
      expect(period.end).to.equal('2017-05-31');
    });

    it('should auto compare period for [01/01/2016 - 31/12/2016] (fit the whole year) be the year before', () => {
      const period = datetimeUtils.retrieveComparePeriod({ start: '2016-01-01', end: '2016-12-31' }, 'auto');
      expect(period.start).to.equal('2015-01-01');
      expect(period.end).to.equal('2015-12-31');
    });

    it('should 12_month_ago compare period for this month be the same month of the previous year', () => {
      const period = datetimeUtils.retrieveComparePeriod('this_month', '12_months_ago');
      expect(period.start).to.equal('2016-03-01');
      expect(period.end).to.equal('2016-03-19'); // to be confirmed
    });

    it('should return a custom comparison object', () => { // What is the expected behavior?!
      const comparisonObj = { start: '2017-01-01', end: '2017-01-02' };
      const period = datetimeUtils.retrieveComparePeriod('this_month', comparisonObj);
      expect(period).to.eql(comparisonObj);
    });

    afterAll(() => {
      clock.restore();
    });
  });
});
