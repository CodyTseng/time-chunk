export declare class TimeDivider {
    startTime: number;
    endTime: number;
    constructor(startTime: number, endTime?: number);
    divide(interval: number, unit?: Units): {
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
