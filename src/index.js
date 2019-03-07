const point = [0, 15, 30, 40];
// const input = ['A', 'A', 'A', 'A', 'B', 'B']
let count = 0;
let pointA = 0;
let pointB = 0;
let deuce = false;
let isWinner = false;

export function calculatePoint(input) {
  for (let item of input) {
    count++;

    if (item === 'A') {
      pointA++;
    } else if (item === 'B') {
      pointB++;
    }
    if (pointA === 4 && pointB < 4 && !deuce) {
      //console.log('Game - ' + point[pointB]);
      isWinner = true;
      return 'Winner is A : Game - ' + point[pointB];

    } else if (pointB === 4 && pointA < 4 && !deuce) {
      isWinner = true;
      //console.log(point[pointA] + ' - Game');
      return + 'Winner is B : ' + point[pointA] + ' - Game';

    } else if (pointA === 3 && pointB === 3) {
      deuce = true;
    }
    if (deuce) {

      if (pointA - pointB === 2) {
        if (count === input.length) {
          isWinner = true;
          return ('Winner is A: Game -' + pointB);
        }
      } else if (pointB - pointA === 2) {
        if (count === input.length) {
          console('Winner is B:' + pointA + '- Game');
          return ('Winner is B:' + pointA + '- Game');
        }

      } else {
        if (count === input.length) {
          console('In Game 40 - 40');
          return ('In Game 40 - 40');
        }
        if (!isWinner && !deuce) {
          let scoreA = point[pointA] === undefined ? 0 : point[pointA];
          let scoreB = point[pointB] === undefined ? 0 : point[pointB];
          return ('In Game :' + scoreA + ' - ' + scoreB);
        }
      }
    }
  }
}