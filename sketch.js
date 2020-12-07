
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,roof,rope1;

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,200,350,30);

	bobObject1 = new Bob(300,350,50);
	bobObject2 = new Bob(350,350,50);
	bobObject3 = new Bob(400,350,50);
	bobObject4 = new Bob(450,350,50);
	bobObject5 = new Bob(500,350,50);

	rope1= new Rope(bobObject1.body,roofObject.body,-50*2,0);
    rope2= new Rope(bobObject2.body,roofObject.body,-25*2,0);
	rope3= new Rope(bobObject3.body,roofObject.body,-0*2,0);
	rope4= new Rope(bobObject4.body,roofObject.body,25*2,0);
	rope5= new Rope(bobObject5.body,roofObject.body,50*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}



