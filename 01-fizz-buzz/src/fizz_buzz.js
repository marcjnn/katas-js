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
    if (number % 3 === 0) {
      return true;
    }

    // contains 3
    const digitsAsStrings = number.toString().split("");
    const digitsFiltered = digitsAsStrings.filter((digit) => digit === "3");
    if (digitsFiltered.length) {
      return true;
    }

    return false;
  }

  #isBuzz(number) {
    return number % 5 === 0;
  }
}

module.exports = FizzBuzz;
