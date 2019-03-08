export function mainFunctiuon(arr){
  const player = [...new Set(arr)];
  const scores = ['0','15','30','40','GAME','GAME'];
  const scores2 = ['0','15','30','40','A'];
  let duce = 0;
  let result = '';
  let winner;
  let playerScore =[];
  playerScore[0] = 0;
  playerScore[1] = 0;

  arr.some((value)=>{
    let playerIndex, otherPlayerIndex;
    playerIndex = (value === player[0]) ? 0 : 1;
    otherPlayerIndex = (value === player[0]) ? 1 : 0;
    playerScore[playerIndex]++;

    if(playerScore[playerIndex]===4 && playerScore[otherPlayerIndex]<3){
      result = `WINNER IS ${player[playerIndex]} : ${scores[playerScore[0]]} - ${scores[playerScore[1]]}`;
      winner = true;
      return result;
    }else if(playerScore[playerIndex]===5 && playerScore[otherPlayerIndex]===3){
      result = `WINNER IS ${player[playerIndex]} : ${scores[playerScore[0]]} - ${scores[playerScore[1]]}`;
      winner = true;
      return result;
    }

    if(playerScore[playerIndex]===4 && playerScore[otherPlayerIndex]===4){
      playerScore[otherPlayerIndex]--;
      playerScore[playerIndex]--;
    }
    if(playerScore[playerIndex]===3 && playerScore[otherPlayerIndex]===3) duce++;

  });
  if(!winner){
    result = `IN GAME : ${scores2[playerScore[0]]} - ${scores2[playerScore[1]]}`;
    if(playerScore[0]===3 && playerScore[1]===3){
      if(duce===1){
        result = `IN GAME : ${scores2[playerScore[0]]} - ${scores2[playerScore[1]]} (before duce)`;
      }else if(duce!==0 && duce > 1){
        result = `IN GAME : ${scores2[playerScore[0]]} - ${scores2[playerScore[1]]} (after duce)`;
      }
    }
  } 
  return result;
}


// console.log(mainFunctiuon(['A', 'B']))
