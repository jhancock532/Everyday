//// ---- DAT.GUI CODE ---- ////
//See the documentation at https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage

//This object contains all the editable variables of the rectangle.
let rectangle = { 
  width: 200,
  height: 120,
  //These colours are stored as Hue, Saturation and Value (brightness).
  fillColour: { h: 350, s: 0.9, v: 0.7 },
  hasBorder: true,
  strokeColour: { h: 120, s: 0.9, v: 0.7 },
}

let gui = new dat.GUI(); //Creates the UI overlay box.
//Add variables to the UI.
gui.add(rectangle, "hasBorder").name("Add Border")
gui.addColor(rectangle, 'fillColour').name("Fill Colour");
gui.addColor(rectangle, 'strokeColour').name("Border Colour");

let sizeFolder = gui.addFolder("Size"); //Creates a folder in the UI.
//Add variables to the folder. These variables are limited to the range 0-300.
sizeFolder.add(rectangle, "width", 0, 300).name("Width"); 
sizeFolder.add(rectangle, "height", 0, 300).name("Height");

//// ---- P5JS CODE ---- ////
//See the documentation at https://p5js.org/reference/

//Preload loads files before setup is run.
function preload(){
  //img = loadImage('some/path/to/yourimagefile.jpg');
}

//This function is called once when the page loads.
function setup(){
  createCanvas(windowWidth, windowHeight); //Creates a canvas that fills the screen.
  colorMode(HSB, 360, 100, 100, 1); //The default HSB colour mode. 
  //colorMode(RGB, 255, 255, 255, 1); //The default RGB colour mode.
  strokeWeight(5);
}

//The draw function is called once every frame.
function draw(){
  background(100); //Fills the entire screen with white.
  
  if (rectangle.hasBorder){
    //Colour the border.
    stroke(rectangle.strokeColour.h, 
           rectangle.strokeColour.s*100, 
           rectangle.strokeColour.v*100);
  } else {
    noStroke(); //Don't draw any border.
  }
  
  //Set the colour that will fill the shape.
  fill(rectangle.fillColour.h,
       rectangle.fillColour.s*100,
       rectangle.fillColour.v*100)
  
  //Draw the shape to the screen. Top left is drawn at 20, 20.
  rect(20, 20, rectangle.width, rectangle.height);
}
