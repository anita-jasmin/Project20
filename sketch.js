var car,wall;
var speed,weight;
var d;

function setup() {
  createCanvas(1600,400);
 car= createSprite(10, 200, 50, 50);
wall=createSprite(1500,200,60,height/2);

speed=random(55,90);
  weight=random(400,1500);
  car.velocityX=speed;

}

function draw() {
  background(0);  
  drawSprites();
  
  car.shapeColor="red";
  wall.shapeColor=(80,80,80);
  
  
 
 //deformation
 d=(0.5*weight*speed*speed)/22500;
  
  //collision
  if(car.x-wall.x<car.width/2+wall.width/2 &&
    wall.x-car.x<car.width/2+wall.width/2 )
  {
    car.velocityX=0;
    deformation();
   
  }

}

function deformation()
{
  
  if(d>180)
  {
    text("LETHAL",200,200);
    
  }
   if(d<180 && d>80)
  {
    text("AVERAGE",200,200)
  }
   if(d<80);
  {
    text("GOOD",200,200);
  }
}