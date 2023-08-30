let gameSeq=[];
let userSeq = [];
let buttons = ["red","yellow","green","blue"]
let started = false;
let level = 0;
let highScore = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function (){
    // console.log("game started");
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp();
    }
});
function buttonFlash(button) {
    button.classList.add("flash");
    setTimeout(function () {
        button.classList.remove("flash")
    }, 300);
    console.log(gameSeq)
    // console.log("flashed");
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //random button
    let random = Math.floor(Math.random() * 3);
    let randomColor = buttons[random];
    gameSeq.push(randomColor);
    // console.log(randomColor);
    let randomButton = document.querySelector(`.${randomColor}`)
    // console.log(randomButton);
    buttonFlash(randomButton);
}
function check(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        if(level > highScore){
            highScore = level;
        }
        h2.innerHTML = `Oops! Game Over. Your score is <b>${level}</b> <br> Highest Score is ${highScore} <br> Press any key to restart...`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200);
        reset();
    }
}
function buttonPress(){
    buttonFlash(this);
    let color = this.getAttribute("id");
    // console.log(color);
    userSeq.push(color);
    check(userSeq.length-1);
}
let allButtons = document.querySelectorAll(".button");
for(let temp of allButtons){
    temp.addEventListener("click",buttonPress);
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}