// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global loadPixels, get, red, green, blue, angleMode, createGraphics, DEGREES, arc, clear, createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, rectMode, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, tint, noTint
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, noFill, windowWidth, windowHeight, noStroke, 
          key, keyCode, resize,CENTER, PI, HALF_PI, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */

let brushHue;
let priorX;
let priorY;
let strokeSize;
let strokeDelta;
let drawingGraphics;
let squareSize=1;


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
let canvasPixel;

function setup() {
  // Canvas & color settings
  createCanvas(500, 600);
  background(0);
  
  loadImage('https://ichef.bbci.co.uk/news/976/cpsprodpb/13278/production/_112565487_floyd.png', georgeFloydImg => {
    georgeFloydImg.resize(800, 0);
    image(georgeFloydImg, -200, 0);
  });
  

}

function draw() {
  loadPixels();
  setColor();
  setBrush();
  
  drawFromMouse();
  
}

function drawFromMouse(){
  
  //uses mouse location 
  
  
}

function setColor(){
  // sets color for brush, updates every frame
  r = red(canvasPixel)
  g = green(canvasPixel)
  b = blue(canvasPixel)
  
  brushColor = (r-30, g-30, b +60)
  
}

function setBrush(){
  //sets brush size, updates every frame
  
  
}

function getMouseColor(){  //returns color of canvas under mouse
  let canvasColor;  //color of canvas under mouseX, mouseY  
  canvasPixel = get(mouseX, mouseY);
  
  return canvasPixel;
}
