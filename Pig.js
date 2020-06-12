class Pig extends BaseClass {
    constructor(x, y) {
   super(x,y,60,60)
   this.b=255
   this.image=loadImage("sprites/Ani.png")
    }
  display() {
    push()
    if (this.body.speed>2.5){
      this.b=this.b-10
      tint(255,this.b)
      image(this.image,this.body.position.x,this.body.position.y,50,50)
      World.remove(world,this.body)
    }
    else{
      super.display() 
    }
    pop()
    }
    score(){
      textSize(24)
      text("SCORE : "+sc,900,50)
      if (this.b<=0&&this.b>=-100){
       sc=sc+2
      }
    }


  };
  
