class FizzBuzz {
  getNumbers(numberUpTo, fizzBuzzNumbers) {
    this.#validate(numberUpTo, fizzBuzzNumbers);
    return Array.from(Array(numberUpTo).keys(), (index) =>
      this.#populateNumbers(index + 1, fizzBuzzNumbers)
    );
  }

  #validate(numberUpTo, fizzBuzzNumbers) {
    if (numberUpTo <= 0) {
      throw Error("Invalid argument - numberUpTo has to be at least 1");
    }

    const { fizz, buzz } = fizzBuzzNumbers;
    const range = [1, 9];

    if (!this.#isInRange(fizz, range) || !this.#isInRange(buzz, range)) {
      throw Error("Invalid argument - fizz & buzz have to be between 1 & 9");
    }
  }

  #isInRange(number, [x, y]) {
    const min = Math.min(x, y);
    const max = Math.max(x, y);

    if (number > min && number < max) {
      return true;
    }

    return false;
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
