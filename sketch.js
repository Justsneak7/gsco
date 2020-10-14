var car,wall;
var speed,weight;
var Edges;


function setup() {
  createCanvas(800,400);
speed = random(55,90);
weight = random(400,1500);

  wall = createSprite(700,200,60,height/2);
  wall.debug = true;
  wall.shapeColor = "orange";


  car = createSprite(50, 200, 20, 20);
  
  
  
  
}

function draw() {
  background(1);  
  car.velocityX = speed;

  if(wall.x-car.x < (car.width+wall.width)/2){
      car.velocityX = 0;
      var deformation = 0.5 * weight * speed * speed/22509;
      if(deformation>180){
          car.shapeColor = "red";
      }

  if(deformation<180 && deformation>100) 
    {
      car.shapeColor = "green";
    }   

  if(deformation<100){
    car.shapeColor = "blue";
  }
  }

  

  createEdgeSprites();
  drawSprites();
}