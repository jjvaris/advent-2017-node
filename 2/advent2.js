const fs = require('fs');
const Advent = require('../advent');

class Advent2 extends Advent {
  constructor(day) {
    super(day);
  }

  executeFirstAdvent() {
    const lines = super.getFileLines('data.txt');
    let checksums = [];
    lines.forEach(data => {
      const numbers = data.split(' ').map(number => parseInt(number));
      checksums.push(Math.max(...numbers) - Math.min(...numbers));
    });
    return checksums.reduce((number, sum) => number + sum);
  }

  executeSecondAdvent() {
    const lines = super.getFileLines('data.txt');
    let checksums = [];
    lines.forEach(line => {
      const numbers = line.split(' ').map(number => parseInt(number));
      numbers.find(firstNumber => {
        const found = numbers.find(secondNumber => {
          const isEvenlyDivided =
            firstNumber !== secondNumber && firstNumber % secondNumber === 0;
          return isEvenlyDivided;
        });
        if (found) {
          checksums.push(firstNumber / found);
        }
        return found;
      });
    });
    return checksums.reduce((number, sum) => number + sum);
  }
}

module.exports = Advent2;
