String.prototype.hasVowels = function() {
  return /[aeiou]/g.test(this);
};

module.exports = String.prototype;
