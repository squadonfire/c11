
var trex ,trex_running;
var ground
function preload(){
trex_running=loadAnimation("./trex1.png","trex3.png","trex4.png");  

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,180,20,50);
 trex.addAnimation("trex",trex_running);
 trex.scale=0.5
 ground=createSprite(150,190,300,10);
 
}

function draw(){
  background("white")
  if(keyDown("space")){
	  trex.velocityY=-5
 }
 
 trex.velocityY=trex.velocityY+0.5
 trex.collide(ground);
 drawSprites()
	  
	  

}
