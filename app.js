let gameSeq=[];
let userSeq=[];
let h2 = document.querySelector("h2");
let btns = ["red","green","yellow","blue"];

let started = false;
let level= 0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started= true;
        levelup();
    }
});
function buttonFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
     btn.classList.remove("flash");
    }, 200);
 };

 function userflash(btn){
    btn.classList.add("uflash");
    setTimeout(function(){
     btn.classList.remove("uflash");
    }, 200);
 }

function levelup(){
    userSeq=[];
    level++;
  h2.innerText = `Level ${level}`;
    let randomIdx = Math.floor(Math.random()*4);
    let randomcolor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomcolor}`);
    gameSeq.push(randomcolor);
    console.log(gameSeq);
    buttonFlash(randombtn);
}

function btnpress(){
      let btn = this;
      buttonFlash(btn);
    let usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    console.log(userSeq);
    checkans(userSeq.length-1);
    
}

let allbtn = document.querySelectorAll(".btn");
for(let btn of allbtn){
    btn.addEventListener("click",btnpress);
};

function checkans(idx){
    if (gameSeq[idx] === userSeq[idx]) {
        if (gameSeq.length === userSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML= `Game Over! Your score is ${level} <br> Press any key to start again`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
    
}

function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}