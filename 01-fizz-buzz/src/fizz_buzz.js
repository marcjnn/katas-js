class FizzBuzz {
  getNumbers(numberUpTo, fizzBuzzNumbers) {
    this.#validate(fizzBuzzNumbers);
    return Array.from(Array(numberUpTo).keys(), (index) =>
      this.#populateNumbers(index + 1, fizzBuzzNumbers)
    );
  }

  #validate(fizzBuzzNumbers) {
    const { fizz, buzz } = fizzBuzzNumbers;

    if (fizz === 0 || buzz === 0) {
      throw Error("Invalid argument - fizz & buzz have to be between 1 & 9");
    }
  }

  #populateNumbers(number, { fizz, buzz }) {
    if (this.#isFizz(number, fizz) && this.#isBuzz(number, buzz)) {
      return "FizzBuzz";
    }

    if (this.#isFizz(number, fizz)) {
      return "Fizz";
    }

    if (this.#isBuzz(number, buzz)) {
      return "Buzz";
    }

    return number;
  }

  #isFizz(number, fizz) {
    return (
      this.#isMultipleOf(number, fizz) || this.#containsDigit(number, fizz)
    );
  }

  #isBuzz(number, buzz) {
    return (
      this.#isMultipleOf(number, buzz) || this.#containsDigit(number, buzz)
    );
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
