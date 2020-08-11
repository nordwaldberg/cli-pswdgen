"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const randomizer_1 = require("./randomizer");
class CharsConfig {
    constructor(from, to, values) {
        this.from = from;
        this.to = to;
        this.values = values;
    }
    get() {
        let res;
        if (this.values) {
            res = new randomizer_1.RollingBox(...this.values).roll();
        }
        else if (typeof this.from === 'number' && typeof this.to === 'number') {
            res = String.fromCharCode((randomizer_1.getRandomNumber(this.from, this.to)));
        }
        return res;
    }
}
const charsConfig = {
    specials: new CharsConfig(null, null, ['.', '/', '-', '_']),
    digits: new CharsConfig(48, 57, null),
    uppercases: new CharsConfig(65, 90, null),
    lowercases: new CharsConfig(97, 122, null),
};
exports.default = charsConfig;
//# sourceMappingURL=charsConfig.js.map