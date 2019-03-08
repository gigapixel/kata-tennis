export function playing(players) {
  let playerA = [];
  let playerB = [];

  for (let player of players) {
    if (player === 'A') playerA.push(getScore(playerA));
    if (player === 'B') playerB.push(getScore(playerB));

    let currentA = playerA[playerA.length - 1] || 0;
    let currentB = playerB[playerB.length - 1] || 0;
    if (playerA.length > 3 && (playerA.length - playerB.length) >= 2) return `Winner is A: Game - ${currentB}`;
    if (playerB.length > 3 && (playerB.length - playerA.length) >= 2) return `Winner is B: ${currentA} - Game`;
    if (currentA === 'A' && currentB === 'A') {
      playerA.splice(playerA.length - 1, 1);
      playerB.splice(playerB.length - 1, 1);
    }
  }

  return `Ingame: ${(playerA[playerA.length - 1] || 0)} - ${(playerB[playerB.length - 1] || 0)}`;
}

export function getScore(score) {
  switch (score.length) {
    case 0: return 15;
    case 1: return 30;
    case 2: return 40;
    case 3: return 'A';
    default: return 'G';
  }
}


const res = playing(['A', 'B', 'A', 'B', 'A']); 
console.log('res', res);