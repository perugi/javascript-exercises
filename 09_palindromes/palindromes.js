const palindromes = function (string) {
    chars = Array.from(string.toLowerCase());
    chars = chars.filter(char => /[a-z]/.test(char));

    for (i = 0; i < chars.length / 2; i++) {
        if (chars[i] !== chars[(chars.length - 1) - i]) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
