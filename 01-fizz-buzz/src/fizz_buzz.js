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
    return number % 3 === 0;
  }

  #isBuzz(number) {
    return number % 5 === 0;
  }
}

module.exports = FizzBuzz;
