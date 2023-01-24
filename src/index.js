const { reverse, mathMod } = require("ramda");

module.exports = function reverse (n) {
    let number = Math.abs(n)
    let result = number.toString().split("").reverse().join("");
    return result;
}

