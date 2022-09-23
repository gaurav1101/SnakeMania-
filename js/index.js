//game constants
let inputdir = { x: 0, y: 0 };
let speed = 10;
let lastPaintTime = 0;
let snakearr = [{ x: 13, y: 15 }];
let score =0;
let food = { x: 10, y: 5 }

//functionality

function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {   // this is to render the new frame after 0.5 sec
        //console.log("test")
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(snake){
    for (let i = 1; i <= snakearr.length-1 ; i++) {
        if ((snake[i].x === snake[0].x) && (snake[i].y === snake[0].y)) {
            return true;
        }
        }
        if((snake[0].x >= 18|| snake[0].x <= 0) ||  (snake[0].y >=18 || snake[0].y <= 0))
        {
            return true;

    }
}

function gameEngine() {
    // Part 1: updating the snake array
    //scoreElement=document.getElementById('scoreboard');

   
    //scoreElement.innerHTML="Your Score:"+ score;

    if (isCollide(snakearr)) {

        alert("game over press any key to play again");
        score = 0;
        scoreElement.innerHTML= score;
        snakearr = [{ x: 13, y: 15 }];
         inputdir = { x: 0, y: 0 };
         
    }

    //if snake have eaten the food increment the score and regenerate the food
    if (snakearr[0].x === food.x && snakearr[0].y === food.y) {
        score++;
        scoreElement.innerHTML= score;
        snakearr.unshift({ x: snakearr[0].x + inputdir.x, y: snakearr[0].y + inputdir.y });
        let a = 2, b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) }
    }

    
    
    //scoreElement.innerHTML=score;
    //Move the snake

    for (let i = snakearr.length - 2; i >= 0; i--) {
        snakearr[i + 1] = { ...snakearr[i] };
    }
    snakearr[0].x += inputdir.x;
    snakearr[0].y += inputdir.y;

    //part 2: Display the snake and food

    //display the food
    board.innerHTML = "";
    
    snakearr.forEach((e, index) => {
        snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;

        if (index === 0) {
            snakeElement.classList.add("head");
        }
        else {
            snakeElement.classList.add("snake");
        }

        board.appendChild(snakeElement);

    });

    //display the food
    foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food");
    board.appendChild(foodElement);


     //score board
     
    scoreElement = document.createElement("div");
    scoreElement.style.gridRowStart = 18;
    scoreElement.style.gridColumnStart = 18;
    scoreElement.classList.add("scoreboard");
    scoreElement.innerHTML="Your Score:" + score;
    board.appendChild(scoreElement);


   
   
}

//main logic

//The window.requestAnimationFrame() method tells the browser that you wish to perform an animation 
//and requests that the browser calls a specified function to update an animation before the next repaint. 
//The method takes a callback as an argument to be invoked before the repaint.
window.requestAnimationFrame(main);

window.addEventListener('keydown', e => {
    inputdir: [x = 0, y = 1];

    switch (e.key) {
        case 'ArrowUp':
            console.log('UP');
            inputdir.x = 0;
            inputdir.y = -1;
            break;
        case 'ArrowDown':
            console.log('down');
            inputdir.x = 0;
            inputdir.y = 1;
            break;
        case 'ArrowLeft':
            console.log('left');
            inputdir.x = -1;
            inputdir.y = 0;
            break;
        case 'ArrowRight':
            console.log('right');
            inputdir.x = 1;
            inputdir.y = 0;
            break;
        case 'Space':
            console.log('space');

            break;
        default:
        // code block
    }
})