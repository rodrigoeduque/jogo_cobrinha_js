let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";


function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box)
}

function CriarCobrinha() {
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = "black";
        context.fillRect(snake[i].x, snake[i].y, box, box);

    }
}

function iniciarJogo() {
    criarBG();
    CriarCobrinha();

    //ponto de partida da cobrinha Posicao 0 X e Y
    let snakeX = snake[0].x;
    let snakeY = snake[0].x;

    if (direction == "right") {
        snakeX += box;
    }
    if (direction == "left") {
        snakeX -= box;
    }
    if (direction == "up") {
        snakeY += box;
    }
    if (direction == "down") {
        snakeY + -box;
    }
    
    snake.pop();


    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);