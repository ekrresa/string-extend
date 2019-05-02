String.prototype.hasVowels = function() {
  return /[aeiou]/g.test(this);
};

String.prototype.toUpper = function() {
  return changeCase.call(this, -32);
};
String.prototype.toLower = function() {
  return changeCase.call(this, 32);
};

String.prototype.ucFirst = function() {
  var match = this.match(/^[a-z]/);
  if (match) {
    var result = match[0].toUpper() + this.slice(1);
    return result;
  }
  throw "Error: String must begin with an alphabet";
};

function changeCase(signedNum) {
  var regex = signedNum < 0 ? /[a-z]/ : /[A-Z]/;
  var output = "";

  for (var char of this) {
    if (regex.test(char)) {
      CaseCharCode = char.charCodeAt() + signedNum;
      output += String.fromCharCode(CaseCharCode);
      continue;
    }
    output += char;
  }
  return output;
}

module.exports = String.prototype;
