#!/usr/bin/env node

const parsed = require('./parse');
const optconfig = require('./optconfig');


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

function pswdgen(parsed) {
    const { specials, digits, uppercases, lowercases } = parsed;
    const box = new RollingBox();
    let res = '';

    if (specials) {
        box.add('specials');
    }
    if (digits) {
        box.add('digits');
    }
    if (uppercases) {
        box.add('uppercases');
    }
    if (lowercases) {
        box.add('lowercases');
    }

    for (let i = 0; i < parsed.length - 1; i++) {
        let rolled = box.roll();

        switch (rolled) {
            case 'specials':
                res += getSpecial();
                break;
            case 'digits':
                res += getDigit();
                break;
            case 'uppercases':
                res += getUppercase();
                break;
            case 'lowercases':
                res += getLowercase();
                break;
                
        }
    }

    return res;
}

function getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

function getDigit() {
    return String.fromCharCode(getRandomNumber(optconfig.digits.from, optconfig.digits.to));
}

function getSpecial() {
    return new RollingBox(...optconfig.specials.values).roll();
}

function getUppercase() {
    return String.fromCharCode(getRandomNumber(optconfig.uppercases.from, optconfig.uppercases.to));
}

function getLowercase() {
    return String.fromCharCode(getRandomNumber(optconfig.lowercases.from, optconfig.lowercases.to));
}

console.log(pswdgen(parsed));