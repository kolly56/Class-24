const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground,pig1,log1,bo3,box4,box5,log2,log3,log4,pig2,bird;




function setup(){
     createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(700,300,73,73);
    box2=new Box(960,300,73,73);
    ground=new Ground(600,400,1200,20);
    pig1=new Pig(820,300);
    log1=new Log(830,200,360,PI/2)
    box3=new Box(700,160,73,73);
    box4=new Box(960,160,73,73);
    pig2=new Pig(820,160);
    log2=new Log(830,120,360,PI/2)
    box5=new Box(830,100,73,73);
    log3=new Log(765,50,130,PI/8)
    log4=new Log(895,50,130,-PI/8)
    bird=new Bird(30,30)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    
    box1.display();
    box2.display();
  ground.display();
pig1.display();
log1.display();
box3.display();
    box4.display();
  
pig2.display();
log2.display();
box5.display();
log3.display();
log4.display();
bird.display();
}