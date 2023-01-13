const FizzBuzz = require("../src/fizz_buzz");

function setupFizzBuzzClassic() {
  const fb = new FizzBuzz(100, { fizz: 3, buzz: 5 });
  return fb.getNumbers();
}

function setupFizzBuzzAlternate() {
  const fb = new FizzBuzz(100, { fizz: 7, buzz: 8 });
  return fb.getNumbers();
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

// TODO: 0 doesn't brake the program
