class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,100,100);
    this.image = loadImage("sprites/Aryan.png");
    this.image1= loadImage("sprites/smoke.png")
    this.array=[]
  }
  display(){
    super.display();
    if(this.body.position.x>210&&this.body.velocity.x>15){
      var position=[this.body.position.x,this.body.position.y]
      this.array.push(position)
    
    }
    for(var i=0;i<this.array.length;i=i+1){
      image(this.image1,this.array[i][0],this.array[i][1])
    }
  }
}