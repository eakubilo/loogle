// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global angleMode, createGraphics, DEGREES, arc, clear, createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, rectMode, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, tint, noTint
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, noFill, windowWidth, windowHeight, noStroke, 
          key, keyCode, CENTER, PI, HALF_PI, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

let brushHue;
let priorX;
let priorY;
let strokeSize;
let strokeDelta;
let drawingGraphics;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  brushHue = 0;   
  priorX = 0;
  priorY = 0;
  strokeSize = 6;
  strokeDelta = 0.2;
  drawingGraphics = createGraphics(width, height);

  colorMode(HSB, 360, 100, 100);
  drawingGraphics.colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(95);
  chooseColors();

  if (mouseIsPressed) {
    // Pick one of the three behaviors below:
    // rect(mouseX, mouseY, 15, 15);
    // ellipse(random(width), random(height), 30, 30);
    drawingGraphics.line(priorX, priorY, mouseX, mouseY);
    // line(width-priorX, height-priorY, width-mouseX, height-mouseY);  // Mirrored line
  }
  image(drawingGraphics, 0, 0, width, height);

  // Draw a preview of the brush on top.
  ellipse(mouseX, mouseY, strokeSize);

  // Store the mouseX and mouseY from this frame in order to use them next
  // frame - remember from the DVD lesson that the draw loop runs once every
  // frame.
  priorX = mouseX;
  priorY = mouseY;
}

function chooseColors() {
  brushHue += 1;
  brushHue %= 360;
  if (strokeSize > 30 || strokeSize <= 1) {
    strokeDelta = -strokeDelta;
  }
  strokeSize += strokeDelta;

  drawingGraphics.strokeWeight(strokeSize);
  drawingGraphics.stroke(brushHue, 50, 80);
  drawingGraphics.fill(brushHue, 50, 80);

  // Set the fill for the brush preview as well
  fill(brushHue, 50, 80);
}

function keyPressed() {
  drawingGraphics.background(95);
  console.log("key: " + key);
  console.log("keyCode: " + keyCode);
}

// function mousePressed() {
//   drawingGraphics. ellipse(random(width), random(height), 30, 30);
// }
