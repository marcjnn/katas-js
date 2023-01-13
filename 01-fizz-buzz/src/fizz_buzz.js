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
    if (this.#isFizz(number) && this.#isBuzz(number)) {
      return "FizzBuzz";
    }

    if (this.#isFizz(number)) {
      return "Fizz";
    }

    if (this.#isBuzz(number)) {
      return "Buzz";
    }

    return number;
  }

  #isFizz(number) {
    return this.#isMultipleOf(number, 3) || this.#containsDigit(number, 3);
  }

  #isBuzz(number) {
    return number % 5 === 0;
  }

  #containsDigit(number, digit) {
    const digitsAsStrings = number.toString().split("");

    const digitsFiltered = digitsAsStrings.filter(
      (d) => d === digit.toString()
    );

    return Boolean(digitsFiltered.length);
  }

  #isMultipleOf(number, digit) {
    return number % digit === 0;
  }
}

module.exports = FizzBuzz;
