# Time-Divider

[![Build Status](https://app.travis-ci.com/CodyTseng/time-divider.svg?branch=master)](https://app.travis-ci.com/CodyTseng/time-divider)

Sequentially divides a period of time into multiple segments of specified duration, the last segment may be of less than the specified duration. Time periods do not contain end times, [startTime, endTime)

```bash
npm install time-divider --save
```

Eglish | [中文简体](./README_zh.md)

## Usage

```js
const { TimeDivider, UNITS } = require('time-divider');

const startTime = 1577462400000; // Sat Dec 28 2019 00:00:00 GMT+0800
const endTime = 1626580800000; // Sun Jul 18 2021 12:00:00 GMT+0800

const chunks = new TimeDivider(startTime, endTime).divide(2, UNITS.MONTH);

console.log(chunks);

console.log(
  chunks.map((chunk) => {
    const { start, end } = chunk;
    return new Date(start).toString() + ' - ' + new Date(end).toString();
  }),
);
```

Output:

```bash
[
  { start: 1577462400000, end: 1582819199999 },
  { start: 1582819200000, end: 1588003199999 },
  { start: 1588003200000, end: 1593273599999 },
  { start: 1593273600000, end: 1598543999999 },
  { start: 1598544000000, end: 1603814399999 },
  { start: 1603814400000, end: 1609084799999 },
  { start: 1609084800000, end: 1614441599999 },
  { start: 1614441600000, end: 1619539199999 },
  { start: 1619539200000, end: 1624809599999 },
  { start: 1624809600000, end: 1626580799999 }
]
[
  'Sat Dec 28 2019 00:00:00 GMT+0800 (中国标准时间) - Thu Feb 27 2020 23:59:59 GMT+0800 (中国标准时间)',
  'Fri Feb 28 2020 00:00:00 GMT+0800 (中国标准时间) - Mon Apr 27 2020 23:59:59 GMT+0800 (中国标准时间)',
  'Tue Apr 28 2020 00:00:00 GMT+0800 (中国标准时间) - Sat Jun 27 2020 23:59:59 GMT+0800 (中国标准时间)',
  'Sun Jun 28 2020 00:00:00 GMT+0800 (中国标准时间) - Thu Aug 27 2020 23:59:59 GMT+0800 (中国标准时间)',
  'Fri Aug 28 2020 00:00:00 GMT+0800 (中国标准时间) - Tue Oct 27 2020 23:59:59 GMT+0800 (中国标准时间)',
  'Wed Oct 28 2020 00:00:00 GMT+0800 (中国标准时间) - Sun Dec 27 2020 23:59:59 GMT+0800 (中国标准时间)',
  'Mon Dec 28 2020 00:00:00 GMT+0800 (中国标准时间) - Sat Feb 27 2021 23:59:59 GMT+0800 (中国标准时间)',
  'Sun Feb 28 2021 00:00:00 GMT+0800 (中国标准时间) - Tue Apr 27 2021 23:59:59 GMT+0800 (中国标准时间)',
  'Wed Apr 28 2021 00:00:00 GMT+0800 (中国标准时间) - Sun Jun 27 2021 23:59:59 GMT+0800 (中国标准时间)',
  'Mon Jun 28 2021 00:00:00 GMT+0800 (中国标准时间) - Sun Jul 18 2021 11:59:59 GMT+0800 (中国标准时间)'
]
```

### UNITS

```ts
enum UNITS {
  MILLISECOND,
  SECOND,
  MINUTE,
  HOUR,
  DAY,
  WEEK,
  MONTH,
  YEAR,
}
```

## License

[MIT](./LICENSE) © Cody Tseng