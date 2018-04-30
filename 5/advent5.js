const Advent = require('../advent');

class Advent5 extends Advent {
  constructor(day) {
    super(day);
  }

  executeFirstAdvent() {
    let line = super
      .getFileLines('./data1.txt')
      .map(number => parseInt(number));
    let currentIndex = 0;
    let moves = 0;
    let step = line[currentIndex];
    while (currentIndex + step < line.length) {
      line[currentIndex]++;
      currentIndex = currentIndex + step;
      moves++;
      step = line[currentIndex];
    }
    return ++moves;
  }

  executeSecondAdvent() {
    let line = super
      .getFileLines('./data1.txt')
      .map(number => parseInt(number));
    let currentIndex = 0;
    let moves = 0;
    let step = line[currentIndex];
    while (currentIndex + step < line.length) {
      if (line[currentIndex] >= 3) line[currentIndex]--;
      else if (line[currentIndex] >= -3 || line[currentIndex] < -3)
        line[currentIndex]++;
      currentIndex = currentIndex + step;
      moves++;
      step = line[currentIndex];
    }
    return ++moves;
  }
}

module.exports = Advent5;
