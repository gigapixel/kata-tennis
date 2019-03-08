export class Tennis {
  constructor() {
    this.reset();
  }

  reset() {
    this.scoreA = 0;
    this.scoreB = 0;
    this.deuce = null;
    this.gameScore = [0, 15, 30, 40, "A"];
    this.winner = null;
  }

  addScore(player) {
    if (this.winner) return;

    if (this.scoreA >= 3 && this.scoreB >= 3) {
      if (this.deuce) {
        if (this.deuce === player) {
          this.winner = player;
          this.deuce = null;
        } else {
          this.deuce = null;
          this.scoreA = 3;
          this.scoreB = 3;
        }
        return;
      } else {
        this.deuce = player;
      }
    } else {
      if (player === "A" && this.scoreA >= 3) {
        this.winner = player;
        return;
      }
      if (player === "B" && this.scoreB >= 3) {
        this.winner = player;
        return;
      }
    }

    // add score
    if (player === "A") {
      this.scoreA++;
    }
    if (player === "B") {
      this.scoreB++;
    }
  }

  getResultText() {
      if (this.winner === "A") {
        return "Winner is A : Game - " + this.gameScore[this.scoreB];
      }
      if (this.winner === "B") {
        return "Winner is B : " + this.gameScore[this.scoreA] + " - Game";
      }
      return (
        "In Game : " +
        this.gameScore[this.scoreA] +
        " - " +
        this.gameScore[this.scoreB]
      );
  }

  playGame(input) {
    input.map((player, idx) => {
      this.addScore(player);
    });

    const result = this.getResultText();
    return result;
  }
}

let tennis = new Tennis();

let input = ["A"];
console.log(tennis.playGame(input));
tennis.reset();

input = ["A", "A"];
console.log(tennis.playGame(input));
tennis.reset();

input = ["A", "A", "A"];
console.log(tennis.playGame(input));
tennis.reset();

input = ["A", "A", "A", "A"];
console.log(tennis.playGame(input));
tennis.reset();

// Deuce

input = ["A", "A", "A", "B", "B", "B"];
console.log(tennis.playGame(input));
tennis.reset();

input = ["A", "A", "A", "B", "B", "B", "A"]; // In Game A-0
console.log(tennis.playGame(input));
tennis.reset();

input = ["A", "A", "A", "B", "B", "B", "B"];
console.log(tennis.playGame(input));
tennis.reset();

input = ["A", "A", "A", "B", "B", "B", "A", "B"];
console.log(tennis.playGame(input));
tennis.reset();
