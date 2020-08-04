pswdgen
=====================
Configurable password cli generator 

Installation
------------------------------------
    npm install pswdgen

Usage and options
------------------------------------
### Usage
    pswdgen [options]

    Example:
    pswdgen            //generate password with default configutarion
    pswdgen -L 10 -u   //generate password with length 10 and without uppercase letters

### Options
    -v, --version         output the version number
    -L --length <number>  set password length (default: 8)
    -s --no-specials      use if special characters are not required
    -d --no-digits        use if digits from 0 to 9 are not required
    -u --no-uppercases    use if letters in uppercase register are not required
    -l --no-lowercases    use if letters in lowercase register are not required
    -h, --help            display help for command