#!/usr/bin/env node

import parsed  from './parser';
import options, { OptionName }  from './options';
import charsConfig  from './charsConfig';
import { RollingBox }  from './randomizer';

export function pswdgen(parsed: any): string {
    
    let res: string = '';

    const boxValues: Array<Exclude<OptionName, 'length'>> = [];
    for (let option of options) {
        if (option.name !== 'length' && parsed[option.name]) {
            boxValues.push(option.name);
        }
    }

    const box = new RollingBox(...boxValues);

    for (let i = 0; i < Number(parsed.length); i++) {
        const rolling = box.roll();
        if (rolling) {
            const smth = charsConfig[rolling];
            res += smth.get();
        }
    }

    return res;
}

console.log(pswdgen(parsed));