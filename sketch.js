const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ourengine, ourworld;
var ground
var ball
function setup() {
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);

 ourengine = Engine.create();
ourworld = ourengine.world;
var ground_options = {

isStatic: true

}
ground = Bodies.rectangle(200,390,400,20, ground_options)
World.add(ourworld,ground)
console.log(ground)
var ball_options = {

  restitution: 1.0
  
  }

ball= Bodies.circle(200,100,20,ball_options)
World.add(ourworld,ball)
}

function draw() {
  background(0);  
  Engine.update(ourengine);
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x ,ball.position.y, 20,20 )
  drawSprites();
}