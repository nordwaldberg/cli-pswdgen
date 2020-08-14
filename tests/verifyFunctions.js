const charsConfig = require('../build/charsConfig').default;

function containSpecial(password) {
    const values = charsConfig.specials.values;
    let result = false;
    for (let item of password) {
        if(values.includes(item, 0)) {
            result = true;
        };
    }
    return result;
}

function containDigit(password) {
    const from = charsConfig.digits.from;
    const to = charsConfig.digits.to;
    let result = false;

    for (let item of password) {
        if(item.charCodeAt() >= from && item.charCodeAt() <= to) {
            result = true;
        };
    }

    return result;
}

function containUppercase(password) {
    const from = charsConfig.uppercases.from;
    const to = charsConfig.uppercases.to;
    let result = false;

    for (let item of password) {
        if(item.charCodeAt() >= from && item.charCodeAt() <= to) {
            result = true;
        };
    }

    return result;
}

function containLowercase(password) {
    const from = charsConfig.lowercases.from;
    const to = charsConfig.lowercases.to;
    let result = false;

    for (let item of password) {
        if(item.charCodeAt() >= from && item.charCodeAt() <= to) {
            result = true;
        };
    }

    return result;
}

module.exports = { containSpecial, containDigit, containUppercase, containLowercase };