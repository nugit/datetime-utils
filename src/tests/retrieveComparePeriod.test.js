// @flow

import sinon from 'sinon';
import { retrieveComparePeriod } from '../index';

describe('#retrieveComparePeriod', () => {
  describe('when current date is Mon, 20 Mar 2017', () => {
    let clock;

    beforeAll(() => {
      clock = sinon.useFakeTimers(new Date('2017-03-20').getTime());
    });

    it('should auto compare period for today be the day before yesterday (today is deprecated and replaced by yesterday)', () => {
      const period = retrieveComparePeriod('today', 'auto');
      expect(period.start).toEqual('2017-03-18');
      expect(period.end).toEqual('2017-03-18');
    });

    it('should auto compare period for yesterday be the day before', () => {
      const period = retrieveComparePeriod('yesterday', 'auto');
      expect(period.start).toEqual('2017-03-18');
      expect(period.end).toEqual('2017-03-18');
    });

    it('should auto compare period for last week be two weeks before', () => {
      const period = retrieveComparePeriod('last_week', 'auto');
      expect(period.start).toEqual('2017-03-06');
      expect(period.end).toEqual('2017-03-12');
    });

    it('should auto compare period for this week be two weeks before as today is Monday', () => {
      const period = retrieveComparePeriod('this_week', 'auto');
      expect(period.start).toEqual('2017-03-06');
      expect(period.end).toEqual('2017-03-12');
    });

    it('should auto compare period for last week be two weeks before, implicitly using auto mode', () => {
      const period = retrieveComparePeriod('last_week');
      expect(period.start).toEqual('2017-03-06');
      expect(period.end).toEqual('2017-03-12');
    });

    it('should auto compare period for this month be last month', () => {
      const period = retrieveComparePeriod('this_month', 'auto');
      expect(period.start).toEqual('2017-02-01');
      expect(period.end).toEqual('2017-02-28');
    });

    it('should auto compare period for year_to_date be last year', () => {
      const period = retrieveComparePeriod('year_to_date', 'auto');
      expect(period.start).toEqual('2016-01-01');
      expect(period.end).toEqual('2016-12-31');
    });

    it('should retrieve auto compare period be previous period of same duration', () => {
      const period = retrieveComparePeriod({ start: '2017-03-15', end: '2017-03-19' }, 'auto');
      expect(period.start).toEqual('2017-03-10');
      expect(period.end).toEqual('2017-03-14');
    });

    it('should auto compare period for this quarter be last quarter', () => {
      const period = retrieveComparePeriod('this_quarter', 'auto');
      expect(period.start).toEqual('2016-10-01');
      expect(period.end).toEqual('2016-12-31');
    });

    it('should auto compare period for custom period fitting the whole month be the month before ', () => {
      const period = retrieveComparePeriod({ start: '2017-06-01', end: '2017-06-30' }, 'auto');
      expect(period.start).toEqual('2017-05-01');
      expect(period.end).toEqual('2017-05-31');
    });

    it('should auto compare period not fitting the whole month be a period of the same duration', () => {
      const period = retrieveComparePeriod({ start: '2017-06-01', end: '2017-06-29' }, 'auto');
      expect(period.start).toEqual('2017-05-03');
      expect(period.end).toEqual('2017-05-31');
    });

    it('should auto compare period for fitting the whole year be the year before', () => {
      const period = retrieveComparePeriod({ start: '2016-01-01', end: '2016-12-31' }, 'auto');
      expect(period.start).toEqual('2015-01-01');
      expect(period.end).toEqual('2015-12-31');
    });

    it('should 12_month_ago compare period for this month be the same number of days one year before', () => {
      const period = retrieveComparePeriod('this_month', '12_months_ago');
      expect(period.start).toEqual('2016-03-01');
      expect(period.end).toEqual('2016-03-19');
    });

    it('should 12_month_ago compare period for this quarter be the same number of days one year before', () => {
      const period = retrieveComparePeriod('this_quarter', '12_months_ago');
      expect(period.start).toEqual('2016-01-01');
      expect(period.end).toEqual('2016-03-19');
    });

    it('should return a custom comparison object', () => {
      const comparisonObj = { start: '2017-01-01', end: '2017-01-02' };
      const period = retrieveComparePeriod('this_month', comparisonObj);
      expect(period).toEqual(comparisonObj);
    });

    afterAll(() => {
      clock.restore();
    });
  });
});
