import * as _ from 'lodash'

let scoreArray = [0, 15, 30, 40];

export function player(input) {
  let playerA =  'A'
  let playerB =  'B'
  let scoreA = 0;
  let scoreB = 0;
  let due = false;
  let result = 'in game';

  for (let i of input) {

    (i === playerA) ? scoreA ++ : scoreA; (i === playerB) ? scoreB ++ : scoreB; due = (scoreA === scoreB && scoreA === 3) ? true : due;

    if (due) {
      if ((scoreA - scoreB) >= 2 || (scoreB - scoreA) >= 2) {break;}
    } else {
      if ((scoreA === 4 && (scoreA - scoreB) >= 2) || (scoreB === 4 && (scoreB - scoreA) >= 2) || (scoreB === 4 && (scoreB - scoreA) >= 2)) {break;}
    }
  }

  return score(due, scoreA, scoreB);
}
function score(due, scoreA, scoreB) {
  let result;
  if (due) {
    (scoreA === scoreB) ? result = 'In Game : 40 - 40' : '';
    ((scoreA - scoreB) === 1) ? result = 'In Game : A - 40' : '';
    ((scoreA - scoreB) === 2) ? result = 'Winner is A : Game - 40' : '';
    ((scoreB - scoreA) === 1) ? result = 'In Game : 40 - A' : '';
    ((scoreB - scoreA) === 2) ? result = 'Winner is B : 40 - Game' : '';

  } else {
    (scoreA === 4 && (scoreA - scoreB) >= 2) ? result = 'Winner is A : Game - ' + scoreArray[scoreB] : '';
    (scoreB === 4 && (scoreB - scoreA) >= 2) ? result = 'Winner is B : ' + scoreArray[scoreA] + ' - Game' : '';
    (scoreA < 4 && scoreB < 4) ? result = 'In Game : ' + scoreArray[scoreA] + ' - ' + scoreArray[scoreB] : '';

  }
  return result;
}
