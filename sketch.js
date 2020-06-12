const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1,backgroundImg;
var gameState="rest"
var sc=0;
function preload(){
    time();
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;                                                                     
    ground = new Ground(600,height,1200,20)
    base = new Ground(150,305,300,170)
    box1 = new Box(700,250,70,70);
    box = new Box(700,320,70,70);
    box0 = new Box(920,320,70,70)
    box2 = new Box(920,250,70,70);
    pig1 = new Pig(810, 350);
    pig2 = new Pig(810,150)
    log1 = new Log(810,260,300, PI/2);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);
    pig4 = new Pig(810,200)
    log3 =  new Log(810,180,300, PI/2);
    log2 =  new Log(810,180,300, PI/2);
    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    bird = new Bird(100,100);
    slingshot = new Slingshot(bird.body,{x:200,y:50})

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }else{
        background("aqua");
    }
    Engine.update(engine);
   /* console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);*/
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();
    box3.display();
    box.display();
    box0.display();
    box4.display();
    pig3.display();
    pig3.score();
    log2.display();
    pig4.display();
    pig4.score();
    pig2.display();
    pig2.score();
    log3.display();
    box5.display();
    log4.display();
    log5.display();
    bird.display();
    base.display();
    slingshot.display();
}
function mouseDragged(){
    if (gameState==="rest"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState="inplay"
}

function keyPressed(){
   if (keyCode===32){
      slingshot.reset(bird.body);
      gameState==="rest"
   }

}

async function time(){
    var dt=await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var json=await dt.json()
    var api=json.datetime.slice(11,13)
    console.log(api)
    if (api<=17&&api>=6){
        backgroundImg=loadImage("sprites/bg.jpg")
    }else{
        backgroundImg=loadImage("sprites/bg2.jpg")
    }
}