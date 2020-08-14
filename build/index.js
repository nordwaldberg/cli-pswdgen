#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pswdgen = void 0;
const parser_1 = __importDefault(require("./parser"));
const options_1 = __importDefault(require("./options"));
const charsConfig_1 = __importDefault(require("./charsConfig"));
const randomizer_1 = require("./randomizer");
function pswdgen(parsed) {
    let res = '';
    const boxValues = [];
    for (let option of options_1.default) {
        if (option.name !== 'length' && parsed[option.name]) {
            boxValues.push(option.name);
        }
    }
    const box = new randomizer_1.RollingBox(...boxValues);
    for (let i = 0; i < Number(parsed.length); i++) {
        const rolling = box.roll();
        if (rolling) {
            const smth = charsConfig_1.default[rolling];
            res += smth.get();
        }
    }
    return res;
}
exports.pswdgen = pswdgen;
console.log(pswdgen(parser_1.default));
//# sourceMappingURL=index.js.map