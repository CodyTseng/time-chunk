export declare class TimeDivider {
    startTime: number;
    endTime: number;
    constructor(startTime: number, endTime?: number);
    divide(interval: number, unit?: UNITS): {
        start: number;
        end: number;
    }[];
    private _add;
    private _addMillisecond;
    private _addSeconde;
    private _addMinute;
    private _addHour;
    private _addDay;
    private _addWeek;
    private _addMonth;
    private _addYear;
}
export declare enum UNITS {
    MILLISECOND = "_addMillisecond",
    SECOND = "_addSeconde",
    MINUTE = "_addMinute",
    HOUR = "_addHour",
    DAY = "_addDay",
    WEEK = "_addWeek",
    MONTH = "_addMonth",
    YEAR = "_addYear"
}
export declare enum Units {
    Millisecond = "_addMillisecond",
    Second = "_addSeconde",
    Minute = "_addMinute",
    Hour = "_addHour",
    Day = "_addDay",
    Week = "_addWeek",
    Month = "_addMonth",
    Year = "_addYear"
}
