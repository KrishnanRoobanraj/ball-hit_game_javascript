const SPEED = .02

export default class Paddle {

    constructor(paddleElem){
        this.paddleElem = paddleElem
    }

    get position () {

        return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"))
    }

    set position (value){

        this.paddleElem.style.setProperty("--position",value)
    }

    update( change , ballheight){

        this.position += SPEED * change * (ballheight - this.position)

    }


    borderp() {

        return this.paddleElem.getBoundingClientRect()
    }

    reset(){
        this.position = 50;
    }


}