
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var player,playerImg,muted
var rope,stand
var ground
var ball,ballImg,ball_con
var goalImg
var goal1
var goal2
var goal3
var background,backgroundImg,bg_sound

function preload(){
  playerImg=loadImage("player.png")
  ballImg=loadImage("basketball.png")
  backgroundImg=loadImage("background.png")
 goalImg=loadImage("basket.png")
bg_sound=loadSound("sound1.mp3")
}

function setup() {
  createCanvas(900,830);
  frameRate(80);

  bg_sound.play()
  bg_sound.setVolume(0.3)

  engine = Engine.create();
  world = engine.world;
  
 goal1 = createImg('basket.png');
  goal1.position(0,260);
  goal1.size(200,150);

  goal2=createImg('superbasket.png')
  goal2.position(330,380)
  goal2.size(200,150)
  
  goal3 = createImg('basket2.png');
  goal3.position(670,240);
  goal3.size(200,150)

  player = createImg('player.png');
 player.position(650,500);
  player.size(280,220)

  rope = new Rope(8,{x:400,y:2}); 
  stand=new Stand(600,450,80,60)

blower=createImg('blower.png')
blower.position(200,320);
blower.size(170,90);
blower.mouseClicked(blow);

muted=createImg('mute.png')
  muted.position(830,20);
  muted.size(60,60);
 muted.mouseClicked(mute);

ball = Bodies.circle(300,300,20);
Matter.Composite.add(rope.body,ball);

ball_con = new Link(rope,ball);
  
}


function draw() 
{
  background(backgroundImg);
  Engine.update(engine);

  rope.show()
  stand.show()
 //player.x=mouseX

 // drawSprites();
}

function  blow(){
  Matter.body.applyForce(ball,{x:0,y:0},{x:0,y:-0.07})
}

function mute(){
  if(bg_sound.isPlaying())
  {
   bg_sound.stop();
  }
  else{
   bg_sound.play();
  }
}