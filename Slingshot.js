class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
        this.image1 = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }
    reset(ion){
        this.sling.bodyA=ion;
    }

    display(){
        image(this.image1,200,20);
        image(this.image2,170,20);
        /*image3(this.image,200,20);*/
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke(48,23,8)
            push();
            line(pointA.x, pointA.y, pointB.x+30, pointB.y-3);
            line(pointA.x, pointA.y, pointB.x-10, pointB.y);
            image(this.image3,pointA.x-30,pointA.y-10,15,30)
            pop();
        }
    }
    
}