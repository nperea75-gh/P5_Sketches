var ang = 0
var ang = 0
var p1 = {
  x: 0,
  y: 0,
}
var p2 = {
  x: 0,
  y: 0,
}

function setup() {
  createCanvas(400, 400);
  strokeWeight(10)
}

function draw() {
  background(0)
  
  //p1.x = width / 10 + sin(ang) * 100;
  p1.x = p2.x+cos(ang/20) * 100;
  p1.y = (height / 2 + cos(ang/20) * 50)-100;
  p2.x = width / 2 + sin(ang/20) * 20;
  p2.y = height / 2 + cos(ang/20) * 50;
  stroke(255, 204, 0)
  line(p1.x, p1.y, p2.x, p2.y);
  ang++
  
  //line(mouseX+50,mouseY+50,mouseX-50,mouseY-50,)

}


