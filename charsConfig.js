const { RollingBox, getRandomNumber } = require("./randomizer");

class CharsConfig {
    get() {
        let res;
        if (this.values) {
            res = new RollingBox(...this.values).roll();
        } else {
            res = String.fromCharCode((getRandomNumber(this.from, this.to)));
        }
        return res;
    }
    constructor(from, to, values) {
        if (typeof from === "number" && typeof to === "number") {
            this.from = from;
            this.to = to;
        } else if (Array.isArray(values)) {
            this.values = values;
        }
    }
}

module.exports = optconfig = {
    specials: new CharsConfig(null, null, ['.', '/', '-', '_']),
    digits: new CharsConfig(48, 57),
    uppercases: new CharsConfig(65, 90),
    lowercases: new CharsConfig(97, 122),
};
