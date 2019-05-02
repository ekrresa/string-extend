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
  if (!match) {
    throw "Error: String must begin with an alphabet";
  }
  var result = match[0].toUpper() + this.slice(1);
  return result;
};

String.prototype.isQuestion = function() {
  return /\?$/.test(this) !== false ? true : false;
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

  if (match[1].length >= 4) {
    var beforeDecimal = match[1].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    return match[2] !== undefined ? beforeDecimal + match[2] : beforeDecimal;
  }

  return this;
};

String.prototype.fromCurrency = function() {
  var regex = /^\d{1,3}(,\d{3})+(\.\d{2})?$/;

  if (regex.test(this)) {
    return +this.replace(/\,/g, "");
  }
  return "valid string must have commas";
};

String.prototype.inverseCase = function() {
  var regex = /[a-z]/gi;
  var output = "";

  if (!regex.test(this)) {
    return "valid string must contain letters";
  }
  for (const char of this) {
    if (/[A-Z]/.test(char)) {
      output += char.toLower();
      continue;
    }
    if (/[a-z]/.test(char)) {
      output += char.toUpper();
      continue;
    }
    output += char;
  }

  return output;
};

String.prototype.alternatingCase = function() {
  var output = "";

  var wordArray = this.split("");
  var wordArrayLength = wordArray.length;
  var charCase = "";

  for (let index = 0; index < wordArrayLength; index++) {
    //Check if letter is at beginning of string
    if (!index && isLetter(wordArray[index])) {
      output += wordArray[index].toLower();
      charCase = "lower";
      continue;
    }

    //Check if space behind letter
    if (isLetter(wordArray[index]) && wordArray[index - 1] === " ") {
      output += wordArray[index].toLower();
      charCase = "lower";
      continue;
    }

    //Check is previous letter is of lowercase
    if (isLetter(wordArray[index]) && charCase === "lower") {
      output += wordArray[index].toUpper();
      charCase = "upper";
      continue;
    }

    //Check is previous letter is of uppercase
    if (isLetter(wordArray[index]) && charCase === "upper") {
      output += wordArray[index].toLower();
      charCase = "lower";
      continue;
    }
    output += wordArray[index];
  }

  return output;
};

String.prototype.numberWords = function() {
  var numberList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var matches = this.match(/\d/g);
  var result = [];

  if (!matches) {
    return "no numbers in string";
  }

  for (const number of matches) {
    result.push(numberList[+number]);
  }
  return result.join(" ");
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
      caseCharCode = char.charCodeAt() + signedNum;
      output += String.fromCharCode(caseCharCode);
      continue;
    }
    output += char;
  }
  return output;
}

function isLetter(letter) {
  return /[a-z]/i.test(letter);
}

module.exports = String.prototype;
