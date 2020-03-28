var r = 1
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(102, 204, 255);
  noFill();
  stroke(255, 0, 0);
  translate(width / 2, height / 2);
  ellipse(0, 0, 320, 320)
  ellipse(0, 0, 260, 260)
  ellipse(0, 0, 200, 200)
  fill(255, 30, 10)
  noStroke();
  ellipse(0, 0, 50, 50)
  r++
  
  fill(255, 255, 0);
  ellipse(130 * cos(r / 20), 130 * sin(r / 20), 20, 20);
fill(50, 102, 10)
  ellipse(160 * cos(r / 11), 160 * sin(r / 11), 20, 20);
     fill(0, 0, 255)
  ellipse(100 * sin(r / 9), 100 * cos(r / 9), 20, 20)
}