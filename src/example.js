function mainFunction(arr){
  const score = ['0','15','30','40','45','45'];
  let scorePlayer = [];
  let winnerStatus;
  
  const player = [...new Set(arr)];
  if(player.size>2) return "more two player";
  if(player.size<2) return "no compettiter";
  console.log(player)
  scorePlayer[0] = 0;
  scorePlayer[1] = 0;

  arr.some((key) => {
    const playerIndex = (key===player[0]) ? 0 : 1;
    const otherPlayerIndex = (playerIndex===0) ? 1 : 0;
    scorePlayer[playerIndex]++;
    //console.log(score[scorePlayer[0]]+'ต่อ'+score[scorePlayer[1]])
    if(scorePlayer[playerIndex]===4 && scorePlayer[otherPlayerIndex]<3){
      console.log('player ', player[playerIndex] , ' win');
      console.log(score[scorePlayer[0]]+'ต่อ'+score[scorePlayer[1]]);
      winnerStatus = true;
      return;
    }else if(scorePlayer[playerIndex]===5 && scorePlayer[otherPlayerIndex]===3){
      console.log(score[scorePlayer[0]]+'ต่อ'+score[scorePlayer[1]])
      console.log('player ', player[playerIndex] , ' win');
      winnerStatus = true;
      return;
    }else if(scorePlayer[playerIndex]===4 && scorePlayer[otherPlayerIndex]===4){
      scorePlayer[otherPlayerIndex] = scorePlayer[otherPlayerIndex]-1;
    }
  })
  if(!winnerStatus) console.log('ผู้เล่น'+player[0]+' '+score[scorePlayer[0]]+'ต่อ'+'ผู้เล่น'+player[1]+' '+score[scorePlayer[1]]);
}

console.log(mainFunction(['a','b','a','b','a','b','a','b']))