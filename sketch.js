var bg
var baloonimage
var baloon

function preload() {
  bg=loadImage("assests/bg.png")
  baloonimage=loadAnimation("assests/balloon1.png","assests/balloon2.png","assests/balloon3.png")
  obstacles1image= loadImage("assests/obsTop1.png")
  obstacles2image= loadImage("assests/obsTop2.png")
  obstacles3image= loadImage("assests/obsBottom1.png")
  obstacles4image= loadImage("assests/obsBottom2.png")
  obstacles5image= loadImage("assests/obsBottom3.png")

}
function setup() {

  createCanvas(windowWidth,windowHeight);

  baloon=createSprite(100,400)
  baloon.addAnimation("Baloon",baloonimage)
  baloon.scale=0.4
}
function draw() {

  background(bg);
  if(keyDown("space")){
    baloon.velocityY=-4
  }
  baloon.velocityY+=2

  obstaclesTop();
  obstaclesBottom();
  drawSprites();
}

function obstaclesTop() {

  if(frameCount%100===0){
  obsTop=createSprite(windowWidth,windowHeight-600)
  obsTop.scale=0.2
  obsTop.velocityX=-4
  var r=Math.round(random(1,2))
  switch(r){
    case 1:obsTop.addImage(obstacles1image);
    break ;
    case 2: obsTop.addImage(obstacles2image);
    break ;
    default:
    break;

  }

  obsTop.lifetime=350
  baloon.depth=baloon.depth+1

  }
}

function obstaclesBottom(){

if(frameCount%150===0){
obsDown=createSprite(windowWidth,windowHeight-60)
obsDown.scale=0.2
obsDown.velocityX=-3
var r=Math.round(random(3,5))
switch(r){
  case 3:obsDown.addImage(obstacles3image);
  break ;
  case 4:obsDown.addImage(obstacles4image);
  break ;
  case 5: obsDown.addImage(obstacles5image);
  break;
  default:
    break;
}

obsDown.lifetime=450
baloon.depth=baloon.depth+1
}
}
