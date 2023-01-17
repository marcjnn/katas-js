const FizzBuzz = require("../src/fizz_buzz");

function setupFizzBuzzClassic() {
  const fb = new FizzBuzz();
  return fb.getNumbers(100, { fizz: 3, buzz: 5 });
}

function setupFizzBuzzAlternate() {
  const fb = new FizzBuzz();
  return fb.getNumbers(100, { fizz: 7, buzz: 8 });
}

describe("classic fizz buzz", () => {
  test("returns 100 elements", () => {
    const numbers = setupFizzBuzzClassic();

    expect(numbers.length).toBe(100);
  });

  test("starts with 1", () => {
    const numbers = setupFizzBuzzClassic();

    expect(numbers[0]).toBe(1);
  });

  test("returns 7 as 7th element", () => {
    const numbers = setupFizzBuzzClassic();

    expect(numbers[6]).toBe(7);
  });

  // Fizz
  test("returns Fizz for 3", () => {
    const numbers = setupFizzBuzzClassic();

    expect(numbers[2]).toBe("Fizz");
  });

  test("returns Fizz for 18", () => {
    const numbers = setupFizzBuzzClassic();

    expect(numbers[17]).toBe("Fizz");
  });

  test("returns Fizz for 23", () => {
    const numbers = setupFizzBuzzClassic();

    expect(numbers[22]).toBe("Fizz");
  });

  test("returns Fizz for 73", () => {
    const numbers = setupFizzBuzzClassic();

    expect(numbers[72]).toBe("Fizz");
  });

  // multiples of five
  test("returns Buzz for 5", () => {
    const numbers = setupFizzBuzzClassic();

    expect(numbers[4]).toBe("Buzz");
  });

  test("returns Buzz for 20", () => {
    const numbers = setupFizzBuzzClassic();

    expect(numbers[19]).toBe("Buzz");
  });

  test("returns Buzz for 52", () => {
    const numbers = setupFizzBuzzClassic();

    expect(numbers[51]).toBe("Buzz");
  });

  // FizzBuzz
  test("returns FizzBuzz for 15", () => {
    const numbers = setupFizzBuzzClassic();

    expect(numbers[14]).toBe("FizzBuzz");
  });

  test("returns FizzBuzz for 45", () => {
    const numbers = setupFizzBuzzClassic();

    expect(numbers[44]).toBe("FizzBuzz");
  });

  test("returns FizzBuzz for 53", () => {
    const numbers = setupFizzBuzzClassic();

    expect(numbers[52]).toBe("FizzBuzz");
  });
});

describe("alternate version", () => {
  test("returns Fizz for 7", () => {
    const numbers = setupFizzBuzzAlternate();
    expect(numbers[6]).toBe("Fizz");
  });

  test("returns Fizz for 37", () => {
    const numbers = setupFizzBuzzAlternate();
    expect(numbers[36]).toBe("Fizz");
  });

  test("returns Buzz for 16", () => {
    const numbers = setupFizzBuzzAlternate();
    expect(numbers[15]).toBe("Buzz");
  });

  test("returns Buzz for 81", () => {
    const numbers = setupFizzBuzzAlternate();
    expect(numbers[80]).toBe("Buzz");
  });

  test("returns FizzBuzz for 28", () => {
    const numbers = setupFizzBuzzAlternate();
    expect(numbers[27]).toBe("FizzBuzz");
  });

  test("returns FizzBuzz for 78", () => {
    const numbers = setupFizzBuzzAlternate();
    expect(numbers[77]).toBe("FizzBuzz");
  });
});

describe("validting arguments", () => {
  test("throws error when fizz or buzz 0", () => {
    const fb = new FizzBuzz();

    expect(() => {
      fb.getNumbers(100, { fizz: 3, buzz: 0 });
    }).toThrow("Invalid argument - fizz & buzz have to be between 1 & 9");
  });

  test("throws error when fizz or buzz negative number", () => {
    const fb = new FizzBuzz();

    expect(() => {
      fb.getNumbers(100, { fizz: 3, buzz: -1 });
    }).toThrow("Invalid argument - fizz & buzz have to be between 1 & 9");
  });

  test("throws error when fizz or buzz higer than 9", () => {
    const fb = new FizzBuzz();

    expect(() => {
      fb.getNumbers(100, { fizz: 3, buzz: -1 });
    }).toThrow("Invalid argument - fizz & buzz have to be between 1 & 9");
  });

  test("throws error when numberUpTo lower than 1", () => {
    const fb = new FizzBuzz();

    expect(() => {
      fb.getNumbers(0, { fizz: 3, buzz: 5 });
    }).toThrow("Invalid argument - numberUpTo has to be at least 1");
  });
});
