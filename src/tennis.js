const scoresBoard = [];
const playerAScores = [];
const playerBScores = [];

function getScore(playerScores) {
  if (!playerScores.length) {
    return 15;
  } else if (playerScores.length === 1) {
    return 30;
  } else if (playerScores.length === 2) {
    return 40;
  }
}

function showScores(scores) {
  for (let i = 0; i < scores.length; i++) {
    const s = scores[i];
    if (s === 'A') {
      const score = getScore(playerAScores);
      scoresBoard.push({
        team: s,
        score
      });
      playerAScores.push(s);
    } else if (s === 'B') {
      const score = getScore(playerBScores);
      scoresBoard.push({
        team: s,
        score
      });
      playerBScores.push(s);
    }

    const aScores = scoresBoard.filter(sb => sb.team === 'A');
    const aResult = aScores[aScores.length - 1] ? aScores[aScores.length - 1].score : 0;

    const bScores = scoresBoard.filter(sb => sb.team === 'B');
    const bResult = bScores[bScores.length - 1] ? bScores[bScores.length - 1].score : 0;

    console.log(`In Game: A ${aResult} - B ${bResult}`);

    if (playerAScores.length === 3 && playerAScores.length > playerBScores.length) {

    }
  }

  // console.log('Player A scores is', playerAScores);
  // console.log('Player B scores is', playerBScores);
  // console.log(scoresBoard);
}

showScores(['A', 'B', 'A', 'A']);
