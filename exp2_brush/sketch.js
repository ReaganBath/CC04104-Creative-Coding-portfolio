let brush = 1;

function setup() {
  createCanvas(500, 500);
  background(255);
}

function draw() {
  if (mouseIsPressed) {
    // Brush 1 – Plain black line
    if (brush === 1) {
      stroke(0);
      strokeWeight(10);
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
    // Brush 2 – Randomly coloured large circles
    else if (brush === 2) {
      noStroke();
      fill(random(255), random(255), random(255), 100);
      ellipse(mouseX, mouseY, 100);
    }
    // Brush 3 – Opaque rectangles
    else if (brush === 3) {
      noStroke();
      fill(0, 50);
      rect(mouseX, mouseY, random(5, 25), random(5, 25));
    }
    // Brush 4 – Greyscale dots
    else if (brush === 4) {
      stroke(random(255));
      strokeWeight(random(1, 10));
      point(mouseX, mouseY);
    }
  }
}

function keyPressed() {
  if (key === '1') brush = 1;
  if (key === '2') brush = 2;
  if (key === '3') brush = 3;
  if (key === '4') brush = 4;

  if (key === 'c') background(255); // Clears brushes
}