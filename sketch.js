
var fixedRect,movingRect, Edges;
var wall,car;

function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(400, 100, 30, 50);
 fixedRect.shapeColor = "yellow";
 movingRect = createSprite(750,100,50,30);
 movingRect.shapeColor = "yellow";
 movingRect.debug = true;

 wall = createSprite(400, 300, 30, 50);
 wall.shapeColor = "yellow";
 car = createSprite(750,300,50,30);
 car.shapeColor = "yellow";
 car.debug = true;


 Edges = createEdgeSprites();
 
  movingRect.velocityX = -3;
  fixedRect.velocityX = +0;

  wall.velocityX = 0;
  car.velocityX = -3;

 console.log("welcome");
}

function draw() {
  background(0);  

  //movingRect.x = mouseX;
  //movingRect.y = mouseY;
  
    movingRect.bounceOff(Edges);
    fixedRect.bounceOff(Edges);

  if((movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 )&& 
  (movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2)&& 
  (fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2)&&
  (fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2)){
      movingRect.shapeColor = "blue";
      fixedRect.shapeColor = "blue";
    
    }
  else{
        movingRect.shapeColor = "yellow";
        fixedRect.shapeColor = "yellow";
      }

    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
        && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
    }
    if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
    }




    if((car.x - wall.x < car.width/2 + wall.width/2 )&& 
  (car.y - wall.y < car.height/2 + wall.height/2)&& 
  (wall.x - car.x < car.width/2 + wall.width/2)&&
  (wall.y - movingRect.y < car.height/2 + wall.height/2)){
      car.shapeColor = "blue";
      wall.shapeColor = "blue";

   }
  else{
        movingRect.shapeColor = "yellow";
        fixedRect.shapeColor = "yellow";
      }

    if (car.x - wall.x < wall.width/2 + car.width/2
        && wall.x - car.x < wall.width/2 + car.width/2) {
      car.velocityX = car.velocityX * (-1);
      wall.velocityX = wall.velocityX * (-1);
    }
    if (car.y - wall.y < wall.height/2 + cat.height/2
      && wall.y - car.y < wall.height/2 + car.height/2){
      car.velocityY = car.velocityY * (-1);
      wall.velocityY = wall.velocityY * (-1);
    }

    

    

  drawSprites();
}
