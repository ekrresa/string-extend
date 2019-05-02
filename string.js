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

String.prototype.isQuestion = function() {
  return this.match(/\?$/) !== null ? true : false;
};

String.prototype.words = function() {
  return this.match(/\b\w+\b/g);
};

String.prototype.wordCount = function() {
  return this.words() === null ? 0 : this.words().length;
};

String.prototype.toCurrency = function() {
  var regex = /^(\d+)(\.\d{2,})?$/;
  var match = this.match(regex);

  if (!match) {
    return "valid string is numbers with/without 2 decimal numbers minimum";
  }

  if (match && match[1].length >= 4) {
    var beforeDecimal = match[1].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  } else {
    return this;
  }

  return match[2] !== undefined ? beforeDecimal + match[2] : beforeDecimal;
};

String.prototype.fromCurrency = function() {
  var regex = /^\d{1,3}(,\d{3})+(\.\d{2})?$/;
  var match = regex.test(this);

  if (match) {
    return +this.replace(/\,/g, "");
  }
  return "valid string must have commas";
};

String.prototype.numberWords = function() {
  var numberList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var matches = this.match(/\d/g);
  var result = [];

  if (matches) {
    for (const number of matches) {
      result.push(numberList[+number]);
    }
    return result.join(" ");
  }

  return "no numbers in string";
};

String.prototype.isDigit = function() {
  var match = this.match(/\d/g);
  if (match) {
    return match.length === 1 ? true : false;
  }
  return false;
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
