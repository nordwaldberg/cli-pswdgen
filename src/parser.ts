import options from './options';
import { program } from 'commander';

program.version('3.0.0', '-v, --version', 'output the current version');

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

const parsedObj = parsed.opts();
export default parsedObj;
