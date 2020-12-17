const Engine = Matter.Engine,
 World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies; 
var particles = [];
var plinkos = [];
var divisions =[];
var particle;

var divisionHeight=300;


function setup() {
  createCanvas(900, 710);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

  
     for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
 }

 for (var j = 50; j <=width-10; j=j+50) {
     plinkos.push(new Plinko(j,175));
     
 }

 for (var j = 75; j <=width; j=j+50) {
     plinkos.push(new Plinko(j,275));
 }

 for (var j = 50; j <=width-10; j=j+50) {
     plinkos.push(new Plinko(j,375));
 }
}
 
function draw() {
  background("black");
 
 textSize(17)
 
  
  text(mouseX + "," + mouseY, 20, 50);
  text("x and y ",25,22);

  text("choose one colour block and wait until your colour box is filled and if your chosen colour box is",123,17)
  text("filled comment it and you are the lucky person of the day and if you loose keep comment i loosed ",135,44);
  textSize(20);
 

  

  Engine.update(engine);
  ground.display();
  
   for (var i = 0;i < plinkos.length; i++){
    plinkos[i].display();
   }

  for (var j = 0; j < particles.length; j++) {
     particles[j].display();  
  }
  for (var k = 0; k < divisions.length; k++) 
  {
    divisions[k].display();
  }
 
  if(frameCount%60===0)
  {
    particles.push(new Particle(random(width/2-10, width/2+10),10,10));
    
  }   
 

  
 
}



 