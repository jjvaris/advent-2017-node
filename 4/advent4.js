const Advent = require('../advent');

class Advent4 extends Advent {
  constructor(day) {
    super(day);
  }

  executeFirstAdvent() {
    const lines = super.getFileLines('data1.txt');
    const validPassphrases = this._countValidPassphrases(lines, this._getWords);
    return validPassphrases;
  }

  executeSecondAdvent() {
    const lines = super.getFileLines('data2.txt');
    const validPassphrases = this._countValidPassphrases(
      lines,
      this._getWordsSorted
    );
    return validPassphrases;
  }

  _countValidPassphrases(lines, getWords) {
    let count = 0;
    lines.forEach(data => {
      const words = getWords(data);
      let keys = [];
      const found = words.find(word => {
        if (keys[word]) return true;
        keys[word] = word;
        return false;
      });
      if (!found) count++;
    });
    return count;
  }

  _getWords(data) {
    return data.split(' ');
  }

  _getWordsSorted(data) {
    return data.split(' ').map(word =>
      word
        .split('')
        .sort()
        .join('')
    );
  }
}

module.exports = Advent4;
