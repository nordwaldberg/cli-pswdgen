export function getRandomNumber(min: number, max: number): number {
    return Math.floor(min + Math.random() * (max - min + 1));
}

export class RollingBox<T> {
    values: Array<T>;
    constructor(...args: Array<T>) {
        this.values = args;
    }
    roll(): T | undefined {
        let res = undefined;
        if (this.values.length !== 0) {
            res = this.values[getRandomNumber(0, this.values.length - 1)];
        } 
        return res;
    };
}
