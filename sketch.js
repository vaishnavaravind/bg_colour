var ball;
function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,10,10);
}

function draw() 

{
  if(keyWentDown(DOWN_ARROW))
  {
    background("blue");
  }
  if(keyWentUp(DOWN_ARROW))
  {
    background("yellow");
  } 
drawSprites();
}




