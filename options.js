module.exports = [
    {
        flags: '-L --length <number>',
        description: 'set password length',
        _default: 8,
        name: 'length',
    },
    {
        flags: '-s --no-specials',
        description: 'use if special characters are not required',
        name: 'specials',
    },
    {
        flags: '-d --no-digits',
        description: 'use if digits from 0 to 9 are not required',
        name: 'digits',
    },
    {
        flags: '-u --no-uppercases',
        description: 'use if letters in uppercase register are not required',
        name: 'uppercases',
    },
    {
        flags: '-l --no-lowercases',
        description: 'use if letters in lowercase register are not required',
        name: 'lowercases',
    },
];
