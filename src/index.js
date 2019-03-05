const point = [15, 30, 40];

// const input = ['A', 'B', 'B', 'B', 'A', 'B'];
// const input = ['B', 'B', 'B', 'B', 'A'];
// const input = ['A', 'A', 'A', 'A', 'B'];
const input = ['B', 'B', 'B', 'A', 'A','A','B','A','A'];

// const input = ['A', 'B', 'B', 'B', 'A', 'A', 'A', 'B', 'B', 'B'];

let pointA = 0, pointB = 0;
let deuce = false;
let isWinner = false;

function calculatePoint(input) {
  for (i of input) {
    if (i === 'A') {
      pointA++;
    }
    if (i === 'B') {
      pointB++;
    }
    //  ========================================= //

    if (pointA === 4 && pointB <= 3 && !deuce) {
      let score = point[pointB - 1] === undefined ? 0 : point[pointB - 1];
      isWinner = true;
      console.log('A is winner Game - ' + score);
      break;
    } else if (pointB === 4 && pointA <= 3 && !deuce) {
      let score = point[pointA - 1] === undefined ? 0 : point[pointA - 1];
      isWinner = true;
      console.log('B is winner Game - ' + score);
      break;
    }

    if (pointA === 3 && pointB === 3) {
      deuce = true;
    }


    if (deuce) {
      if (pointA - pointB === 2) {
        console.log('A is winner Game - 40');
        isWinner = true;
        break;
      } else if (pointB - pointA === 2) {
        console.log('B is winner Game - 40');
        isWinner = true;
        break;
      } else {
        if (pointA > pointB) {
          console.log('A  Adv - 40');
        } else if (pointB > pointA) {
          console.log('B  Adv - 40');
        } else {
          console.log('deuce  40 - 40');
        }
      }
    }
  }

  if (!isWinner && !deuce) {
    let scoreB = point[pointB - 1] === undefined ? 0 : point[pointB - 1];
    let scoreA = point[pointA - 1] === undefined ? 0 : point[pointA - 1];
    console.log('in Game A :' + scoreA + ' B: ' + scoreB);
  }
}


calculatePoint(input);