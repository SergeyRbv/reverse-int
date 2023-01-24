const { reverse } = require("ramda");

module.exports = function reverse (n) {
    let newString = '';

  for (let i = n.length - 1; i >= 0; i--) {
    newString += n[i];
  }
  return Number(newString);
}