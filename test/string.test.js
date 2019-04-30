require("../string");

describe("String method tests", function() {
  test("should check for vowels", function() {
    expect("the quick".hasVowels()).toBe(true);
    expect("frsk prfth".hasVowels()).toBe(false);
    expect("".hasVowels()).toBe(false);
    expect(" ".hasVowels()).toBe(false);
  });
});
