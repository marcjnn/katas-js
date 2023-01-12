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
    return number;
  }
}

module.exports = FizzBuzz;
