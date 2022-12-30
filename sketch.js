var fundoImage, fundo;
var navio, sprite;

function preload(){
fundoImg = loadImage("sea.png");
animacao = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  fundo = createSprite(200,200);
  fundo.addImage(fundoImg);
  fundo.scale = 0.5
  navio = createSprite(100,280,20,20);
  navio.addAnimation("navegando",animacao);
}

function draw() {
  background("blue");
    drawSprites();
navio.scale = 0.2
 
}
