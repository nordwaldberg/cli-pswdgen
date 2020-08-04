#!/usr/bin/env node

const parsed = require('./parser');
const options = require('./options');
const charsConfig = require('./charsConfig');
const { RollingBox } = require('./randomizer');

function pswdgen(parsed) {
    const box = new RollingBox();
    let res = '';

    for (let option of options) {
        if (option.name !== 'length' && parsed[option.name]) {
            box.add(option.name);
        }
    }

    for (let i = 0; i < parsed.length - 1; i++) {
        res += charsConfig[box.roll()].get();
    }

    return res;
}

console.log(pswdgen(parsed));
