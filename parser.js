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

parsed.parse(process.argv);


options.forEach(option => {
    if (option.validate) {
        option.validate(parsed[option.name]);
    }
})

module.exports = parsed.opts();
