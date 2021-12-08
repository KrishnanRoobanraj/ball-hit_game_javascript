import Ball from './Ball.js';
import Paddle from './Paddle.js';

const ball = new Ball(document.getElementById("ball"))
const Playerpaddle = new Paddle(document.getElementById("player-paddle"))
const Computerpaddle = new Paddle(document.getElementById("computer-paddle"))
const playerScore = document.getElementById("player-score")
const computerScore = document.getElementById("computer-score")



let lastime;

function update(time) {

 if(lastime != null){

const diff = time - lastime;



 ball.update(diff , [Playerpaddle.borderp() , Computerpaddle.borderp()] );

 

Computerpaddle.update(diff, ball.y);

const hue =  parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"));

 document.documentElement.style.setProperty("--hue", hue + diff * 0.01)


if(isLose ()){
    
    handleLose();
    
}



}  

lastime = time
window.requestAnimationFrame(update);


}

function isLose() {

    const border  =  ball.borderBouncing(); 
    return border.right >= window.innerWidth || border.left <= 0

}



function handleLose() {

 const border = ball.borderBouncing();

if(border.right >= window.innerWidth ){
     playerScore.textContent = parseInt(playerScore.textContent) + 1
}else{
     computerScore.textContent = parseInt(computerScore.textContent) + 1
}
   
ball.reset();
Computerpaddle.reset();

}




document.addEventListener("mousemove",e => {
    Playerpaddle.position = (e.y / window.innerHeight) * 100 
})

window.requestAnimationFrame(update);


