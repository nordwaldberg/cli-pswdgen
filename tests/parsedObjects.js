module.exports = {
    defaultObj: {
        length: 8,
        specials: true,
        digits: true,
        uppesrcases: true,
        lowercases: true,
    },
    withoutSpecialsObj: {
        length: 8,
        specials: false,
        digits: true,
        uppesrcases: true,
        lowercases: true,
    },
    withoutDigitsObj: {
        length: 8,
        specials: true,
        digits: false,
        uppesrcases: true,
        lowercases: true,
    },
    withoutUppercasesObj: {
        length: 8,
        specials: true,
        digits: true,
        uppesrcases: false,
        lowercases: true,
    },
    withoutLowercasesObj: {
        length: 8,
        specials: true,
        digits: true,
        uppesrcases: true,
        lowercases: false,
    },
    onlySpecialsObj: {
        length: 8,
        specials: true,
        digits: false,
        uppesrcases: false,
        lowercases: false,
    },
    onlyDigitsObj: {
        length: 8,
        specials: false,
        digits: true,
        uppesrcases: false,
        lowercases: false,
    },
    onlyUppercasesObj: {
        length: 8,
        specials: false,
        digits: false,
        uppercases: true,
        lowercases: false,
    },
    onlyLowercasesObj: {
        length: 8,
        specials: false,
        digits: false,
        uppercases: false,
        lowercases: true,
    },
    userLength: {
        length: 20,
        specials: true,
        digits: true,
        uppesrcases: true,
        lowercases: true,
    },
}
