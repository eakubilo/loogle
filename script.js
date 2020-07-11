// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global loadPixels, get, red, green, blue, angleMode, createGraphics, DEGREES, arc, clear, createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, random, keyIsPressed, rectMode, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, tint, noTint
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, noFill, windowWidth, windowHeight, noStroke, 
          key, keyCode, textAlign, createInput, createButton, createElement, createSlider, resize,CENTER, KeyR, PI, HALF_PI, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */
const drawingGraphicsHeight = 300;
const drawingGraphicsWidth = 500;

const maxStrokeSize = 50;

let strokeSize;
let strokeDelta;
let squareSize=10;
let sizeSlider;

//user image input button
let input;
let button;
let greeting;


let brushColor;

let bgImage;

let drawingGraphics;

function setup() {
  // Canvas & color settings
  createCanvas(drawingGraphicsWidth, 2*drawingGraphicsHeight);
  background(0);
  
  input = createInput();
  input.position(150,500);
  
  button = createButton('enter!')
  button.position(input.x+input.width, 500);
  
  greeting = createElement('h2', 'input image link here:');
  textAlign(CENTER);
  textSize(50)
  
 //"https://www.pewtrusts.org/-/media/post-launch-images/2016/12/chicago_skyline/chicago_skyline_16x9.jpg"

  loadImage(input.value(), bgImage => {
    bgImage.resize(0, drawingGraphicsHeight);
    image(bgImage, 0, 0);
  });
  loadImage(input.value(), bgImage => {
    bgImage.resize(0, drawingGraphicsHeight);
    image(bgImage, 0, drawingGraphicsHeight);
  });
  
  
  sizeSlider = createSlider(1,maxStrokeSize);
  sizeSlider.position(20,20);
  
  //setting up drawing layer
  drawingGraphics = createGraphics(drawingGraphicsWidth, drawingGraphicsHeight);
  drawingGraphics.noStroke();
  
}

function draw() {
  setBrushColor();
  setBrush();
  
  drawFromMouse();
  
}

function drawFromMouse(){  //draws squares at mouse position to top graphic
  if(mouseIsPressed){
    drawingGraphics.fill(getMouseColor());  //getMouseColor()
    drawingGraphics.rect(mouseX,mouseY,strokeSize,strokeSize);
    image(drawingGraphics, 0, 0, drawingGraphicsWidth, drawingGraphicsHeight);
  } 
}

function setBrushColor(mode){
  // sets color for brush, updates every frame
  let r = red(getMouseColor());
  let g = green(getMouseColor());
  let b = blue(getMouseColor());
  
  if(mode === "rand"){
    brushColor = color(random(255), random(255), random(255));
  } else{
    brushColor = color(r + random(10), g + random(10), b + random(10));
  }
  
  
  /*
  if (mode == "rand"){
    brushColor = (random(255), random(255), random(255))  
  }
  else {
    brushColor = (r,g,b)
  }
  */
}

function keyTyped(){
  if (key === 'r'){
    setBrushColor("rand");
  }
}

function setBrush(){
    strokeSize = sizeSlider.value();    
}

function getMouseColor(){  //returns color of canvas under mouse 
  loadPixels();
  let canvasPixel = get(mouseX, mouseY+drawingGraphicsHeight); 
  return canvasPixel;
}
