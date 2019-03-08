import _ from 'lodash';
const point = [0, 15, 30, 40];
export function getResult(input = []) {
  let pointA = 0, pointB = 0, count = 0, deuce = false;
  for (let item of input) {
    (item === 'A') ? pointA++ : pointB++;
    let scoreA = _.get(point, pointA, 40), scoreB = _.get(point, pointB, 40);
    if (!deuce) {
      if (pointA === 4 && pointB < 4) return `Winner is A : Game - ${scoreB}`;
      else if (pointB === 4 && pointA < 4) return `Winner is B : ${scoreA} - Game`;
      deuce = (pointA === 3 && pointB === 3);
    } else {
      if (pointA - pointB >= 2) return `Winner is A : Game - ${scoreB}`;
      else if (pointB - pointA >= 2) return `Winner is B : ${scoreA} - Game`;
    }
    if (++count === input.length) {
      if (pointA - pointB === 1) return `In Game : A - ${scoreB}`;
      else if (pointB - pointA === 1) return `In Game : ${scoreA} - A`;
      return `In Game : ${scoreA} - ${scoreB}`;
    }
  }
}