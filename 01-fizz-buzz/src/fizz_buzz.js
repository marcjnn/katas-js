class FizzBuzz {
  #numbers;

  constructor(number) {
    this.#numbers = Array.from(Array(number).keys(), (index) =>
      this.#populateNumbers(index + 1)
    );
  }

  getNumbers() {
    return this.#numbers;
  }

  #populateNumbers(number) {
    if (number % 3 === 0) {
      return "Fizz";
    }

    if (number % 5 === 0) {
      return "Buzz";
    }

    return number;
  }
}

module.exports = FizzBuzz;
