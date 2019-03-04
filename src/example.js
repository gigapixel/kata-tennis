import * as _ from 'lodash'

let scoreArray = [0, 15, 30, 40];
export function alwaysReturn1(inputs) {
  let player1score = 0;
  let player2score = 0;
  let p1name = _.uniqBy(inputs)[0];
  let p2name = _.uniqBy(inputs)[1];
  let due1 = 0;
  let due2 = 0;
  console.log('p2name', p2name);
  console.log('p1name', p1name);
  // let p2name = inputs.fliter(distinct)[1];
  // console.log(p1name);
  let result;
  inputs.forEach(t => {

    if (t === p1name) {
      // if (player1score < 3) {
      player1score++;
      // }
    } else if (t === p2name) {
      // if (player2score < 3) {
      player2score++;
      // }
    }
    if (player1score === 3 && player2score === 3) {
      if (t === p1name) {
        due1++;
      } else if (t === p2name) {
        due2++;
      }
      if (due1 === 1 && due2 === 1) {
        due1 = 0;
        due2 = 0;
      }
      if (due1 === 2) {
        result = (p1name + ' is winner:' + 'Game - ' + scoreArray[3])
      } else if (due2 === 2) {
        result = (p2name + ' is winner:' + 'Game - ' + scoreArray[3])
      }

    }

    console.log('player1score', player1score);
    if (player1score === 4) {
      result = (p1name + ' is winner:' + 'Game - ' + scoreArray[player2score])
    } else if (player2score === 4) {
      result = (p2name + ' is winner:' + 'Game - ' + scoreArray[player1score])
    }


  });

  return result;
}


console.log(alwaysReturn1(['A', 'A', 'A', 'B', 'B', 'B', 'B']));
