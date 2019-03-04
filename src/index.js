const point = [15, 30, 40];
const input = ['A', 'A', 'A', 'B', 'B', 'B', 'B']; // In game : 40-15
// const input = ['A', 'B', 'A', 'A', 'A']; // A is winner : Game - 15
// const input = ['A', 'B', 'B', 'A', 'B', 'B']; // B is winner : Game - 30
// const input = ['A', 'B', 'B', 'A', 'A', 'B', 'A', 'B']; // In game : 40-40
// const input = ['A', 'B', 'B', 'A', 'A', 'B', 'A', 'B', 'B'];
let a = 0;
let b = 0;
let deuce = false;
let winner = false;

for (let i of input) {
    if (i === 'A') {
        a++;
    }
    if (i === 'B') {
        b++;
    }

    if (a >= 4 && b < 3) {
        console.log('A is winner : Game - ' + point[b - 1]);
        winner = true;
        break;
    } else if (b >= 4 && a < 3) {
        console.log('B is winner : Game - ' + point[a - 1]);
        winner = true;
        break;
    } else if (a === 3 && b === 3) {
        deuce = true;
    }

    if (deuce) {
        if (a - b === 2) {
            console.log('A is winner : Game - 40');
            winner = true;
            break;
        } else if (b - a === 2) {
            console.log('B is winner : Game - 40');
            winner = true;
            break;
        }
    }
}

if (!winner) {
    console.log('In game : ' + point[a - 1] + '-' + point[b - 1]);
}





