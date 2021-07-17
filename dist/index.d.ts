export declare class TimeChunk {
    _startTime: number;
    _endTime: number;
    constructor(startTime: number, endTime?: number);
    chunk(interval: number, unit?: UNITS): any[];
    _add(time: number, interval: number, unit: UNITS): number;
    _addMillionSecond(time: number, interval: number): number;
    _addSeconde(time: number, interval: number): number;
    _addMinute(time: number, interval: number): number;
    _addHour(time: number, interval: number): number;
    _addDay(time: number, interval: number): number;
    _addWeek(time: number, interval: number): number;
    _addMonth(time: number, interval: number): number;
    _addYear(time: number, interval: number): number;
}
export declare enum UNITS {
    MILLIONSECOND = "ms",
    SECOND = "s",
    MINUTE = "m",
    HOUR = "h",
    DAY = "D",
    WEEK = "W",
    MONTH = "M",
    YEAR = "Y"
}
