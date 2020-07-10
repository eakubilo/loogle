// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global loadPixels, get, red, green, blue, angleMode, createGraphics, DEGREES, arc, clear, createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, random, keyIsPressed, rectMode, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, tint, noTint
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, noFill, windowWidth, windowHeight, noStroke, 
          key, keyCode, createSlider, resize,CENTER, KeyR, PI, HALF_PI, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */
let imageGraphics;

let brushHue;
let priorX;
let priorY;
let strokeSize;
let strokeDelta;
//let drawingGraphics;
let squareSize=10;
let sizeSlider;



// uses mouse to draw on an image
// sliders change how the image is distorted
// mouseX, mouseY would pick up the color and maybe change it

//brush size, square
//color

let brushColor;

let bgImage;
let r;
let g;
let b;

let drawingGraphics;

function setup() {
  // Canvas & color settings
  createCanvas(500, 600);

  
  
  
  loadImage("https://www.pewtrusts.org/-/media/post-launch-images/2016/12/chicago_skyline/chicago_skyline_16x9.jpg", bgImage => {
    bgImage.resize(0, 600);
    image(bgImage, 0, 0);
  });
  loadPixels();
  
  sizeSlider = createSlider(1,20);
  sizeSlider.position(20,20);
  
  //setting up drawing layer
  drawingGraphics = createGraphics(width, height);
  drawingGraphics.noStroke();
  
}

function draw() {
  loadPixels();
  setColor();
  setBrush();
  
  drawFromMouse();
  
}

function drawFromMouse(){
  if(mouseIsPressed){
    drawingGraphics.fill(getMouseColor());  //getMouseColor()
    drawingGraphics.rect(mouseX,mouseY,strokeSize,strokeSize);
    image(drawingGraphics, 0, 0, width, height);
  
    //uses mouse location
  }
  
}

function setColor(mode){
  // sets color for brush, updates every frame
  r = red(getMouseColor());
  g = green(getMouseColor());
  b = blue(getMouseColor());
  
  if (mode == "rand"){
    brushColor = (random(255), random(255), random(255))  
  }
  else {
    brushColor = (r,g,b)
  }
}

function keyPressed(){
  if (keyCode == KeyR){
    setColor("rand")
  }
}

function setBrush(){
    strokeSize = sizeSlider.value();    
}

function getMouseColor(){  //returns color of canvas under mouse 
  let canvasPixel = get(mouseX, mouseY);
  
  return canvasPixel;
}
