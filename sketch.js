var bullet, wall;
var speed, weight;
var deform
var thickness

function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  car=createSprite(50, 200, 50, 50);
  car.shapeColor=color(255,255,255);
  wall=createSprite(1200,200,60,height/2);
  wall.shapeColor=color(80,80,80);
  car.velocityX=speed;
  thickness=random(23,83);
  wall.width=thickness;
}

function draw() {
  background(0,0,0);  
  if(wall.x-car.x<(car.width+wall.width)/2) {
    car.velocityX=0;
    deform=0.5*weight*speed*speed/22500
    if(deform>10) {
      car.shapeColor=color(255,0,0);
    }
    if(deform<10) {
      car.shapeColor=color(0,255,0)
    }
  }
  
  drawSprites();
}