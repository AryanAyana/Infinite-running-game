var spaceshipImg,spaceship;
var spaceImg,space;
var astoroidImg,astoroid;
var coinImg,coin;
var gameState = "play"


function preload(){
    spaceshipImg = loadImage("spaceshipImg.png");
    astoroidImg = loadImage(" astoroidImg.png");
    coinImg = loadImage("coinImg.png");
    space = loadImage("spaceImg.jpg");
   }    


function setup() {
    createCanvas(600,600);
    space = createSprite(300,300);
    space.addImage("spaceImg.jpg");
    space.velocityY = 1;

  astoroidsGroup = new Group();
  coinsGroup = new Group();
  invisibleBlockGroup = new Group();

  spaceship = createSprite(200,200,50,50);
  spaceship.scale = 0.3;
  spaceship.addImage("spaceship", spaceshipImg.png);
}
  


function draw() {
 
}