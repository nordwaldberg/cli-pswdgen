const { program, option } = require('commander');

program.version('6.0.0');

const parsed = program
    .name('pswdgen')
    .usage('[options]')
    .option('-L --length <number>', 'set password length', 8)
    .option('-s --no-specials', `do not use special characters`)
    .option('-d --no-digits', 'do not use digits from 0 to 9')
    .option('-u --no-uppercases', 'do not use letters in uppercase register')
    .option('-l --no-lowercases', 'do not use letters in lowercase register')
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