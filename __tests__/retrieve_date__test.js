import { expect } from 'chai';
import sinon from 'sinon';
import datetimeUtils from '../src/index';

describe('#retrievePeriod', () => {
  describe('without baseDate', () => {
    describe('when current date is 20/03/2017', () => {
      let clock;
      beforeAll(() => {
        clock = sinon.useFakeTimers(new Date('2017-03-20').getTime());
      });

      it('should today period be 19/03/2017 (interpreted as yesterday, as today is deprecated)', () => {
        const period = datetimeUtils.retrievePeriod('today');
        expect(period.start).to.equal('2017-03-19');
        expect(period.end).to.equal('2017-03-19');
      });

      it('should yesterday period be 19/03/2017', () => {
        const period = datetimeUtils.retrievePeriod('yesterday');
        expect(period.start).to.equal('2017-03-19');
        expect(period.end).to.equal('2017-03-19');
      });

      it('should last_week period be [13/03/2017 - 19/03/2017]', () => {
        const period = datetimeUtils.retrievePeriod('last_week');
        expect(period.start).to.equal('2017-03-13');
        expect(period.end).to.equal('2017-03-19');
      });

      it('should this_week period be [13/03/2017 - 19/03/2017] as today is Monday', () => {
        const period = datetimeUtils.retrievePeriod('this_week');
        expect(period.start).to.equal('2017-03-13');
        expect(period.end).to.equal('2017-03-19');
      });

      it('should this_month period be [01/03/2017 - 19/03/2017]', () => {
        const period = datetimeUtils.retrievePeriod('this_month');
        expect(period.start).to.equal('2017-03-01');
        expect(period.end).to.equal('2017-03-19');
      });

      it('should last_month period be [01/02/2017 - 28/02/2017]', () => {
        const period = datetimeUtils.retrievePeriod('last_month');
        expect(period.start).to.equal('2017-02-01');
        expect(period.end).to.equal('2017-02-28');
      });

      it('should this_quarter period be [01/01/2017 - 19/03/2017]', () => {
        const period = datetimeUtils.retrievePeriod('this_quarter');
        expect(period.start).to.equal('2017-01-01');
        expect(period.end).to.equal('2017-03-19');
      });

      it('should last_quarter period be [01/10/2016 - 31/12/2016]', () => {
        const period = datetimeUtils.retrievePeriod('last_quarter');
        expect(period.start).to.equal('2016-10-01');
        expect(period.end).to.equal('2016-12-31');
      });

      it('should this_year period be [01/01/2017 - 19/03/2017]', () => {
        const period = datetimeUtils.retrievePeriod('this_year');
        expect(period.start).to.equal('2017-01-01');
        expect(period.end).to.equal('2017-03-19');
      });

      it('should last_year period be [01/01/2016 - 31/12/2016]', () => {
        const period = datetimeUtils.retrievePeriod('last_year');
        expect(period.start).to.equal('2016-01-01');
        expect(period.end).to.equal('2016-12-31');
      });

      it('should year_to_date period be [01/01/2017 - 19/03/2017] (deprecated and interpreted as this_year)', () => {
        const period = datetimeUtils.retrievePeriod('year_to_date');
        expect(period.start).to.equal('2017-01-01');
        expect(period.end).to.equal('2017-03-19');
      });

      it('should all_time period be from 01/01/2015 to yesterday', () => {
        const period = datetimeUtils.retrievePeriod('all_time');
        expect(period.start).to.equal('2015-01-01');
        expect(period.end).to.equal('2017-03-19');
      });

      it('should last_3_days period be [17/03/2017 - 19/03/2017]', () => {
        const period = datetimeUtils.retrievePeriod('last_3_days');
        expect(period.start).to.equal('2017-03-17');
        expect(period.end).to.equal('2017-03-19');
        const period2 = datetimeUtils.retrievePeriod('last3days');
        expect(period2.start).to.equal('2017-03-17');
        expect(period2.end).to.equal('2017-03-19');
      });

      it('should last_3_weeks period be [27/02/2017 - 19/03/2017]', () => {
        const period = datetimeUtils.retrievePeriod('last_3_weeks');
        expect(period.start).to.equal('2017-02-27');
        expect(period.end).to.equal('2017-03-19');
        const period2 = datetimeUtils.retrievePeriod('last3weeks');
        expect(period2.start).to.equal('2017-02-27');
        expect(period2.end).to.equal('2017-03-19');
      });
      it('should last_3_months period be [01/12/2016 - 28/02/2017]', () => {
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

      it('should last_2_quarters period be [01/07/2016 - 31/12/2016]', () => {
        const period = datetimeUtils.retrievePeriod('last_2_quarters');
        expect(period).to.deep.equal({
          start: '2016-07-01',
          end: '2016-12-31',
        });
      });

      it('should last_2_years period be [01/01/2015 - 31/12/2016]', () => {
        const period = datetimeUtils.retrievePeriod('last_2_years');
        expect(period).to.deep.equal({
          start: '2015-01-01',
          end: '2016-12-31',
        });
      });

      it('should last_3_days_including_current period be [17/03/2017 - 19/03/2017] (deprecated in favor of last_3_days)', () => {
        const period = datetimeUtils.retrievePeriod('last_3_days_including_current');
        expect(period.start).to.equal('2017-03-17');
        expect(period.end).to.equal('2017-03-19');
      });

      it('should last_2_weeks_including_current period be [06/03/2017 - 19/03/2017]', () => {
        const period = datetimeUtils.retrievePeriod('last_2_weeks_including_current');
        expect(period.start).to.equal('2017-03-06');
        expect(period.end).to.equal('2017-03-19');
      });

      it('should last_1_quarter_including_current period be [01/01/2017 - 19/03/2017]', () => {
        const period = datetimeUtils.retrievePeriod('last_1_quarter_including_current');
        expect(period.start).to.equal('2017-01-01');
        expect(period.end).to.equal('2017-03-19');
      });

      it('should last_1_year_including_current period be [01/01/2017 - 19/03/2017]', () => {
        const period = datetimeUtils.retrievePeriod('last_1_year_including_current');
        expect(period).to.deep.equal({
          start: '2017-01-01',
          end: '2017-03-19',
        });
      });

      it('should 2014-01-01_to_yesterday period be [01/01/2014 - 19/03/2017]', () => {
        const period = datetimeUtils.retrievePeriod('2014-01-01_to_yesterday');
        expect(period).to.eql({
          start: '2014-01-01',
          end: '2017-03-19',
        });
      });

      afterAll(() => {
        clock.restore();
      });
    });

    describe('with utc baseDate to 1st of january 2015, 12:00am', () => {
      const january2015 = 1420070400000;

      it('should today period be [31/12/2014 - 31/12/2014] (interpreted as yesterday, as today is deprecated)', () => {
        const period = datetimeUtils.retrievePeriod('today', january2015);
        expect(period.start).to.equal('2014-12-31');
        expect(period.end).to.equal('2014-12-31');
      });

      it('should yesterday period be [31/12/2014 - 31/12/2014]', () => {
        const period = datetimeUtils.retrievePeriod('today', january2015);
        expect(period.start).to.equal('2014-12-31');
        expect(period.end).to.equal('2014-12-31');
      });

      it('should this_week period be [29/12/2014 - 31/12/2014]', () => {
        const period = datetimeUtils.retrievePeriod('this_week', january2015);
        expect(period.start).to.equal('2014-12-29');
        expect(period.end).to.equal('2014-12-31');
      });

      it('should last_week period be [22/12/2014 - 28/12/2014]', () => {
        const period = datetimeUtils.retrievePeriod('last_week', january2015);
        expect(period.start).to.equal('2014-12-22');
        expect(period.end).to.equal('2014-12-28');
      });

      it('should this_month period be [01/12/2014 - 31/12/2014] as today is first day of month', () => {
        const period = datetimeUtils.retrievePeriod('this_month', january2015);
        expect(period.start).to.equal('2014-12-01');
        expect(period.end).to.equal('2014-12-31');
      });

      it('should last_month period be [01/12/2014 - 31/12/2014]', () => {
        const period = datetimeUtils.retrievePeriod('last_month', january2015);
        expect(period.start).to.equal('2014-12-01');
        expect(period.end).to.equal('2014-12-31');
      });

      it('should this_quarter period be [01/10/2014 - 31/12/2014] as today is first day of quarter', () => {
        const period = datetimeUtils.retrievePeriod('this_quarter', january2015);
        expect(period.start).to.equal('2014-10-01');
        expect(period.end).to.equal('2014-12-31');
      });

      it('should last_quarter period be [01/10/2014 - 31/12/2014]', () => {
        const period = datetimeUtils.retrievePeriod('last_quarter', january2015);
        expect(period.start).to.equal('2014-10-01');
        expect(period.end).to.equal('2014-12-31');
      });

      it('should this_year period be [01/01/2014 - 31/12/2014] as today is first day of year', () => {
        const period = datetimeUtils.retrievePeriod('this_year', january2015);
        expect(period.start).to.equal('2014-01-01');
        expect(period.end).to.equal('2014-12-31');
      });

      it('should last_year period be [01/01/2014 - 31/12/2014]', () => {
        const period = datetimeUtils.retrievePeriod('last_year', january2015);
        expect(period.start).to.equal('2014-01-01');
        expect(period.end).to.equal('2014-12-31');
      });

      it('should year_to_date period be[01/01/2014 - 31/12/2014] (deprecated and interpreted as this_year)', () => {
        const period = datetimeUtils.retrievePeriod('year_to_date', january2015);
        expect(period.start).to.equal('2014-01-01');
        expect(period.end).to.equal('2014-12-31');
      });

      it('should unknown period throw an Error', () => {
        const fn = () => datetimeUtils.retrievePeriod('whatever', january2015);
        expect(fn).to.throw('Unrecognized date range: whatever');
      });

      it('should last_2_weeks_including_current period be [22/12/2014 - 31/12/2014]', () => {
        const period = datetimeUtils.retrievePeriod('last_2_weeks_including_current', january2015);
        expect(period).to.deep.equal({
          start: '2014-12-22',
          end: '2014-12-31',
        });
      });

      it('should last_1_quarter_including_current period be [01/10/2017 - 31/12/2017]', () => {
        const period = datetimeUtils.retrievePeriod('last_1_quarter_including_current', january2015);
        expect(period).to.deep.equal({
          start: '2014-10-01',
          end: '2014-12-31',
        });
      });

      it('should last_1_year_including_current period be [01/01/2014 - 31/12/2014]', () => {
        const period = datetimeUtils.retrievePeriod('last_1_year_including_current', january2015);
        expect(period.start).to.equal('2014-01-01');
        expect(period.end).to.equal('2014-12-31');
      });

      it('should 2014-01-01_to_yesterday period be [01/01/2014 - 31/12/2014]', () => {
        const period = datetimeUtils.retrievePeriod('2014-01-01_to_yesterday', january2015);
        expect(period).to.eql({
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
            it('should yesterday period be 30/12/2014', () => {
              const period = datetimeUtils.retrievePeriod('yesterday', january2015, offset);
              expect(period.start).to.equal('2014-12-30');
              expect(period.end).to.equal('2014-12-30');
            });

            it('should last_week period be [22/12/2014 - 28/12/2014]', () => {
              const period = datetimeUtils.retrievePeriod('last_week', january2015, offset);
              expect(period.start).to.equal('2014-12-22');
              expect(period.end).to.equal('2014-12-28');
            });

            it('should last_year period be [01/01/2013 - 31/12/2013]', () => {
              const period = datetimeUtils.retrievePeriod('last_year', january2015, offset);
              expect(period.start).to.equal('2013-01-01');
              expect(period.end).to.equal('2013-12-31');
            });

            it('should this_year period be [01/01/2013 - 30/12/2014]', () => {
              const period = datetimeUtils.retrievePeriod('this_year', january2015, offset);
              expect(period.start).to.equal('2014-01-01');
              expect(period.end).to.equal('2014-12-30');
            });
          });
        });
      });
    });
  });
});
