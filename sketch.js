function setup() {
  createCanvas(800,700);
  fixedRect=createSprite(400, 100, 50, 50);
  fixedRect.shapeColor="red";

  movingRect=createSprite(400, 100, 50, 50);
  movingRect.shapeColor="red";

  rect1=createSprite(100, 400, 60, 30);
  rect1.shapeColor="purple";
  rect1.velocityX=1;

  rect2=createSprite(700, 400, 60, 30);
  rect2.shapeColor="magenta";
  rect2.velocityX=-1;

  wall1=createSprite(60, 400, 20, 50);
  wall1.shapeColor="teal";
  

  wall2=createSprite(740, 400, 20, 50);
  wall2.shapeColor="teal";
 
}

function draw() {
  background(0); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  isTouching(fixedRect,movingRect);

  bounce(rect1,rect2);

bounceOff(wall1,rect1);
bounceOff(wall2,rect2);

  drawSprites();
}

