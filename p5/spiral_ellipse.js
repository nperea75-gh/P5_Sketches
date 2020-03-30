var r = 0.05;

function setup() {
  createCanvas(400, 400);
  frameRate(20);
  background(220);
}

function draw() {
if(r>200){
    background(220);
    r=1;
}
 else{ 
      
     translate(width / 2, height / 2);  
  fill(random(1,255),random(1,255),random(1,255));
  r++
  rectMode(CENTER);
  rotate(r);
  ellipse(r,  r , height / 8,height / 8 )}


}