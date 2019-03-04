export function mainReturn(){
  const input = ['A','B','A','B','A','B','A','A'];
  const playercount = input.filter((item, index) => input.indexOf(item) == index);
  if( playercount.length > 2){
    console.log('case player > 2');
  }else{
    const playerName1 = playercount[0];
    const playerName2 = playercount[1];
    let player1 = 0;
    let player2 = 0;
    input.some(element => {
      if(element === playerName1){
        player1 += 1;
      }else{
        player2 += 1;
      }
      if(player1 === 3 && player2 === 3){
        player1  -= 1;
        player2  -= 1;
      }
      if(player1 >= 4 || player2 >= 4){
        console.log(`Winner is ${player1 >= 4 ? playerName1 : playerName2}`);
        return true;
      }else{
        console.log(`InGame : ${checkPoint(player1)} - ${checkPoint(player2)}`);
      }
    });
  }
}

function checkPoint(input){
  let result;
  switch(input){
    case 0: result = 0;
    break;
    case 1: result = 15;
    break;
    case 2: result = 30;
    break;
    case 3: result = 40;
    break;
    default: result = 'Winner';
    break;
  }
  return result;
}


// input [A,B,A,A,A]
// output winner is A : Game - 15

// input [A,B,A]
// InGame : 30 - 15

console.log(mainReturn());
