const scoreBoards = [];
const playerA = [];
const playerB = [];

function playing(players) {
  for(let i = 0; i < players.length; i++ ) {
    let player = players[i];
    let score;
    if (player === 'A') {
      score = getScores(playerA);
      playerA.push(score);
    } else if(player === 'B') {
      score = getScores(playerB);
      playerB.push(score);
    }

    scoreBoards.push({team: player, score});

    // set 4
    // if (i === 3) {
      let currentA = playerA[playerA.length - 1] || 0;
      let currentB = playerB[playerB.length - 1] || 0;
      if (playerA.length === 4) {
        if (playerA.length - playerB.length >= 2) {
          console.log('Winner A:', currentA);
          return;
        } else if (playerB.length - playerA.length >= 2) {
          console.log('Winner B:', currentB);
          return;
        }
      }
      console.log(`In Game => A:${currentA || 0} - B: ${currentB || 0}`);
    // }
  }

  console.log('—-> scoreBoards', scoreBoards);
}

function getScores(player) {
  let length = player.length;
  switch (length) {
    case 0:
      return 15;
    case 1:
    return 30;
    case 2:
    return 40;
    default:
    return 'A';
  }
}

playing(['A', 'A', 'B', 'B', 'A', 'B', 'B', 'A']);