const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  block8=new Block(930,235,30,40)
  block9=new Block(960,235,30,40)
  block10=new Block(990,235,30,40)
  block11=new Block(1020,235,30,40)
  block12=new Block(1050,235,30,40)
  block13=new Block(960,195,30,40)
  block14=new Block(990,195,30,40)
  block15=new Block(1020,195,30,40)
  block16=new Block(990,155,30,40)
  ball = new Polygon(200,200,20)
  chain = new SlingShot(ball.body,{x:200,y:200})
  ground=Bodies.rectangle(1000,270,200,10,{isStatic:true})
  World.add(world,ground)
}

function draw() {
  background(128);  
  Engine.update(engine);
  fill("yellow")
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  fill("blue")
  ball.display()
  fill("red")
  chain.display()
  rectMode(CENTER)
  rect(1000,270,200,20)
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain.fly();
}