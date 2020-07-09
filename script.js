// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global angleMode, DEGREES, arc, clear, createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, rectMode, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, tint, noTint
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, noFill, windowWidth, windowHeight, noStroke, 
          keyCode, CENTER, PI, HALF_PI, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

let brushHue;
let priorX;
let priorY;
let strokeSize;
let strokeDelta;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  priorX = 0;
  priorY = 0;
  strokeSize = 6;
  strokeDelta = .1;

  background(95);
}

function draw() {
  chooseColors();

  if (mouseIsPressed) {
    // Pick one of the three behaviors below:
    // rect(mouseX, mouseY, 15, 15);
    // ellipse(random(width), random(height), 30, 30);
    line(priorX, priorY, mouseX, mouseY);
    // line(width-priorX, height-priorY, width-mouseX, height-mouseY);  // Mirrored line
  }

  // Store the mouseX and mouseY from this frame in order to use them next
  // frame - remember from the DVD lesson that the draw loop runs once every
  // frame.
  priorX = mouseX;
  priorY = mouseY;
}

function chooseColors() {
  brushHue += 1;
  brushHue %= 360;
  if (strokeSize > 20 || strokeSize <= 1) {
    strokeDelta = -strokeDelta;
  }
  strokeSize += strokeDelta;

  strokeWeight(strokeSize);
  stroke(brushHue, 50, 80);
  fill(brushHue, 50, 80);
}

function keyPressed() {
  background(95);
}

// function mousePressed() {
//   ellipse(random(width), random(height), 30, 30);
// }
