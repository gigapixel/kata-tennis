const point = [0, 15, 30, 40];

const input = ['A', 'A', 'A', 'A', 'B']; // A is winner : Game - 0
//const input = ['B', 'B', 'B', 'B', 'B']; // B is winner : Game - 0
//const input = ['A', 'A', 'B', 'A', 'A']; // A is winner : Game - 15
//const input = ['A', 'B', 'A', 'B' ]; // In game : 30-30
//const input = ['A', 'A', 'A', 'B', 'B' ]; // In game : 40-30
//const input = ['A', 'A', 'A', 'B', 'B', 'B' ]; // Deuce : A 40 - B 40
//const input = ['A', 'A', 'A', 'B', 'B', 'B', 'B']; // Deuce : A 40 - B Adv
//const input = ['A', 'A', 'A', 'B', 'B', 'B', 'A' ]; // Deuce : A Adv - B 40
//const input = ['A', 'A', 'A', 'B', 'B', 'B', 'A', 'B', 'B' ]; // Deuce : B Adv - B 40
//const input = ['A', 'A', 'A', 'B', 'B', 'B', 'B', 'B' ]; // B is winner : Game - 40
//const input = ['A', 'A', 'A', 'B', 'B', 'B', 'B', 'A' ]; // 40 : 40
//const input = ['A', 'A', 'A', 'B', 'B', 'B','A','B','A','B','A','B','A','B','A','B','A','B' ]; // Deuce : A 40 - B 40

let pointA = 0, pointB = 0;
let deuce = false;
let isWinner = false;
let count = 0;
calculatePoint(input);

export function calculatePoint(input) {
  
  for (let item of input) {

    count++;

    if (item === 'A') {
      pointA++;
    } else if (item === 'B') {
      pointB++;
    }


    if (pointA === 4 && pointB < 4 && !deuce) {
      console.log('Game - ' + point[pointB]);
      isWinner = true;
      return 'Game - ' + point[pointB];
      break;
    } else if (pointB === 4 && pointA < 4 && !deuce) {
      isWinner = true;
      console.log(point[pointA] + ' - Game');
      return point[pointA] + ' - Game';
      break;
    } else if (pointA === 3 && pointB === 3 && !deuce) {
      deuce = true;
    }

    if (deuce) {
      if (pointA - pointB === 2) {
        isWinner = true;
        //console.log('deuce');
        console.log('Game - 40');
        break;
      } else if (pointB - pointA === 2) {
        isWinner = true;
        //console.log('deuce');
        console.log('40 - Game');
        break;
      } else {
        if (pointA > pointB) {
          //console.log('deuce');
          if(count === input.length) {
            console.log('Deuce A - 40');
          }
        } else if (pointB > pointA) {
          if(count === input.length) {
            console.log('Deuce 40 - A');
          }
        } else {
          if(count === input.length) {
            console.log('40 - 40');
          }
        }    
      }
    }
  }

  if (!isWinner && !deuce) {
    let scoreA = point[pointA] === undefined ? 0 : point[pointA];
    let scoreB = point[pointB] === undefined ? 0 : point[pointB];

    console.log(`In game ${scoreA} - ${scoreB}`);
  }

}