export class Indicator {
    public id: number;
    public code: string;
    public name: string;
    public indicatorType: IndicatorType;
    public arguments: string;

    get indicatorTypeName(): string {
        return IndicatorType[this.indicatorType];
    }

    constructor(
    ) {
    }
}

export enum IndicatorType {
    Primitive = 1,
    Formula = 2
}