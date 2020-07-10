// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global get, angleMode, createGraphics, DEGREES, arc, clear, createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, rectMode, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, tint, noTint
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, noFill, windowWidth, windowHeight, noStroke, 
          key, keyCode, resize,CENTER, PI, HALF_PI, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

let brushHue;
let priorX;
let priorY;
let strokeSize;
let strokeDelta;
let drawingGraphics;
let brushSize;


// uses mouse to draw on an image
// sliders change how the image is distorted
// mouseX, mouseY would pick up the color and maybe change it

//brush size, square
//color

let brushColor;

let georgeFloydImg;
let r;
let g;
let b;

function setup() {
  // Canvas & color settings
  createCanvas(400, 600);
  background(0);
  
  loadImage('https://ichef.bbci.co.uk/news/976/cpsprodpb/13278/production/_112565487_floyd.png', georgeFloydImg => {
    georgeFloydImg.resize(400);
    image(georgeFloydImg, 0, 0);
  });
  

}

function draw() {
  //background(95);
  setColor();
  setBrush();
  
  drawFromMouse();
  
}

function drawFromMouse(){
  //uses mouse location 
  
  
}

function setColor(){
  // sets color for brush, updates every frame
  r =
  g = green (canvasColor)
  b = 
}

function setBrush(){
  //sets brush size, updates every frame
  
}

function getMouseColor(){  //returns color of canvas under mouse
  let canvasColor;  //color of canvas under mouseX, mouseY  
  let canvasPixel = get(mouseX, mouseY);
  
  return canvasPixel;
}
