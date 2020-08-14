const pswdgen = require('../build/index').pswdgen;
const parsedObjects = require('./parsedObjects');
const { containSpecial, containDigit, containUppercase, containLowercase } = require('./verifyFunctions');

describe('pswdgen function should generate password without', () => {
    test('user settings with default length 8', () => {
        const password = pswdgen(parsedObjects.defaultObj);
        expect(password).toHaveLength(8);
    });
    test('special chars', () => {
        const password = pswdgen(parsedObjects.withoutSpecialsObj);
        expect(containSpecial(password)).toBe(false);
    });
    test('digits', () => {
        const password = pswdgen(parsedObjects.withoutDigitsObj);
        expect(containDigit(password)).toBe(false);
    });
    test('uppercase letters', () => {
        const password = pswdgen(parsedObjects.withoutUppercasesObj);
        expect(containUppercase(password)).toBe(false);
    });
    test('lowercase letters', () => {
        const password = pswdgen(parsedObjects.withoutLowercasesObj);
        expect(containLowercase(password)).toBe(false);
    });   
});

describe('pswdgen function should generate password with', () => {
    test('user length 20', () => {
        const password = pswdgen(parsedObjects.userLength);
        expect(password).toHaveLength(20);
    });
    test('special chars only', () => {
        const password = pswdgen(parsedObjects.onlySpecialsObj);
        expect(containSpecial(password)).toBe(true);
    });
    test('digits only', () => {
        const password = pswdgen(parsedObjects.onlyDigitsObj);
        expect(containDigit(password)).toBe(true);
    });
    test('uppercase letters only', () => {
        const password = pswdgen(parsedObjects.onlyUppercasesObj);
        expect(containUppercase(password)).toBe(true);
    });
    test('lowercase letter only', () => {
        const password = pswdgen(parsedObjects.onlyLowercasesObj);
        expect(containLowercase(password)).toBe(true);
    });
});
