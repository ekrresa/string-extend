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
    expect(function() {
      return "1Hy So 453sdj SERious".ucFirst();
    }).toThrow();
  });
});
