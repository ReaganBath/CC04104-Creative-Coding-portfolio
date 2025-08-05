let poem = [
  "I wrote these lines to make them move,",
  "to just give simple shapes a groove.",
  "With that I brush past my brush tool too,",
  "a line at a time means something new."
];
let timers = [];
let alphas = [];

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(20);
  fill(0);
  textFont('Gothic');
  for (let i = 0; i < poem.length; i++) {
    timers[i] = i * 150;
    alphas[i] = 0;
  }
}

function draw() {
  background(255);
  for (let i = 0; i < poem.length; i++) {
    if (frameCount > timers[i]) {
      alphas[i] = lerp(alphas[i], 255, 0.05);
      fill(0, alphas[i]);
      text(poem[i], width/2, 100 + i * 100);
    }
  }
}