
const randNum1 = Math.floor(Math.random() * 6) + 1;
const randNum2 = Math.floor(Math.random() * 6) + 1;
const randDie1 = 'images/dice' + randNum1 + '.png';
const randDie2 = 'images/dice' + randNum2 + '.png';
const heading = document.querySelector('h1');
const player1Die = document.querySelector('.img1');
const player2Die = document.querySelector('.img2');
const rollBtn1 = document.querySelector('.roll1');
const rollBtn2 = document.querySelector('.roll2');
const editBtn = document.querySelector('.editbtn');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
let player1Name = 'Player 1';
let player2Name = 'Player 2';



rollBtn1.addEventListener('click', function () {
  player1Die.src = randDie1;
});

rollBtn2.addEventListener('click', function () {
  player2Die.src = randDie2;
  if (randNum1 === randNum2) {
    heading.innerHTML = '<h3>🤝 DRAW!! <P>PLEASE REFRESH THE PAGE TO RESTART.</P></h3>'
  } else if (randNum1 < randNum2) {
    heading.innerHTML = ('<h3>👏 ' + player2Name.toUpperCase() + ' WINS! <P>PLEASE REFRESH THE PAGE TO RESTART.</P></h3>')
  } else {
    heading.innerHTML = ('<h3>👏 ' + player1Name.toUpperCase() + ' WINS! <P>PLEASE REFRESH THE PAGE TO RESTART.</P></h3>')
  }
});


editBtn.addEventListener('click', function () {
  player1Name = prompt('Enter Player One Name');
  player2Name = prompt('Enter Player Two Name');

  p1.innerHTML = player1Name;
  p2.innerHTML = player2Name;
});