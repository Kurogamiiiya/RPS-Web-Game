let player,bot,score = 0;
let i = ['rock','paper','scissor'];
let scoreText = document.getElementById("score");
let resultText = document.getElementById("result");
const playerImg =  document.getElementById("playerImg"),botImg = document.getElementById("botImg");
const img = ["img/6d7cad6b8cba83cca254bea572f522c3 (1).jpg","img/6d7cad6b8cba83cca254bea572f522c3 (2).jpg","img/6d7cad6b8cba83cca254bea572f522c3 (3).jpg"];

function botTurn(){
    let a = Math.floor(Math.random() * 3);
    bot = i[a];
    console.log("Bot : " + bot);
    botImg.src=img[a];
    animateResult();
}

function rock(){
    player = i[0]; 
    console.log("Player : " + player);
    botTurn();
    play(player,bot);
    console.log("Score: " + score);
    scoreText.textContent=score;
    playerImg.src=img[0];
    animateResult();

}

function paper(){
    player = i[1]; 
    console.log("Player : " + player);
    botTurn();
    play(player,bot);
    console.log("Score: " + score);
    scoreText.textContent=score;
    playerImg.src=img[1];
    animateResult();

}

function scissor(){
    player = i[2]; 
    console.log("Player : " + player);
    botTurn();
    play(player,bot);
    console.log("Score: " + score);
    scoreText.textContent=score;
    playerImg.src=img[2];
    animateResult();

}

function play(a,b){
    if(a == b){
        console.log("draw");
        resultText.textContent="DRAW!";
    }else if(a == i[0] &&  b == i[1]){
        console.log("Lose");
        score--;
        resultText.textContent="LOSE!";
    }else if(a == i[0] &&  b == i[2]){
        console.log("Win");
        score++;
        resultText.textContent="WIN!";
    }else if(a == i[1] &&  b == i[0]){
        console.log("Win");
        score++;
        resultText.textContent="WIN!";
    }else if(a == i[1] &&  b == i[2]){
        console.log("Lose");
        score--;
        resultText.textContent="LOSE!";
    }else if(a == i[2] &&  b == i[1]){
        console.log("Win");
        score++;
        resultText.textContent="WIN!";
    }else if(a == i[2] &&  b == i[0]){
        console.log("Lose");
        score--;
        resultText.textContent="LOSE!";
    }
}

function animateResult(){
    playerImg.classList.add("slide-left");
    botImg.classList.add("slide-right");

    playerImg.addEventListener('animationend',removeAnimation);
}

function removeAnimation(){
    playerImg.classList.remove("slide-left");
    botImg.classList.remove("slide-right");
}
