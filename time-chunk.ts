export class TimeChunk {
  startTime: number;
  endTime: number;

  constructor(startTime: number, endTime: number = Date.now()) {
    this.startTime = startTime;
    this.endTime = endTime;
  }

  chunk(interval: number, unit: UNITS = UNITS.MILLIONSECOND) {
    const chunks = [];
    for (let currTime = this.startTime; currTime < this.endTime; ) {
      const next = this._add(currTime, interval, unit);
      chunks.push({
        start: currTime,
        end: Math.min(next - 1, this.endTime - 1),
      });
      currTime = next;
    }
    return chunks;
  }

  private _add(time: number, interval: number, unit: UNITS) {
    switch (unit) {
      case UNITS.MILLIONSECOND:
        return this._addMillionSecond(time, interval);
      case UNITS.SECOND:
        return this._addSeconde(time, interval);
      case UNITS.MINUTE:
        return this._addMinute(time, interval);
      case UNITS.HOUR:
        return this._addHour(time, interval);
      case UNITS.DAY:
        return this._addDay(time, interval);
      case UNITS.WEEK:
        return this._addWeek(time, interval);
      case UNITS.MONTH:
        return this._addMonth(time, interval);
      case UNITS.YEAR:
        return this._addYear(time, interval);
    }
  }

  private _addMillionSecond(time: number, interval: number) {
    return time + interval;
  }

  private _addSeconde(time: number, interval: number) {
    return time + interval * 1000;
  }

  private _addMinute(time: number, interval: number) {
    return time + interval * 1000 * 60;
  }

  private _addHour(time: number, interval: number) {
    return time + interval * 1000 * 60 * 60;
  }

  private _addDay(time: number, interval: number) {
    return time + interval * 1000 * 60 * 60 * 24;
  }

  private _addWeek(time: number, interval: number) {
    return time + interval * 1000 * 60 * 60 * 24 * 7;
  }

  private _addMonth(time: number, interval: number) {
    return new Date(
      new Date(time).setMonth(new Date(time).getMonth() + interval),
    ).getTime();
  }

  private _addYear(time: number, interval: number) {
    return new Date(
      new Date(time).setFullYear(new Date(time).getFullYear() + interval),
    ).getTime();
  }
}

export enum UNITS {
  MILLIONSECOND = 'ms',
  SECOND = 's',
  MINUTE = 'm',
  HOUR = 'h',
  DAY = 'D',
  WEEK = 'W',
  MONTH = 'M',
  YEAR = 'Y',
}
