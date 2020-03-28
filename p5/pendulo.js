var d = 0.5

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 102, 204);

  noStroke();
  d++
 
  translate(width / 3, height / 3)
  fill(30, 50, 10) // verde 
  ellipse(80 + 20 * sin(d / 10), 100, 100, 100) //circulo pendulo

  for (r = 50; r < 140; r += 40) {
    for (i = 20; i < 130; i += 40) {
      stroke(255, 255, 102);
      strokeWeight(20);
      point(i, r);
    }
  }
}