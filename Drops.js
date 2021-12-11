class Drops{
    constructor(x,y){
      var options={
        restitution : 0.4
      }
      this.rain = Bodies.circle(x,y,5,options);
      World.add(world,this.rain);
    }
    update(){
        if(this.rain.position.y > height){
          Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})   
        }
    }
    display(){
        // var position = this.rain.position;
        // var angle = this.rain.angle;

        translate(position.x,position.y);
        rotate(angle);
        ellipse(this.rain.position.x,this.rain.position.y,5,5);
        

    }
}