const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score=0;
  function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  stand=new Ground(470,300,300,20);
  //bottom row
  block1=new Box1(410,280,20,20);
  block2=new Box1(430,280,20,20);
  block3=new Box1(450,280,20,20);
  block4=new Box1(470,280,20,20);
  block5=new Box1(490,280,20,20);
  block6=new Box1(510,280,20,20);
  block7=new Box1(530,280,20,20);
  //middle row
  block8=new Box2(430,260,20,20);
  block9=new Box2(450,260,20,20);
  block10=new Box2(470,260,20,20);
  block11=new Box2(490,260,20,20);
  block12=new Box2(510,260,20,20);
  //second to top row
  block13=new Box3(450,240,20,20);
  block14=new Box3(470,240,20,20);
  block15=new Box3(490,240,20,20);
  //top row
  block16=new Box4(470,220,20,20);
  polygon=new Polygon(100,200,20);
  sling=new SlingShot(polygon.body,{x: 100,y: 100});
}

function draw() {
  background(255);  
  
  Engine.update(engine);
  text("Score :"+score,700,50);
  stand.display();
  block1.display();block1.score();
  block2.display();block2.score();
  block3.display();block3.score();
  block4.display();block4.score();
  block5.display();block5.score();
  block6.display();block6.score();
  block7.display();block7.score();
  block8.display();block8.score();
  block9.display();block9.score();
  block10.display();block10.score();
  block11.display();block11.score();
  block12.display();block12.score();
  block13.display();block13.score();
  block14.display();block14.score();
  block15.display();block15.score();
  block16.display();block16.score();
  polygon.display();
  sling.display();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}
