var ironman;

var bg, backgroundImg;
var stoneIMG,stonesgroup;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironmanimg=loadImage("images/iron.png");
  stoneIMG=loadImage("images/stone.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=2;
  bg.velocityY=-5;

  ironman=createSprite(50,500);
  ironman.addImage(ironmanimg)
  ironman.scale=0.4; 
  stonesgroup= new Group();
}

function draw() {
  if(bg.y<225){
    bg.y=bg.width/4;
  }
  ironman.x= mouseX;
  ironman.y= mouseY; 
if (ironman.x<20){
   ironman.x=20;

}

genratestone();

for (var i=0;i<(stonesgroup).length;i++){
  var temp=(stonesgroup).get(i);
    if (temp.isTouching(ironman)){
      ironman.collide(temp)
}
}    
drawSprites();
   
}
function genratestone(){
 if (frameCount % 70===0){
    var stone=createSprite(1000,600,10,10);
    stone.x=random(50,450);
    stone.addImage(stoneIMG);
    stone.scale=0.5;
    stone.velocityY=-5;

    stone.lifetime=250;  
    stonesgroup.add(stone);

} 
}

