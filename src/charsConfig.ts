import { RollingBox, getRandomNumber } from './randomizer';

class CharsConfig {
    values: Array<any> | null;
    from: number | null;
    to: number | null;
    get() {
        let res: any;
        if (this.values) {
            res = new RollingBox(...this.values).roll();
        } else if (typeof this.from === 'number' && typeof this.to === 'number') {
            res = String.fromCharCode((getRandomNumber(this.from, this.to)));
        }
        return res;
    }
    constructor(from: number | null, to: number | null, values: Array<any> | null) {
        this.from = from;
        this.to = to;
        this.values = values;
    }
}

const charsConfig = {
    specials: new CharsConfig(null, null, ['.', '/', '-', '_']),
    digits: new CharsConfig(48, 57, null),
    uppercases: new CharsConfig(65, 90, null),
    lowercases: new CharsConfig(97, 122, null),
};

export default charsConfig;