
function setup() {
  createCanvas(1700,800);
  box=createSprite(850,400,20,20)
}

function draw() 
{
  background("green");
drawSprites();
if (keyIsDown(87)) {
  box.y=box.y-2
  
}
if (keyIsDown(83)) {
  box.y=box.y+2
}
if (keyIsDown(65)) {
  box.x=box.x-2
}
if (keyIsDown(68)) {
  box.x=box.x+2
  }
  }




