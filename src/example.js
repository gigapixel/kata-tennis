let input = ['A', 'B', 'B', 'B','A','A','A'];
let scoreA = 0;
let scoreB = 0;
let deuce = null;
let gemescore = [0, 15, 30, 40, 'Adv'];
let isEnd = false;

input.forEach(s => {
  if(scoreA >= 3 && scoreB >= 3){
    if(!deuce){
      deuce = s;
      if (s === 'A') {
        scoreA++;
      }
      else if (s === 'B') {
        scoreB++;
      }
    }else{
      if(deuce === s){
        console.log(deuce);
        // winner s
        // if (s === 'A') {
        //   scoreA++;
        // }
        // else if (s === 'B') {
        //   scoreB++;
        // }
        isEnd = true;
        return;
      }else{
        deuce = null;
          scoreA = 3;
          scoreB = 3;
          isEnd = false;
      }
    }
  }else{
    if (s === 'A') {
      scoreA++;
    }
    else if (s === 'B') {
      scoreB++;
    }
  }
});

if (isEnd){

}
if(scoreA >= 4){
  console.log('A is winner : Game - ' + gemescore[scoreB]);
} else if (scoreB >= 4){
  console.log('B is winner : Game - ' + gemescore[scoreA]);
}else{
  console.log('in game A = ' + gemescore[scoreA] + ' - B= ' + gemescore[scoreB]);
}

// summary


export function  alwaysReturn1() {
  return 1;
}

console.log(alwaysReturn1());

