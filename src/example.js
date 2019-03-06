function isWin(playerScore) {
  if (playerScore[playerIndex] === 4 && playerScore[otherPlayerIndex] <= 3) return true;
  if (playerScore[playerIndex] === 5 && playerScore[otherPlayerIndex] === 4) return true;
  return false;
}

async function main(inputArrays) {
  const player = [... new Set(input)];
  console.log('player', player);
  const playerScore = [];
  playerScore[0] = 0;
  playerScore[1] = 0;

  return new Promise((resolve) => {
    inputArrays.some(input => {
      const playerIndex = (input === player[0]) ? 0 : 1;
      const otherPlayerIndex = (playerIndex === 1) ? 0 : 1;
      playerScore[playerIndex]++;

      if (playerScore[playerIndex] === 4 && playerScore[otherPlayerIndex] < 3) {
        console.log('A');
        resolve({ status: `${player[playerIndex]} WIN`, score: playerScore });
      }
      if (playerScore[playerIndex] === 5 && playerScore[otherPlayerIndex] === 3) {
        console.log('B');
        resolve({ status: `${player[playerIndex]} WIN`, score: playerScore });
      }
      if (playerScore[playerIndex] === 4 && playerScore[otherPlayerIndex] === 4) {
        playerScore[playerIndex]--;
        playerScore[otherPlayerIndex]--;
      }
    });
    if (playerScore[0] >= 3 && playerScore[1] >= 3) {
      resolve({ status: 'DUCE', score: playerScore });
    } else {
      resolve({ status: 'IN GAME', score: playerScore });
    }
  });
}

const score = ['0', '15', '30', '40', 'A', 'G'];
const input = ['a', 'b', 'a', 'b', 'a', 'b', 'a', 'b', 'a'];
main(input).then(result => {
  console.log('result', result.status);
  console.log('rescoresult', result.score.map(s => score[s]));
});
