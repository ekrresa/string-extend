String.prototype.hasVowels = function() {
  return /[aeiou]/g.test(this);
};

String.prototype.toUpper = function() {
  var output = "";
  for (var char of this) {
    if (/[a-z]/.test(char)) {
      upperCaseCharCode = char.charCodeAt() - 32;
      output += String.fromCharCode(upperCaseCharCode);
      continue;
    }
    output += char;
  }
  return output;
};

module.exports = String.prototype;
