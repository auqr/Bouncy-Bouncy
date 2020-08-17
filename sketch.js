var rect1, rect2;



function setup() {
  createCanvas(800,400);
  
  rect1 =createSprite (400,200,100,50);
  rect2 =createSprite (400,200,50,100);

  rect1.shapeColor ="green";
  rect2.shapeColor ="green";

  rect1.velocityY =-4
  rect2.velocityY = 4
}

function draw() {
  background(255,255,255);  
  
if (rect1.x - rect2.x < rect1.width/2 + rect2.width/2 && rect2.x - rect1.x < rect2.width/2 + rect1.width/2)
  
    {
  //rect1.shapeColor ="red";
  //rect2.shapeColor ="red";
  rect1.velocityX = rect1.velocityX* (-1);
  rect2.velocityX = rect2.velocityX* (-1);
}
if (rect1.y - rect2.y < rect1.hight/2 + rect2.hight/2 && rect2.y - rect1.y < rect2.hight/2 + rect1.hight/2) {
  rect1.velocityY = rect1.velocityY* (-1);
  rect2.velocityY = rect2.velocityY* (-1);
}





 


  drawSprites();
}