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


// uses mouse to draw on an image
// sliders change how the image is distorted
// mouseX, mouseY would pick up the color and maybe change it

//brush size/type
//color
//


let georgeFloydImg

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);

}

function draw() {
  background(95);
  
}
