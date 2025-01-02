//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.



/*-------------------------------- Constants --------------------------------*/
const gameboard = document.querySelector('.board');
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');
const restartBut = document.querySelector('#restartButton');
const players = "X" && "O";
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  

/*---------------------------- Variables (state) ----------------------------*/
let board = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
];
let turn = "X";
let winner = false;
let tie = false;
let runnung = false;


/*------------------------ Cached Element References ------------------------*/





/*-------------------------------- Functions --------------------------------*/
function inti();

function init() {
 squareEls.forEach(squareEl => squareEl.addEventListener("click", handleClick));
 restartBut.addEventListener("click", render);
 messageEl.textContent = ` Its ${turn}'s turn`
 let running = true;
}

function handleClick() {
  const squareIndex = this.getAttribute('sqr');
  

  if(board[squareIndex] !== '' || !runnung) {
    return;
  }
  placePiece(this, squareIndex);
  checkForWinner();

}

function placePiece(squareEl, index) {
  board[index] = turn;
  squareEl.textContent = turn;
}

function udpdateMessage() {

}

function checkForWinner() {
 let wonRound = false;
 for(let i = 0; i < winningCombos.length; i++) {
    const condition = winningCombos[i];
    const sqrA = board[condition[0]];
    const sqrB = board[condition[1]];
    const sqrC = board[condition[2]];

    if(sqrA == "" || sqrB == "" || sqrC == ""){
        continue;
    }
    if(sqrA == sqrB && sqrB == sqrC) {
        wonRound = true;
        break;
    }
 }
 if(wonRound == true){
    messageEl.textContent = `${turn} wins`
    let running = false;
 } else if (!board.includes("")) {
    messageEl.textContent = `Tie!`;
    let running = false;
 } else {
    switchPlayerTurn();
 }
}

function checkForTie() {

}

function switchPlayerTurn() {
 turn = (turn == 'X') ? 'O' : 'X';
 messageEl.textContent = `${turn} 's turn`;
}




function render() {
  updateBoard();
  udpdateMessage();

}
/*----------------------------- Event Listeners -----------------------------*/



