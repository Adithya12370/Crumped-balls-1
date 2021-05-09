
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world,box1,box2,box3,groundSprite,paper,paperSprite;

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(width/2,670,width,20)
	 paper = new Paper(200,300,20)
   
	 box1 = new Box(875,340,200,20);
	 box2 = new Box(785,300,20,100);
	 box3 = new Box(980,300,20,100);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  drawSprites();
 
}



