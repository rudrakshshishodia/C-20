var fixedrect,moverect;


function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(200,200,50,80);
  fixedrect.shapeColor="blue";
  fixedrect.debug=true;
  moverect=createSprite(400,200,80,30);
  moverect.shapeColor="blue";
  moverect.debug=true;
}

function draw() {

  background(0,0,0);
  
  console.log(moverect.x-fixedrect.x);

  moverect.x=World.mouseX;
  moverect.y=World.mouseY;

if(moverect.x-fixedrect.x<fixedrect.width/2+moverect.width/2
  && fixedrect.x-moverect.x<fixedrect.width/2+moverect.width/2
 && moverect.y-fixedrect.y<fixedrect.height/2+moverect.height/2
  && fixedrect.y-moverect.y<fixedrect.height/2+moverect.height/2){
  moverect.shapeColor="yellow";
  fixedrect.shapeColor="yellow";
}

else{
  moverect.shapeColor="blue";
  fixedrect.shapeColor="blue";
}

  drawSprites();
}