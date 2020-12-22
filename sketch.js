const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles=[];
this.divisions=[]
var plinkos=[];
var divisionHeight=300
function setup() {
  createCanvas(480,700);
  engine = Engine.create();
  world = engine.world;
  ground= new Ground(width/2,700,480,20)

}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
for(var j=40;j<=width;j=j+50)
{
  plinkos.push(new Plinko(j,75,20,20));
}
  
  drawSprites();
}