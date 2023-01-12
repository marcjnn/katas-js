const FizzBuzz = require("../src/fizz_buzz");

describe("FizzBuzz", () => {
  it("returns 100 elements", () => {
    const fb = new FizzBuzz();

    const numbers = fb.getNumbers();

    expect(numbers.length).toBe(100);
  });

  it("starts with 1", () => {
    const fb = new FizzBuzz();

    const numbers = fb.getNumbers();

    expect(numbers[0]).toBe(1);
  });

  it("returns 7 as 7th element", () => {
    const fb = new FizzBuzz();

    const numbers = fb.getNumbers();

    expect(numbers[6]).toBe(7);
  });

  it.skip("change_this_name", () => {
    new FizzBuzz();

    expect(true).toBe(true);
  });
});
