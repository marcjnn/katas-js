const FizzBuzz = require("../src/fizz_buzz");

function setup() {
  const fb = new FizzBuzz(100);
  return fb.getNumbers();
}

test("returns 100 elements", () => {
  const numbers = setup();

  expect(numbers.length).toBe(100);
});

test("starts with 1", () => {
  const numbers = setup();

  expect(numbers[0]).toBe(1);
});

test("returns 7 as 7th element", () => {
  const numbers = setup();

  expect(numbers[6]).toBe(7);
});

// multiples of three
test("returns Fizz for 3", () => {
  const numbers = setup();

  expect(numbers[2]).toBe("Fizz");
});

test("returns Fizz for 18", () => {
  const numbers = setup();

  expect(numbers[17]).toBe("Fizz");
});

// multiples of five
test("returns Buzz for 5", () => {
  const numbers = setup();

  expect(numbers[4]).toBe("Buzz");
});

test("returns Buzz for 20", () => {
  const numbers = setup();

  expect(numbers[19]).toBe("Buzz");
});

// multiples of fifteen
test("returns FizzBuzz for 15", () => {
  const numbers = setup();

  expect(numbers[14]).toBe("FizzBuzz");
});

test("returns FizzBuzz for 45", () => {
  const numbers = setup();

  expect(numbers[44]).toBe("FizzBuzz");
});

test.skip("change_this_name", () => {
  const numbers = setup();

  expect(true).toBe(true);
});
