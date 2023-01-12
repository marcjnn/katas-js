class FizzBuzz {
  getNumbers() {
    return Array.from(Array(100).keys(), (index) => index + 1);
  }
}

module.exports = FizzBuzz;
