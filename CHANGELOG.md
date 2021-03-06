# [5.1.0](https://github.com/nugit/datetime-utils/compare/v5.0.3...v5.1.0) (2020-10-27)


### Bug Fixes

* add missing src in npm package ([17a09bb](https://github.com/nugit/datetime-utils/commit/17a09bb930ede84d42e9443a6e3e878de4e111a3))
* address PR comments ([3879101](https://github.com/nugit/datetime-utils/commit/3879101e882f398705c0126e2eed3eb5c2aad6b5))
* changelog ([ff9f58d](https://github.com/nugit/datetime-utils/commit/ff9f58d0e9f6506a7335f68c16273f16015805b1))


### Features

* add flow support ([f061934](https://github.com/nugit/datetime-utils/commit/f061934b67630a798d2b209effab18f3dee9f2f9))
* upgrade dependencies ([5903575](https://github.com/nugit/datetime-utils/commit/5903575f2e611eafbfde7df1f627760b31629c2e))

# [5.1.0-beta.1](https://github.com/nugit/datetime-utils/compare/v5.0.2...v5.1.0-beta.1) (2020-10-20)


### Bug Fixes

* add missing src in npm package ([17a09bb](https://github.com/nugit/datetime-utils/commit/17a09bb930ede84d42e9443a6e3e878de4e111a3))
* address PR comments ([3879101](https://github.com/nugit/datetime-utils/commit/3879101e882f398705c0126e2eed3eb5c2aad6b5))
* changelog ([ff9f58d](https://github.com/nugit/datetime-utils/commit/ff9f58d0e9f6506a7335f68c16273f16015805b1))


### Features

* add flow support ([f061934](https://github.com/nugit/datetime-utils/commit/f061934b67630a798d2b209effab18f3dee9f2f9))
* upgrade dependencies ([5903575](https://github.com/nugit/datetime-utils/commit/5903575f2e611eafbfde7df1f627760b31629c2e))

# Unreleased

## Add

- FlowJs support

## Fix

- `parseISO` should returns `Date` when parsing `number`

## Chore

- Use semantic release

# 5.0.3 -- 19/06/2020

## Chore

- Upgrade dependencies https://github.com/nugit/datetime-utils/pull/683
- Update dependabot config https://github.com/nugit/datetime-utils/pull/688

# 5.0.2 -- 18/03/2020

## Chore

- Upgrade dependencies https://github.com/nugit/datetime-utils/pull/299

# 5.0.1 -- 16/10/2019

## Update

- Dependencies:
  - https://github.com/nugit/datetime-utils/pull/20
  - https://github.com/nugit/datetime-utils/pull/22
  - https://github.com/nugit/datetime-utils/pull/21
  - https://github.com/nugit/datetime-utils/pull/28
  - https://github.com/nugit/datetime-utils/pull/26
  - https://github.com/nugit/datetime-utils/pull/25
  - https://github.com/nugit/datetime-utils/pull/27
  - https://github.com/nugit/datetime-utils/pull/24
  - https://github.com/nugit/datetime-utils/pull/23
  - https://github.com/nugit/datetime-utils/pull/29
  - https://github.com/nugit/datetime-utils/pull/33
  - https://github.com/nugit/datetime-utils/pull/31
  - https://github.com/nugit/datetime-utils/pull/30
  - https://github.com/nugit/datetime-utils/pull/34
  - https://github.com/nugit/datetime-utils/pull/35
  - https://github.com/nugit/datetime-utils/pull/37
  - https://github.com/nugit/datetime-utils/pull/36
  - https://github.com/nugit/datetime-utils/pull/41
  - https://github.com/nugit/datetime-utils/pull/40
  - https://github.com/nugit/datetime-utils/pull/42

## Misc

- Setup Dependabot https://github.com/nugit/datetime-utils/pull/43

# 5.0.0 -- 31/10/2019

> This version updates `date-fns` to its latest major version 2.6.0. This fixes a bug that does not parse daylight savings dates properly for Eastern Hemisphere regions (e.g. Australia and New Zealand). The update will not allow `date` to be passed as a string type anymore. Thus, helper methods have been created to still support it.

## Update

- Dependencies to their latest versions
- CircleCI node version to 12.10
- CircleCI configs to support auto publishing based on tags

## Change

- Named exports instead using of default exports

## Add

- Helper methods to still support `date` as a string type

# 4.0.0 -- 13/12/2018

> This version try to differentiate `period` and `range` concepts. The first one in a string representing the period and range is an object representing the actual date range the given period is equivalent given a base date. So `range` is the interpretation of the `period`.

## Deprecates

- `year_to_date` is deprecated in favor of `this_year`
- Period format `{ start: '2018-01-01', end: '2018-02-01' }` is deprecated in favor of `2018-01-01_to_2018-02-01`
- `last_x_days_including_current` is deprecated, and will have same behavior as `last_3_days`
- `/^last(\d+)(day|week|month|quarter|year)s?$/` format in favor of `/^last_(\d+)_(day|week|month|quarter|year)s?$/`
- `retrievePeriod` in favor of `getRange` (period parameter should be a string)
- `retrievePeriodParams` in favor of `getPeriodParams` (`period` parameter should be a string)
- `calculateAutoCompare` in favor of `getAutoCompareRangeAndLabel` (`period` parameter should be a string and object key `period` has been renamed to `range`)
- `retrieveComparePeriod` in favor of `getCompareRange` (both `period` & `compareMode` parameters should be string)

## Change

- period `today` is deprecated, and will have same behavior as `yesterday`
- `this_week` is equal to `last_week` when given base date is first day of the week.
- `this_month` is equal to `last_month` when given base date is first day of the month.
- `this_quarter` is equal to `last_quarter` when given base date is first day of the quarter.
- `this_year` is equal to `last_year` when given base date is first day of the year.
- `last_x_week_including_current` is equal to `last_x_week` when given base date is first day of the week.
- `last_x_month_including_current` is equal to `last_x_month` when given base date is first day of the month.
- `last_x_quarter_including_current` is equal to `last_x_quarter` when given base date is first day of the quarter.
- `last_x_year_including_current` is equal to `last_x_year` when given base date is first day of the year.
- `all_time` specification switch from `last_3_years_including_current` to `2015-01-01_to_yesterday`
- `last_x_days_including_current` is deprecated, and will have same behavior as `last_3_days`
- `year_to_date` is replaced by `this_year`. It's no more the complete year, but from the first day of the year to yesterday included.

## Add

- `getRange` replacing `retrievePeriod`
- `getPeriodParams` replacing `retrievePeriodParams`
- `getCompareRange` replacing `retrieveComparePeriod`
- `getAutoCompareRangeAndLabel` replacing `calculateAutoCompare`
- `getTillYesterdayPeriod`
- `getCustomPeriod`
- `getLastPeriod`
- `getThisPeriod`
- `formatDate`
- `migrateLegacyPeriod` transform legacy period format to new one
- `migrateLegacyCompareMode` transform legacy compare mode format to new one
- `toLegacyPeriod` reverse of `migrateLegacyPeriod`
- `toLegacyCompareMode` reverse of `migrateLegacyCompareMode`

## Fix

- `this_quarter` was inconsistent with `this_week`, `this_month` & `this_year`. Now `this_quarter` starts from the beginning of the quarter to yesterday included.
- `last_x_quarters` was inconsistent with `last_x_days`, `last_x_weeks`, `last_x_months` & `last_x_years`. It's no more one quarter length, but `x` quarters length.
