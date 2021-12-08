const INITIAL_VELOCITY = 0.025;
const VELOCITY_INCREASE = 0.00001

export default class Ball {


    constructor(ballElem){
    this.ballElem = ballElem
    this.reset();
}


borderBouncing() {

    return this.ballElem.getBoundingClientRect();

}


get x () {

    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))

}

set x (value) {

    this.ballElem.style.setProperty("--x",value)

}

get y () {

    return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"))

}

set y (value) {

    this.ballElem.style.setProperty("--y",value)

}


reset(){

    this.x = 50;
    this.y = 50;
    this.direction = { x: 0  }

   while( Math.abs(this.direction.x) <= .2  || Math.abs(this.direction.x) >= .9){

    const heading = RandomNumberBetween( 0 , 2 * Math.PI )
    this.direction = { x : Math.cos(heading) , y: Math.sin(heading) }

   }

   this.velocity = INITIAL_VELOCITY
  
   console.log(this.direction)

}







 update(diff , paddleborder ){

this.x += this.direction.x * this.velocity * diff
this.y += this.direction.y * this.velocity * diff
this.velocity += VELOCITY_INCREASE * diff 

const border = this.borderBouncing();

if(border.bottom >= window.innerHeight || border.top <= 0){
    this.direction.y *= -1
}

// if(border.right >= window.innerWidth || border.left <= 0 ){
//     this.direction.x *= -1
// }

if(paddleborder.some(r => isCollision(r, border))){
    this.direction.x *= -1
}





 }





}


function isCollision ( pad , ball ){
    
    return(  pad.left <= ball.right && pad.right >= ball.left && pad.bottom >= ball.top && pad.top <= ball.bottom)
}

function RandomNumberBetween(min , max ){

  return  Math.random() * (max - min ) + min
}