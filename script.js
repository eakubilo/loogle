// Be sure to name any p5.js functions we use in the global so Glitch can recognize them.
// Add to this list as you consult the p5.js documentation for other functions.
/* global loadPixels, get, red, green, blue, angleMode, createGraphics, DEGREES, arc, clear, createCanvas, colorMode, HSB, width, height, random, background, fill, color, random,
          rect, random, keyIsPressed, rectMode, ellipse, stroke, image, loadImage, collideCircleCircle, collideRectCircle, text, tint, noTint
          mouseX, mouseY, strokeWeight, line, mouseIsPressed, noFill, windowWidth, windowHeight, noStroke, 
          key, keyCode, textAlign, createInput, createButton, createElement, createSlider, resize,CENTER, KeyR, PI, HALF_PI, UP_ARROW, LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW, textSize */
const drawingGraphicsHeight = 300;
const drawingGraphicsWidth = 500;
let drawingGraphics;

//stroke variables
const maxStrokeSize = 50;
let strokeSize;
let strokeDelta;
let squareSize=10;
let sizeSlider;

//user image input button
let input;
let button;
let greeting;
let name;

//brush variables
let brushColor;
let isBrushColorRandom = false;  //true if r is pressed

// ...
let bgImage;



function setup() {
  // Canvas & color settings
  createCanvas(drawingGraphicsWidth, 2*drawingGraphicsHeight);
  background(60);
  
  //setup input field and button
  input = createInput();
  input.position(150,500);
  
  button = createButton('enter!')
  button.position(input.x+input.width, 500);
  button.mousePressed(getURLInput);
  
  greeting = createElement('h2', 'input image link here:');
  textAlign(CENTER);
  textSize(50)
  
  
  //setup slider
  sizeSlider = createSlider(1,maxStrokeSize);
  sizeSlider.position(20,20);
  
  setupDrawingGraphic();
  
}

function draw() {
  //getURLInput();
  
  setBrushColor();
  setBrush();
  
  drawFromMouse();
  
}

function getURLInput(){
  
 //"https://www.pewtrusts.org/-/media/post-launch-images/2016/12/chicago_skyline/chicago_skyline_16x9.jpg"
  name = input.value();
  console.log(name);
  loadImage('"'+ name + '"', bgImage => {
    bgImage.resize(0, drawingGraphicsHeight);
    image(bgImage, 0, 0);
  });
  loadImage('"'+ name + '"', bgImage => {
    bgImage.resize(0, drawingGraphicsHeight);
    image(bgImage, 0, drawingGraphicsHeight);
  });
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
  
  if(isBrushColorRandom === false){
    brushColor = color(r + random(10), g + random(10), b + random(10));
  } else{  
    brushColor = color(random(255), random(255), random(255));
  }
}

function keyTyped(){
  if (key === 'r'){
    isBrushColorRandom = true;
  } else{
    isBrushColorRandom = false;
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

// SETUP METHODS

function setupDrawingGraphic(){
  //setting up drawing layer
  drawingGraphics = createGraphics(drawingGraphicsWidth, drawingGraphicsHeight);
  drawingGraphics.noStroke();
}
