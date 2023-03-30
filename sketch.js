const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var c1;
var forky;
var c1_l;
var forky_img;
var woody, woody_img;
var fondo;

//Se guardan imagenes en variables
function preload(){
  woody_img= loadImage("images/Woody.png");
  forky_img = loadImage("images/Forky.png");
  fondo= loadImage("images/fondo.png");
}

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
 
  ground = new Ground(200,690,600,20);

  c1 = new Cuerda(6,{x:245, y:30});

  forky_options={
    density:0.001
  }

  forky = Bodies.circle(300,300,20,forky_options);

  Matter.Composite.add(c1.body,forky);
  

  c1_l= new enlace(c1,forky);
  woody = createSprite(200,580,100,100);
  woody.addImage(woody_img);
  woody.scale = 0.05;

  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  imageMode(CENTER);
}

function draw() 
{
  background(51);
  image(fondo,width/2,height/2,500,700);
  ground.show();
  c1.show();
 
  image(forky_img,forky.position.x,forky.position.y,60,60);




  Engine.update(engine);
  drawSprites();
}




