var r = 0.05;

function setup() {
  createCanvas(400, 400);

  background(220);
}

function draw() {

  noFill();
  frameRate(20);
  translate(width / 2, height / 2);
  strokeWeight(2);
  fill(random(1,255),random(1,255),random(1,255));
  r++
  rectMode(CENTER);
  rotate(r);
  ellipse(r,  r , height / 8,height / 8 )


}