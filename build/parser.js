"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const options_1 = __importDefault(require("./options"));
commander_1.program.version('1.0.0', '-v, --version', 'output the current version');
const parsed = commander_1.program
    .name('pswdgen')
    .usage('[options]');
for (let option of options_1.default) {
    const { flags, description, _default } = option;
    parsed.option(flags, description, _default);
}
parsed.parse(process.argv);
options_1.default.forEach(option => {
    if (option.validate) {
        option.validate(parsed[option.name]);
    }
});
exports.default = parsed.opts();
//# sourceMappingURL=parser.js.map