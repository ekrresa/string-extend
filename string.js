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
String.prototype.toLower = function() {
  var output = "";
  for (var char of this) {
    if (/[A-Z]/.test(char)) {
      lowerCaseCharCode = char.charCodeAt() + 32;
      output += String.fromCharCode(lowerCaseCharCode);
      continue;
    }
    output += char;
  }
  return output;
};

module.exports = String.prototype;
