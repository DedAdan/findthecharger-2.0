var apple
var ground
var edges
var wall1, wall2, wall3, wall4, wall5
function setup() {
  createCanvas(1200,600);
  edges=createEdgeSprites()
  apple=createSprite(100, 350, 50, 50);
  ground=createSprite(600, 580, 1200, 20);
  wall1=createSprite(360,490,150,50)
  wall2=createSprite(605,490,150,200)
  wall3=createSprite(450,70,100,400)
  wall4=createSprite(480,280,165,30)
}
function draw() {
  background(255,255,255);
apple.bounceOff(edges)
  apple.bo
  if(keyDown("a")){
  apple.x=apple.x-5
  }  
  if(keyDown("d")){
    apple.x=apple.x+5
    }  
    if(keyWentDown("w")&& apple.y >= 250){
      apple.velocityY= -15
   }  
   if(keyWentDown("w")&&(keyWentDown("d"))){
    apple.velocityY= -15
    apple.x=apple.x+5
 }  
 if(keyWentDown("w")&&(keyWentDown("a"))){
  apple.velocityY= -15
  apple.x=apple.x-5
}  
   apple.velocityY = apple.velocityY + 0.8
   apple.collide(ground);
   apple.collide(wall1);
   apple.collide(wall2);
   apple.collide(wall3);
   apple.collide(wall4);
  drawSprites();
}