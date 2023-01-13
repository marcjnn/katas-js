const FizzBuzz = require("../src/fizz_buzz");

describe("FizzBuzz", () => {
  it("returns 100 elements", () => {
    const fb = new FizzBuzz(100);
    const numbers = fb.getNumbers();

    expect(numbers.length).toBe(100);
  });

  it("starts with 1", () => {
    const fb = new FizzBuzz(100);
    const numbers = fb.getNumbers();

    expect(numbers[0]).toBe(1);
  });

  it("returns 7 as 7th element", () => {
    const fb = new FizzBuzz(100);
    const numbers = fb.getNumbers();

    expect(numbers[6]).toBe(7);
  });

  // multiples of three
  it("returns Fizz for 3", () => {
    const fb = new FizzBuzz(100);
    const numbers = fb.getNumbers();

    expect(numbers[2]).toBe("Fizz");
  });

  it("returns Fizz for 18", () => {
    const fb = new FizzBuzz(100);
    const numbers = fb.getNumbers();

    expect(numbers[17]).toBe("Fizz");
  });

  // multiples of five
  it("returns Buzz for 5", () => {
    const fb = new FizzBuzz(100);
    const numbers = fb.getNumbers();

    expect(numbers[4]).toBe("Buzz");
  });

  it("returns Buzz for 20", () => {
    const fb = new FizzBuzz(100);
    const numbers = fb.getNumbers();

    expect(numbers[19]).toBe("Buzz");
  });

  // multiples of fifteen
  it("returns FizzBuzz for 15", () => {
    const fb = new FizzBuzz(100);
    const numbers = fb.getNumbers();

    expect(numbers[14]).toBe("FizzBuzz");
  });

  it("returns FizzBuzz for 45", () => {
    const fb = new FizzBuzz(100);
    const numbers = fb.getNumbers();

    expect(numbers[44]).toBe("FizzBuzz");
  });

  it.skip("change_this_name", () => {
    new FizzBuzz();

    expect(true).toBe(true);
  });
});
