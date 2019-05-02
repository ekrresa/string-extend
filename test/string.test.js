require("../string");

describe("String method tests", function() {
  test("should check for vowels", function() {
    expect("the quick".hasVowels()).toBe(true);
    expect("frsk prfth".hasVowels()).toBe(false);
    expect("".hasVowels()).toBe(false);
    expect(" ".hasVowels()).toBe(false);
  });

  test("should convert string to uppercase", function() {
    expect("ochuko".toUpper()).toBe("OCHUKO");
    expect("esther seyi ochuko".toUpper()).toBe("ESTHER SEYI OCHUKO");
    expect("why So SERious".toUpper()).toBe("WHY SO SERIOUS");
  });

  test("should convert string to lowercase", function() {
    expect("ochuko".toLower()).toBe("ochuko");
    expect("ESTHER SEYI OCHUKO".toLower()).toBe("esther seyi ochuko");
    expect("WHy So 453sdj SERious".toLower()).toBe("why so 453sdj serious");
  });

  test("should convert first character of string to uppercase", function() {
    expect("ochuko".ucFirst()).toBe("Ochuko");
    expect("esther seyi".ucFirst()).toBe("Esther seyi");
    expect("1Hy So 453sdj SERious".ucFirst).toThrow();
  });

  test("should convert check if string issa question", function() {
    expect("OCHUKO!".isQuestion()).toBe(false);
    expect("my name is?".isQuestion()).toBe(true);
    expect("3242342134 432434".isQuestion()).toBe(false);
  });

  test("should get all words in a string", function() {
    expect("The Quick brown fox".words()).toContain("Quick");
    expect(" ".words()).toBe(null);
  });

  test("should get number of words in a string", function() {
    expect("The Quick brown fox".wordCount()).toBe(4);
    expect(" ".wordCount()).toBe(0);
  });
});
