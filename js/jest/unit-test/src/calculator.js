class Calculator {
  sum(a, b) {
    return a + b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Invalid argument');
    }

    return a / b;
  }
}

module.exports = Calculator;
