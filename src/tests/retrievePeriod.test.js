// @flow

import sinon from 'sinon';
import { retrievePeriod } from '../index';

describe('#retrievePeriod', () => {
  describe('without baseDate', () => {
    describe('when current date is Mon, 20 Mar 2017', () => {
      let clock;

      beforeAll(() => {
        clock = sinon.useFakeTimers(new Date('2017-03-20').getTime());
      });

      it('should today period be interpreted as yesterday (today is deprecated)', () => {
        const period = retrievePeriod('today');
        expect(period.start).toEqual('2017-03-19');
        expect(period.end).toEqual('2017-03-19');
      });

      it('should retrieve yesterday period', () => {
        const period = retrievePeriod('yesterday');
        expect(period.start).toEqual('2017-03-19');
        expect(period.end).toEqual('2017-03-19');
      });

      it('should retrieve last_week period', () => {
        const period = retrievePeriod('last_week');
        expect(period.start).toEqual('2017-03-13');
        expect(period.end).toEqual('2017-03-19');
      });

      it('should this_week period be same as last_week as today is Monday', () => {
        const period = retrievePeriod('this_week');
        expect(period.start).toEqual('2017-03-13');
        expect(period.end).toEqual('2017-03-19');
      });

      it('should retrieve this_month period', () => {
        const period = retrievePeriod('this_month');
        expect(period.start).toEqual('2017-03-01');
        expect(period.end).toEqual('2017-03-19');
      });

      it('should retrieve last_month period', () => {
        const period = retrievePeriod('last_month');
        expect(period.start).toEqual('2017-02-01');
        expect(period.end).toEqual('2017-02-28');
      });

      it('should retrieve this_quarter', () => {
        const period = retrievePeriod('this_quarter');
        expect(period.start).toEqual('2017-01-01');
        expect(period.end).toEqual('2017-03-19');
      });

      it('should retrieve last_quarter period', () => {
        const period = retrievePeriod('last_quarter');
        expect(period.start).toEqual('2016-10-01');
        expect(period.end).toEqual('2016-12-31');
      });

      it('should retrieve this_year period', () => {
        const period = retrievePeriod('this_year');
        expect(period.start).toEqual('2017-01-01');
        expect(period.end).toEqual('2017-03-19');
      });

      it('should retrieve last_year period', () => {
        const period = retrievePeriod('last_year');
        expect(period.start).toEqual('2016-01-01');
        expect(period.end).toEqual('2016-12-31');
      });

      it('should year_to_date period be interpreted as this_year', () => {
        const period = retrievePeriod('year_to_date');
        expect(period.start).toEqual('2017-01-01');
        expect(period.end).toEqual('2017-03-19');
      });

      it('should all_time period be from 01/01/2015 to yesterday', () => {
        const period = retrievePeriod('all_time');
        expect(period.start).toEqual('2015-01-01');
        expect(period.end).toEqual('2017-03-19');
      });

      it('should retrieve last_3_days', () => {
        const period = retrievePeriod('last_3_days');
        expect(period.start).toEqual('2017-03-17');
        expect(period.end).toEqual('2017-03-19');
        const period2 = retrievePeriod('last3days');
        expect(period2.start).toEqual('2017-03-17');
        expect(period2.end).toEqual('2017-03-19');
      });

      it('should retrieve last_3_weeks', () => {
        const period = retrievePeriod('last_3_weeks');
        expect(period.start).toEqual('2017-02-27');
        expect(period.end).toEqual('2017-03-19');
        const period2 = retrievePeriod('last3weeks');
        expect(period2.start).toEqual('2017-02-27');
        expect(period2.end).toEqual('2017-03-19');
      });

      it('should retrieve last_3_months period', () => {
        const period = retrievePeriod('last_3_months');
        expect(period).toEqual({
          start: '2016-12-01',
          end: '2017-02-28',
        });
        const period2 = retrievePeriod('last3months');
        expect(period2).toEqual({
          start: '2016-12-01',
          end: '2017-02-28',
        });
      });

      it('should retrieve last_2_quarters period', () => {
        const period = retrievePeriod('last_2_quarters');
        expect(period).toEqual({
          start: '2016-07-01',
          end: '2016-12-31',
        });
      });

      it('should retrieve last_2_years period', () => {
        const period = retrievePeriod('last_2_years');
        expect(period).toEqual({
          start: '2015-01-01',
          end: '2016-12-31',
        });
      });

      it('should retrieve last_3_days_including_current period (deprecated in favor of last_3_days)', () => {
        const period = retrievePeriod('last_3_days_including_current');
        expect(period.start).toEqual('2017-03-17');
        expect(period.end).toEqual('2017-03-19');
      });

      it('should retrieve last_2_weeks_including_current period', () => {
        const period = retrievePeriod('last_2_weeks_including_current');
        expect(period.start).toEqual('2017-03-06');
        expect(period.end).toEqual('2017-03-19');
      });

      it('should retrieve last_1_quarter_including_current period', () => {
        const period = retrievePeriod('last_1_quarter_including_current');
        expect(period.start).toEqual('2017-01-01');
        expect(period.end).toEqual('2017-03-19');
      });

      it('should retrieve last_1_year_including_current period', () => {
        const period = retrievePeriod('last_1_year_including_current');
        expect(period).toEqual({
          start: '2017-01-01',
          end: '2017-03-19',
        });
      });

      it('should 2014-01-01_to_yesterday period', () => {
        const period = retrievePeriod('2014-01-01_to_yesterday');
        expect(period).toEqual({
          start: '2014-01-01',
          end: '2017-03-19',
        });
      });

      afterAll(() => {
        clock.restore();
      });
    });

    describe('with utc baseDate to Thu, 01 Jan 2015, 00:00:00', () => {
      const january2015 = 1420070400000;

      it('should today period be interpreted as yesterday (as today is deprecated)', () => {
        const period = retrievePeriod('today', january2015);
        expect(period.start).toEqual('2014-12-31');
        expect(period.end).toEqual('2014-12-31');
      });

      it('should retrieve yesterday period', () => {
        const period = retrievePeriod('today', january2015);
        expect(period.start).toEqual('2014-12-31');
        expect(period.end).toEqual('2014-12-31');
      });

      it('should retrieve this_week period', () => {
        const period = retrievePeriod('this_week', january2015);
        expect(period.start).toEqual('2014-12-29');
        expect(period.end).toEqual('2014-12-31');
      });

      it('should retrieve last_week period', () => {
        const period = retrievePeriod('last_week', january2015);
        expect(period.start).toEqual('2014-12-22');
        expect(period.end).toEqual('2014-12-28');
      });

      it('should this_month period be last_month as today is first day of the month', () => {
        const period = retrievePeriod('this_month', january2015);
        expect(period.start).toEqual('2014-12-01');
        expect(period.end).toEqual('2014-12-31');
      });

      it('should retrieve last_month period', () => {
        const period = retrievePeriod('last_month', january2015);
        expect(period.start).toEqual('2014-12-01');
        expect(period.end).toEqual('2014-12-31');
      });

      it('should this_quarter period be last_quarter as today is first day of quarter', () => {
        const period = retrievePeriod('this_quarter', january2015);
        expect(period.start).toEqual('2014-10-01');
        expect(period.end).toEqual('2014-12-31');
      });

      it('should retrieve last_quarter period', () => {
        const period = retrievePeriod('last_quarter', january2015);
        expect(period.start).toEqual('2014-10-01');
        expect(period.end).toEqual('2014-12-31');
      });

      it('should this_year period be last_year as today is first day of year', () => {
        const period = retrievePeriod('this_year', january2015);
        expect(period.start).toEqual('2014-01-01');
        expect(period.end).toEqual('2014-12-31');
      });

      it('should retrieve last_year period', () => {
        const period = retrievePeriod('last_year', january2015);
        expect(period.start).toEqual('2014-01-01');
        expect(period.end).toEqual('2014-12-31');
      });

      it('should year_to_date period be last_year (deprecated and interpreted as this_year)', () => {
        const period = retrievePeriod('year_to_date', january2015);
        expect(period.start).toEqual('2014-01-01');
        expect(period.end).toEqual('2014-12-31');
      });

      it('should unknown period throw an Error', () => {
        const fn = () => retrievePeriod('whatever', january2015);
        expect(fn).toThrow('Unrecognized date range: whatever');
      });

      it('should retrieve last_2_weeks_including_current period', () => {
        const period = retrievePeriod('last_2_weeks_including_current', january2015);
        expect(period).toEqual({
          start: '2014-12-22',
          end: '2014-12-31',
        });
      });

      it('should retrieve last_1_quarter_including_current period', () => {
        const period = retrievePeriod('last_1_quarter_including_current', january2015);
        expect(period).toEqual({
          start: '2014-10-01',
          end: '2014-12-31',
        });
      });

      it('should retrieve last_1_year_including_current period', () => {
        const period = retrievePeriod('last_1_year_including_current', january2015);
        expect(period.start).toEqual('2014-01-01');
        expect(period.end).toEqual('2014-12-31');
      });

      it('should retrieve 2014-01-01_to_yesterday period', () => {
        const period = retrievePeriod('2014-01-01_to_yesterday', january2015);
        expect(period).toEqual({
          start: '2014-01-01',
          end: '2014-12-31',
        });
      });

      describe('with offset minus 1 hour', () => {
        [
          { offset: -1, context: 'when offset -1 hours' },
          { offset: -3600, context: 'when offset -3600 seconds' },
          { offset: '-01:00', context: 'when offset -1 hour as string' },
        ].forEach(({ offset, context }) => {
          describe(context, () => {
            it('should retrieve yesterday period', () => {
              const period = retrievePeriod('yesterday', january2015, offset);
              expect(period.start).toEqual('2014-12-30');
              expect(period.end).toEqual('2014-12-30');
            });

            it('should retrieve last_week period', () => {
              const period = retrievePeriod('last_week', january2015, offset);
              expect(period.start).toEqual('2014-12-22');
              expect(period.end).toEqual('2014-12-28');
            });

            it('should retrieve last_year period', () => {
              const period = retrievePeriod('last_year', january2015, offset);
              expect(period.start).toEqual('2013-01-01');
              expect(period.end).toEqual('2013-12-31');
            });

            it('should retrieve this_year period', () => {
              const period = retrievePeriod('this_year', january2015, offset);
              expect(period.start).toEqual('2014-01-01');
              expect(period.end).toEqual('2014-12-30');
            });
          });
        });
      });
    });
  });
});
