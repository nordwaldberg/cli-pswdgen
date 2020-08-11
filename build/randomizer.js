"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RollingBox = exports.getRandomNumber = void 0;
function getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}
exports.getRandomNumber = getRandomNumber;
class RollingBox {
    constructor(...args) {
        this.values = args;
    }
    roll() {
        let res = undefined;
        if (this.values.length !== 0) {
            res = this.values[getRandomNumber(0, this.values.length - 1)];
        }
        return res;
    }
    ;
}
exports.RollingBox = RollingBox;
//# sourceMappingURL=randomizer.js.map