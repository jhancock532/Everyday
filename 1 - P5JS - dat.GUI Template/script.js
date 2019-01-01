//// ---- DAT.GUI CODE ---- ////
// - Documentation - https://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage

let rectangle = { 
  width: 200,
  height: 120,
  fillColour: { h: 350, s: 0.9, v: 0.7 },
  strokeColour: { h: 120, s: 0.9, v: 0.7 },
  hasBorder: true,
}

let gui = new dat.GUI(); 

gui.add(rectangle, "hasBorder").name("Add Border");
gui.addColor(rectangle, 'fillColour').name("Fill Colour");
gui.addColor(rectangle, 'strokeColour').name("Border Colour");

let sizeFolder = gui.addFolder("Size");
sizeFolder.add(rectangle, "width", 0, 300).name("Width"); 
sizeFolder.add(rectangle, "height", 0, 300).name("Height");

//// ---- P5JS CODE ---- ////
// - Documentation - https://p5js.org/reference/

function setup(){
  createCanvas(windowWidth, windowHeight); 
  colorMode(HSB, 360, 100, 100, 1); 
}

function draw(){
  
  if (rectangle.hasBorder){
    stroke(rectangle.strokeColour.h, 
           rectangle.strokeColour.s*100, 
           rectangle.strokeColour.v*100);
  } else {
    noStroke();
  }
  
  fill(rectangle.fillColour.h,
       rectangle.fillColour.s*100,
       rectangle.fillColour.v*100)
  
  rect(20, 20, rectangle.width, rectangle.height);
}
