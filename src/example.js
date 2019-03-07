function showScore(playerScore, isWin) {
  const score = ['0', '15', '30', '40', 'A', 'GAME'];
  playerScore[0] = (playerScore[0] === 4 && isWin) ? 5 : playerScore[0];
  playerScore[1] = (playerScore[1] === 4 && isWin) ? 5 : playerScore[1];
  return `${score[playerScore[0]]} - ${score[playerScore[1]]}`;
}

export async function main(inputArrays) {

  const player = ['A', 'B'];
  // console.log('player', player);
  // let isDuce = false;
  const playerScore = [];
  playerScore[0] = 0;
  playerScore[1] = 0;

  return new Promise((resolve) => {
    inputArrays.some(input => {
      const playerIndex = (input === 'A') ? 0 : 1;
      const otherPlayerIndex = (playerIndex === 1) ? 0 : 1;
      playerScore[playerIndex]++;

      if (playerScore[playerIndex] === 4 && playerScore[otherPlayerIndex] < 3) {
        // normal win
        resolve({ status: `WINNER IS ${player[playerIndex]} : ${showScore(playerScore, true)}`, score: playerScore });
      }
      if (playerScore[playerIndex] === 5 && playerScore[otherPlayerIndex] === 3) {
        //duce win
        resolve({ status: `WINNER IS ${player[playerIndex]} : ${showScore(playerScore, true)}`, score: playerScore });
      }
      if (playerScore[playerIndex] === 4 && playerScore[otherPlayerIndex] === 4) {
        playerScore[playerIndex]--;
        playerScore[otherPlayerIndex]--;
        // isDuce = true;
      }
    });
    resolve({ status: `IN GAME : ${showScore(playerScore)}`, score: playerScore });
    // if (playerScore[0] >= 3 && playerScore[1] >= 3 && isDuce) {
    //   resolve({ status: `IN GAME : ${showScore(playerScore)}`, score: playerScore });
    // } else {
    //   resolve({ status: `IN GAME : ${showScore(playerScore)}`, score: playerScore });
    // }
  });
}


const input = ['A', 'B', 'A', 'B'];
main(input).then(result => {
  console.log('result', result.status);
  // console.log('rescoresult', result.score.map(s => score[s]));
});
