String.prototype.hasVowels = function() {
  return /[aeiou]/g.test(this);
};

String.prototype.toUpper = function() {
  let output = [];
  for (var char of this) {
    if (/[a-z]/.test(char)) {
      upperCaseCharCode = char.charCodeAt() - 32;
      output.push(String.fromCharCode(upperCaseCharCode));
      continue;
    }
    output.push(char);
  }
  return output.join("");
};

module.exports = String.prototype;
