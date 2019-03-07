import * as _ from 'lodash'

let input1 = ['A', 'B', 'B', 'B', 'B', 'B', 'B', 'B'];
let input2 = ['A', 'B', 'A', 'B', 'B', 'B', 'B'];
let input3 = ['A', 'B', 'A', 'A', 'B', 'A', 'B'];
// let input4 = ['A', 'B', 'A', 'B', 'B', 'A', 'B', 'B']; //B win
// let input4 = ['A', 'B', 'A', 'B', 'B', 'A', 'A', 'A']; //A win
// let input4 = ['A', 'B', 'A', 'B', 'B', 'A', 'B', 'A']; //duel



let scoreArray = [0, 15, 30, 40];

export function player(input) {
  let playerA = _.uniq(input)[0];
  let playerB = _.uniq(input)[1];
  let scoreA = 0;
  let scoreB = 0;
  let due = false;
  let result = 'in game';

  for (let i of input) {
    if (i === playerA) scoreA++;
    if (i === playerB) scoreB++;

    if (scoreA === scoreB && scoreA === 3) due = true;

    if (due) {
      if ((scoreA - scoreB) >= 2) {
        result = score(due, scoreA, scoreB);
        break;
      }

      if ((scoreB - scoreA) >= 2) {
        result = score(due, scoreA, scoreB);
        break;
      }

    } else {
      if (scoreA === 4 && (scoreA - scoreB) >= 2) {
        result = score(due, scoreA, scoreB);
        break;
      }

      if (scoreB === 4 && (scoreB - scoreA) >= 2) {
        result = score(due, scoreA, scoreB);
        break;
      }

      if (scoreB === 4 && (scoreB - scoreA) >= 2) {
        result = score(due, scoreA, scoreB);
        break;
      }

    }
  }


  return score(due, scoreA, scoreB);
}
function score(due, scoreA, scoreB) {
  let result;
  if (due) {
    if (scoreA === scoreB) { result = 'In Game : 40 - 40'; }
    if ((scoreA - scoreB) === 1) { result = 'In Game : A - 40'; }
    if ((scoreA - scoreB) === 2) { result = 'Winner is A : Game - 40'; }
    if ((scoreB - scoreA) === 1) { result = 'In Game : 40 - A'; }
    if ((scoreB - scoreA) === 2) { result = 'Winner is B : 40 - Game'; }

  } else {
    if (scoreA === 4 && (scoreA - scoreB) >= 2) result = 'Winner is A : Game - ' + scoreArray[scoreB];
    if (scoreB === 4 && (scoreB - scoreA) >= 2) result = 'Winner is B : ' + scoreArray[scoreA] + ' - Game';
    if (scoreA < 4 && scoreB < 4) result = 'In Game : ' + scoreArray[scoreA] + ' - ' + scoreArray[scoreB];

  }
  return result;
}

// console.log(player(input1));
// console.log(player(input2));
// console.log(player(input3));