let twists = 2;
let peaceStamp, diligenceStamp;
let cnv;

function preload(){
  peaceStamp = loadImage("https://res.cloudinary.com/dvxmjunfv/image/upload/v1546859202/Photos/peace.png");
  diligenceStamp = loadImage("https://res.cloudinary.com/dvxmjunfv/image/upload/v1546859202/Photos/diligence.png");
}

function setup(){
  cnv = createCanvas(windowWidth, windowHeight); 
  colorMode(HSB, 360, 100, 100, 1); 
  drawBackgroundTexture();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  resetCanvas();
}

function resetCanvas(){
  resizeCanvas(windowWidth, windowHeight);
  drawBackgroundTexture();
  frameCount = 0;
}

function draw(){
  
  if (cnv.height != windowHeight || cnv.width != windowWidth){
    resetCanvas();
  }
  
  let size, speed = 150;
  
  if (windowWidth < windowHeight){
    size = windowWidth/3;
  } else {
    size = windowHeight/3;
  }
  
  push();
  translate(windowWidth/2, windowHeight/2);
  for (let twirl = 0; twirl < twists; twirl++){
    drawLine(twirl * TWO_PI/twists, speed, size);
    rotate(TWO_PI/twists);
  }
  pop();
}

function drawLine(offset, speed, size){
  stroke(42, 0, map(sin(frameCount/speed + offset)*-1,-1,1,0,100),0.8);
  strokeWeight(2+random(1));
  line(sin(frameCount/speed)*size + map(random(1),0,1,-0.5,0.5), 
       cos(frameCount/speed)*size + map(random(1),0,1,-0.5,0.5), 
       sin(frameCount/speed)*cos(frameCount/speed)*size + map(random(1),0,1,-0.5,0.5),
       cos(frameCount/speed)*size + map(random(1),0,1,-0.5,0.5));
}

function drawBackgroundTexture(){
  background(42, 20, 90);
  let widthSections = 20, heightSections = 20, overlap = 30;
  
  //Splitting the background into several sections
  for (let x = 0; x < widthSections; x++){
    for (let y = 0; y < heightSections; y++){
      //Defining the section area, within which to draw lines randomly.
      let minX = windowWidth/widthSections * x - overlap;
      let widthOfSection = windowWidth/widthSections + overlap * 2; 
      let minY = windowHeight/heightSections * y - overlap;
      let heightOfSection = windowHeight/heightSections + overlap * 2;
      
      //Draw a random number of lines in the section area.
      let numberOfLines = 50 + random(100);
      for (let l = 0; l < numberOfLines; l++){
        strokeWeight(random(0.40));
        stroke(42, 50 + random(20), 70 + random(20), random(0.4));
            
        line(minX + random(widthOfSection), minY + random(heightOfSection),
             minX + random(widthOfSection), minY + random(heightOfSection));
      }
    }
  }
  
  drawStamps();
}

function drawStamps(){
  
  let size = 0;
  if (windowWidth < windowHeight){
    size = windowWidth/3;
  } else {
    size = windowHeight/3;
  }
  push();
  translate(windowWidth/2, windowHeight/2);
  image(peaceStamp, -size*1.6, -size*1.5, size*0.9, size*0.9);
  image(diligenceStamp, size*0.7, size*0.6, size*0.9, size*0.9);
  pop();
}

function mouseMoved() {
  let size = 0;
  if (windowWidth < windowHeight){
    size = windowWidth/3;
  } else {
    size = windowHeight/3;
  }
  
  let x = mouseX-windowWidth/2;
  let y = mouseY-windowHeight/2;
  
  if (x < cos(y/size)*size 
      && x > -cos(y/size)*size 
      && y < cos(x/size)*size 
      && y > -cos(x/size)*size){
    document.body.style.cursor = "pointer";
  } else {
    document.body.style.cursor = "default";
  }
    
  
}

function mousePressed(){
  let size = 0;
  if (windowWidth < windowHeight){
    size = windowWidth/3;
  } else {
    size = windowHeight/3;
  }
  
  let x = mouseX-windowWidth/2;
  let y = mouseY-windowHeight/2;
  
  if (x < cos(y/size)*size 
      && x > -cos(y/size)*size 
      && y < cos(x/size)*size 
      && y > -cos(x/size)*size){
    twists += 1;
    resetCanvas();
  } 
}
