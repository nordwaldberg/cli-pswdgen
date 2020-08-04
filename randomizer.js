function getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

class RollingBox {
    constructor(...args) {
        this.values = args;
    }
    add(value) {
        this.values.push(value);
    };
    remove(value) {
        this.values = this.values.filter(item => item !== value);
    };
    roll() {
        let res = undefined;
        if (this.values.length !== 0) {
            res = this.values[getRandomNumber(0, this.values.length - 1)];
        } 
        return res;
    };
}

module.exports.getRandomNumber = getRandomNumber;
module.exports.RollingBox = RollingBox;
