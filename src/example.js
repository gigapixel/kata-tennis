import * as _ from 'lodash'

let input1 = ['A', 'B', 'B', 'B', 'B', 'B', 'B', 'B'];
let input2 = ['A', 'B', 'A', 'B', 'B', 'B', 'B'];
let input3 = ['A', 'B', 'A', 'A', 'B', 'A', 'B'];
let scoreArray = [0, 15, 30, 40];

function player(input) {
  let playerA = _.uniq(input)[0];
  let playerB = _.uniq(input)[1];
  let scoreA = 0;
  let scoreB = 0;
  let due = false;
  let result = 'in game';
  for (let p of input) {
    if (p === playerA) scoreA++;
    if (p === playerB) scoreB++;
    if (scoreA === 4 || scoreB === 4) {
      if ((scoreA - scoreB) >= 2) {
        result = 'A Win';
        break;
      }
      if ((scoreB - scoreA) >= 2) {
        result = 'B Win';
        break;
      }
    }
    if (scoreA === scoreB && scoreA === 3) {
      due = true;
    }
    if (due) {
      if ((scoreA - scoreB) === 2) {
        result = 'A Win';
        break;
      }
      if ((scoreB - scoreA) === 2) {
        result = 'B Win';
        break;
      }
    }
  }
  return result;
}

console.log(player(input1));
//console.log(player(input2));
//console.log(player(input3));