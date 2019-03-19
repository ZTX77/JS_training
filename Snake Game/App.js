const board =[];
const boardWidth = 26;
const boardHeight =16;
var boardElement = document.getElementById('board');

var snakeX;
var snakeY;
var snakeDirection;
var snakeLength;
var score = 0;


function initGame() {
    const boardElement = document.getElementById('board');

    for (let y = 0; y < boardHeight; ++y) {
        var row = [];
        for (let x = 0; x < boardWidth; ++x) {
            var cell = {};

            cell.element = document.createElement('div');

            //adauga la bord
            boardElement.appendChild(cell.element);
            row.push(cell);
        }
        // adauga randul pe board
        board.push(row);
    }
    startGame();

    // autoapelare cu timeout
    gamePlay();
}

function placeFood() {
    var foodX = Math.floor(Math.random() * boardWidth);
    var foodY = Math.floor(Math.random() * boardHeight);

    board[foodY][foodX].food = 1;
}

function startGame() {
    // pozitia de start
    snakeX = Math.floor(boardWidth / 2);
    snakeY = Math.floor(boardHeight / 2);
    snakeLength = 3;
    snakeDirection = 'Right';

    // curata board-ul
    for (let y = 0; y < boardHeight; ++y) {
        for (let x = 0; x < boardWidth; ++x) {
            board[y][x].snake = 0;
            board[y][x].food = 0;
        }
    }

    // pozitia de start si lungimea initiala
    board[snakeY][snakeX].snake = snakeLength;

    // plaseaza prima mancare pe board
    placeFood();
}

function gamePlay() {

    // update la pozitie in functie de directie
    switch (snakeDirection) {
        case 'Up':    snakeY--; break;
        case 'Down':  snakeY++; break;
        case 'Left':  snakeX--; break;
        case 'Right': snakeX++; break;
    }

    // coliziune
    if (snakeX < 0 || snakeY < 0 || snakeX >= boardWidth || snakeY >= boardHeight || board[snakeY][snakeX].snake > 0) {
        alert(`Game Over! Your final score is: ${score}`)
        startGame();
        score =0;
        document.querySelector('.score').innerText = score;
    }

    // eat
    if (board[snakeY][snakeX].food === 1) {
        document.querySelector('.score').innerText = ++score;
        snakeLength++;
        board[snakeY][snakeX].food = 0;
        placeFood();
    }

    // update the board
    board[snakeY][snakeX].snake = snakeLength;

    // parcurge tot boardul si face update la fiecare cell
    for (let y = 0; y < boardHeight; ++y) {
        for (let x = 0; x < boardWidth; ++x) {
            var cell = board[y][x];

            if (cell.snake > 0) {
                cell.element.className = 'snake';
                cell.snake -= 1;
            }
            else if (cell.food === 1) {
                cell.element.className = 'food';
            }
            else {
                cell.element.className = '';
            }
        }
    }

    setTimeout(gamePlay, 1000 / snakeLength);
}

// directionarea sarpelui
function keyPressHandler(event) {

    switch (event.key) {
        case 'ArrowUp': snakeDirection = 'Up'; break;
        case 'ArrowDown': snakeDirection = 'Down'; break;
        case 'ArrowLeft': snakeDirection = 'Left'; break;
        case 'ArrowRight': snakeDirection = 'Right'; break;
        default: break;
    }
    event.preventDefault();
}
