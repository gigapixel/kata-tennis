function mainFunction(arr){
  const score = ['0','15','30','40','45'];
  let scorePlayer = [];
  
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
    if(scorePlayer[playerIndex]===4 && scorePlayer[otherPlayerIndex]<3){
      console.log('player ', player[playerIndex] , ' win');
    }else if(scorePlayer[playerIndex]===5 && scorePlayer[otherPlayerIndex]===3){
      console.log('player ', player[playerIndex] , ' win');
    }
  })
  console.log(score[scorePlayer[0]]+'/'+score[scorePlayer[1]])
}

console.log(mainFunction(['a','b','a','a','a']))