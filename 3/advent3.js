const Advent = require('../advent');

class Advent3 extends Advent {
  constructor(day) {
    super(day);
  }

  executeFirstAdvent() {
    let x = 0;
    let y = 0;
    let xTurn = true;
    let xDirection = 1;
    let yDirection = 1;
    const visited = {};
    visited[`${x}-${y}`] = true;
    let currentNumber = 2;
    while (currentNumber <= 347991) {
      if (xTurn) {
        if (!visited[`${x + xDirection}-${y}`]) {
          x = x + xDirection;
          visited[`${x}-${y}`] = true;
          currentNumber++;
          if (!visited[`${x}-${y + xDirection}`]) {
            yDirection = xDirection;
            xDirection *= -1;
            xTurn = !xTurn;
          }
        }
      } else {
        if (!visited[`${x}-${y + yDirection}`]) {
          y = y + yDirection;
          currentNumber++;
          visited[`${x}-${y}`] = true;
          if (!visited[`${x + xDirection}-${y}`]) xTurn = !xTurn;
        }
      }
    }
    return Math.abs(x) + Math.abs(y);
  }

  executeSecondAdvent() {
    let x = 0;
    let y = 0;
    let xTurn = true;
    let visited = {};
    visited[`${x}-${y}`] = 1;
    let xDirection = 1;
    let yDirection = 1;
    let number = 0;
    while (number <= 347991) {
      if (xTurn) {
        if (!visited[`${x + xDirection}-${y}`]) {
          x += xDirection;
          number = this._getSumOfNeighbours(visited, x, y, x + 1, y + 1, 0);
          visited[`${x}-${y}`] = number;
          if (!visited[`${x}-${y + xDirection}`]) {
            yDirection = xDirection;
            xDirection *= -1;
            xTurn = !xTurn;
          }
        }
      } else {
        if (!visited[`${x}-${y + yDirection}`]) {
          y += yDirection;
          number = this._getSumOfNeighbours(visited, x, y, x + 1, y + 1, 0);
          visited[`${x}-${y}`] = number;
          if (!visited[`${x + xDirection}-${y}`]) xTurn = !xTurn;
        }
      }
    }
    return number;
  }

  _getSumOfNeighbours(visited, x, y, nx, ny, sum) {
    if (nx - x < -1) {
      if (ny - y < 0) {
        return sum;
      }
      ny--;
      nx = x + 1;
    }
    if (visited[`${nx}-${ny}`]) {
      sum += visited[`${nx}-${ny}`];
    }
    return this._getSumOfNeighbours(visited, x, y, --nx, ny, sum);
  }
}

module.exports = Advent3;
