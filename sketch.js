//crie as variaveis dos seus personagens aqui
var box;


function preload(){
  //carregue as imagens dos personagens aqui
}

function setup() {
  createCanvas(800,400);
  //crie os sprites aqui
  box = createSprite(200,200,50,50);
  box.shapeColor = "green";

  

}

function draw() {
  background("pink"); 
 
  if (keyIsDown(DOWN_ARROW)){
box.position.y = box.position.y + 3;
background ("lightgreen")
  }

  if (keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x + 3;
    background("violet")
}
  drawSprites();
}
