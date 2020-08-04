const { program } = require('commander');
const options = require('./options');

program.version('6.0.0');


const parsed = program
    .name('pswdgen')
    .usage('[options]');

for (let option of options) {
    const { flags, description, _default } = option;
    parsed.option(flags, description, _default);
}

parsed
    .parse(process.argv)
    .opts();

module.exports = parsed;

function validate(value, type, name) {
    switch (type) {
        case ("number"):
            if (!isNumber(value)) {
                console.error(`value parameter "${name}" should be a number`);
                process.exit(1);
            }
            break;
    }
}

function isNumber(guessNumber) {
    if(isNaN(Number(guessNumber))) {
        return false;
    }
    return true;
}

validate(parsed.length, "number", "length");