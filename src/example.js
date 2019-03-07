

export class Tennis {
  constructor() {

    this.scoreA = 0;
    this.scoreB = 0;
    this.deuce = null;
    this.gameScore = [0, 15, 30, 40, 'A'];
    this.winner = null;
  }

  playGame(input) {

    input.forEach(e => {
      this.countScore(e);
      if (this.winner) {
        return;
      }
    });

    const result = this.showResult();
    console.log('result >>>>>>>>', result);
  }

  showResult() {
    if (this.winner) {
      if (this.winner === 'A') {
        return 'Winner is A : Game - ' + this.gameScore[this.scoreB];
      }
      if (this.winner === 'B') {
        return 'Winner is B : Game - ' + this.gameScore[this.scoreA];
      }
    }
    else {
      return 'Ingame : ' + this.gameScore[this.scoreA] + ' - ' + this.gameScore[this.scoreB];
    }
  }
  countScore(p) {

    if (this.winner)
      return;

    if (p === 'A') {
      this.scoreA++;
    }
    if (p === 'B') {
      this.scoreB++;
    }

    if (this.scoreA >= 3 && this.scoreB >= 3) {

      if (this.deuce) {
        if (this.deuce === p) {
          this.winner = p;
          this.deuce = null;
          return;
        }
        else {
          this.deuce = null;
          this.scoreA = 3;
          this.scoreB = 3;
        }
      }
      else {
        this.deuce = p;
      }
    }
    else{
      if (p === 'A'&&this.scoreA>=4) {
        this.winner = p;
      }
      if (p === 'B'&&this.scoreB>=4) {
        this.winner = p;
      }
    }


    // console.log();
  }

}


let input = ['A', 'B', 'B', 'B', 'B', 'A', 'A'];

// let input = ['A', 'A', 'A', 'B', 'B', 'B', 'B'];

let tennis = new Tennis();
tennis.playGame(input);
















// let isEnd = false;

// input.forEach(s => {
//   if(scoreA >= 3 && scoreB >= 3){
//     if(!deuce){
//       deuce = s;
//       if (s === 'A') {
//         scoreA++;
//       }
//       else if (s === 'B') {
//         scoreB++;
//       }
//     }else{
//       if(deuce === s){
//         console.log(deuce);
//         // winner s
//         // if (s === 'A') {
//         //   scoreA++;
//         // }
//         // else if (s === 'B') {
//         //   scoreB++;
//         // }
//         isEnd = true;
//         return;
//       }else{
//         deuce = null;
//           scoreA = 3;
//           scoreB = 3;
//           isEnd = false;
//       }
//     }
//   }else{
//     if (s === 'A') {
//       scoreA++;
//     }
//     else if (s === 'B') {
//       scoreB++;
//     }
//   }
// });

// if (isEnd){

// }
// if(scoreA >= 4){
//   console.log('A is winner : Game - ' + gameScore[scoreB]);
// } else if (scoreB >= 4){
//   console.log('B is winner : Game - ' + gameScore[scoreA]);
// }else{
//   console.log('in game A = ' + gameScore[scoreA] + ' - B= ' + gameScore[scoreB]);
// }

// // summary


// export function  alwaysReturn1() {
//   return 1;
// }

// console.log(alwaysReturn1());

