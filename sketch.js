  
var skyImg, sky;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var pin, pinImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  skyImg = loadImage("sky.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  pinImg = loadImage("pin.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  sky = createSprite(600,600);
  sky.addImage("sky",skyImg);
  sky.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  pin = createSprite(50,50,10,10);
  pin.scale = 0.2;
  pin.addImage("pin", pinImg);
}


function draw() {
  background(255);
 if(sky.y > 600){
      sky.y = 300
    } 
  
  if (gameState === "play") {
    
    if(keyDown("LEFT_ARROW")){
        pin.x = pin.x - 3;

      // write a code to move left when left arrow is pressed
    }
    if(keyDown("RIGHT_ARROW")){
  
          pin.x = pin.x + 3;

      // write a code to move left when right arrow is pressed
      
    }
    if(keyDown("SPACE")){
  
         pin.velocityY = -10;

      // write a code to move up when space arrow is pressed
      
    }
  
  pin.velocityY = pin.velocityY + 0.8;
  
   
      //write a condition for infinte scrolling tower
    
      spawnDoors();

  
//write a code to make invisibleBlockGroup collide with ghost destroy the ghost and make gamestate to end.
     if(climbersGroup.isTouching(pin)){
      pin.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(pin) || pin.y > 600){
      pin.destroy();
      gameState = "end";
    }
    
  
  drawSprites();
}
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }
}

function spawnDoors()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    var door = createSprite(100, -25);
    var climber = createSprite(100,5);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    //add the random function
    //
    door.x = Math.round(random(120,400));
    climber.x = door.x;
    invisibleBlock.x = door.x;
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;

    //change the depth of the ghost and door
    
     
pin.depth = door.depth;
    pin.depth +=1;
    
    //assign lifetime for the  door, climber and invisible block

  door.lifetime = 800;
  climber .lifetime = 800;
  invisibleBlock.lifetime = 800;
    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are door, climber and invisible block
    
     doorsGroup.add(door);
    invisibleBlock.debug = true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}

