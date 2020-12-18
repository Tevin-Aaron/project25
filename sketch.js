const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,trash,trash1,trash2,trash3,trashImg;
var ground,groundSprite;

function preload(){
trashImg = loadImage("trash.png");

}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

ground = new Ground(width/2,610,width,20);

paper = new Paper(100,400,30,30);

trash1 = new Trash(588,515,10,170);
trash2 = new Trash(722,515,10,170);
trash3 = new Trash(655,595,140,10);

trash = createSprite(655,515,10,10);
trash.addImage(trashImg);
trash.scale = 0.5;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);

  ground.display();

  trash1.display();
  trash2.display();
  trash3.display();

  paper.display();

  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paper.body,paper.body.position,{x : 45,y : -50})
}

}


