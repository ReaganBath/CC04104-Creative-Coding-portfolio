let mode = 0;

function setup() {
  createCanvas(500, 500);
  noFill();
}

function draw() {
  background(255);
  stroke(0);
  if (mode === 0) effect1();
  else if (mode === 1) effect2();
  else effect3();
}

function mousePressed() {
  mode = (mode + 1) % 3;
}

// Effect 1: Rotating lines circle
function effect1() {
  translate(width / 2, height / 2);
  rotate(frameCount * 0.01); 
  for (let i = 0; i < 360; i++) {
    rotate(PI / 50);
    line(0, 0, 200, 0);
  }
}


// Effect 2: Wormhole
function effect2() {
  for (let i = 0; i < 180; i++) {
    ellipse(width/2, height/2, i * 5 + sin(frameCount * 0.05 + i) * 10);
  }
}

// Effect 3: Vertical waves
function effect3() {
  for (let x = 0; x < width; x += 10) {
    beginShape();
    for (let y = 0; y < height; y += 10) {
      let offset = sin(y * 0.1 + frameCount * 0.02 + x * 0.01) * 100;
      vertex(x + offset, y);
    }
    endShape();
  }
}