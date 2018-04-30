const Advent = require('../advent');

class Advent6 extends Advent {
  constructor(day) {
    super(day);
  }

  executeFirstAdvent() {
    const line = super.getFileLines('data1.txt')[0];
    let banks = line.split(' ').map(number => parseInt(number));
    let snapshot = this._takeSnapshot(banks);
    let snapshots = {};
    snapshots[snapshot] = snapshot;
    let count = 1;
    while (true) {
      const largestBlock = this._findLargestBlock(banks);
      banks[largestBlock.index] = 0;
      let index = largestBlock.index + 1;
      for (let i = 0; i < largestBlock.max; i++) {
        if (index === banks.length) {
          index = 0;
        }
        banks[index]++;
        index++;
      }
      snapshot = this._takeSnapshot(banks);
      if (snapshots[snapshot]) {
        return count;
      }
      count++;
      snapshots[snapshot] = snapshot;
    }
  }

  executeSecondAdvent() {
    const line = super.getFileLines('data1.txt')[0];
    let banks = line.split(' ').map(number => parseInt(number));
    let snapshot = this._takeSnapshot(banks);
    let snapshots = {};
    snapshots[snapshot] = { snapshot: snapshot, index: 0 };
    let count = 1;
    while (true) {
      const largestBlock = this._findLargestBlock(banks);
      banks[largestBlock.index] = 0;
      let index = largestBlock.index + 1;
      for (let i = 0; i < largestBlock.max; i++) {
        if (index === banks.length) {
          index = 0;
        }
        banks[index]++;
        index++;
      }
      snapshot = this._takeSnapshot(banks);
      if (snapshots[snapshot]) {
        return count - snapshots[snapshot].index;
      }
      snapshots[snapshot] = { snapshot: snapshot, index: count };
      count++;
    }
  }

  _takeSnapshot(banks) {
    return banks.reduce((snapshot, block) => `${snapshot} ${block}`);
  }

  _findLargestBlock(banks) {
    let largestBlock = 0;
    let largestBlockIndex = 0;
    banks.forEach((block, index) => {
      if (block > largestBlock) {
        largestBlock = block;
        largestBlockIndex = index;
      }
    });
    return { max: largestBlock, index: largestBlockIndex };
  }
}

module.exports = Advent6;
