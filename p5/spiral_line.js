var r = 0.05;

function setup() {
  createCanvas(400, 400);

  background(220);
}

function draw() {

  noFill();
  frameRate(20);
  translate(width / 2, height / 2);
  strokeWeight(9);
  stroke(random(1,255),random(1,255),random(1,255));
  r+=5
  rectMode(CENTER);
  rotate(r);
  line(height/8,  width / 8,  height/3,width / 3,)


}