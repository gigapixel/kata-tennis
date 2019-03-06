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

    if (due) {
      if (scoreA - scoreB === 2) {
        result = score(due, scoreA, scoreB);
        break;
      }
      if (scoreB - scoreA === 2) {
        result = score(due, scoreA, scoreB);
        break;
      }
    } else {
      if (scoreA === 4) {
        if (scoreA >= 2) {
          result = score(due, scoreA, scoreB);
          break;
        }
      }

      if (scoreB === 4) {
        if (scoreB >= 2) {
          result = score(due, scoreA, scoreB);
          break;
        }
      }
    }

    if (scoreA === 3 && scoreB === 3) {
      due = true;
    }
  }
  return score(due, scoreA, scoreB);
}
function score(due, scoreA, scoreB) {
  let result;
  if (due) {
    if (scoreA === scoreB) { result = 'in game score A : 40 , score B : 40'; }
    if ((scoreA - scoreB) === 1) { result = 'in game score A : A , score B : 40'; }
    if ((scoreA - scoreB) === 2) { result = 'A Win , score B : 40'; }
    if ((scoreB - scoreA) === 1) { result = 'in game score A : 40 , score B : A'; }
    if ((scoreB - scoreA) === 2) { result = 'B Win score A : 40'; }

  } else {
    if (scoreA - scoreB >= 2) result = 'A win : B score ' + scoreArray[scoreB];
    if (scoreB - scoreA >= 2) result = 'B win : A score ' + scoreArray[scoreA];
  }
  return result;
}

console.log(player(input1));
console.log(player(input2));
console.log(player(input3));