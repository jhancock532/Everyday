function MinimumSquareSimulation(){
  this.size = 50;
  this.blackPixels = 60;
  this.colourAllSizes = false;
  this.showLargestSquare = true;
  
  this.board = [];
  this.largestSquare = { size: -1, x: -1, y: -1 };
  
  this.randomInt = function(min, max){
    let base = max-min;
    return min + Math.floor(Math.random()*base);
  }
  
  this.resetBoard = function(){
    this.size = floor(this.size);
    this.largestSquare = { size: -1, x: -1, y: -1 };
    this.board.length = 0; //Delete all the data from the board array.
    
    //Construct and fill the board array.
    this.board = new Array(this.size); //Create an array of rows.
    for (let i = 0; i < this.size; i++){
      this.board[i] = new Array(this.size);
      this.board[i].fill(-1);
    }
    
    for (let i = 0; i < this.blackPixels; i++){
      let randomX = this.randomInt(0, this.size),
          randomY = this.randomInt(0, this.size);
      this.board[randomY][randomX] = 0;
    }
    
    this.findMaxEmptySquare();
  }
  
  this.displayBoard = function(){
    let xOffset = windowWidth / 2 - windowHeight*3/8,
        yOffset = windowHeight / 8,
        cellSize = (windowHeight*3 / 4) / this.board.length;
    
    background(90);
    
    strokeWeight(2 / this.size);
    stroke(42, 0, 10);
    
    for (let y = 0; y < this.board.length; y++){
      for (let x = 0; x < this.board.length; x++){
        //If there is a pixel in the cell, colour the cell black.
        if (this.board[y][x] == 0){
          fill(42, 0, 10);
        } else {
          if (this.colourAllSizes){
            let hue = (this.board[y][x] / this.largestSquare.size) * 360;
            fill(hue, 80, 100);
          } else {
            fill(42, 0, 100);
          }
        }
        
        rect(xOffset + x*cellSize, yOffset + y * cellSize,
             cellSize, cellSize);
      }
    }
    
    if (this.showLargestSquare){
      if (this.colourAllSizes){
        fill(0, 0, 100, 0.2); //White, semi-transparent fill.
        strokeWeight(1);
        stroke(0, 0, 100); //White outline.
      } else {
        fill(0, 100, 100, 0.2); //Red, semi-transparent fill.
        strokeWeight(1);
        stroke(0, 100, 100); //Red outline.
      }
      
      rect(xOffset + (this.largestSquare.x) * cellSize - (this.largestSquare.size-1) * cellSize, 
           yOffset + (this.largestSquare.y) * cellSize - (this.largestSquare.size-1) * cellSize,
           this.largestSquare.size * cellSize, 
           this.largestSquare.size * cellSize);
    }  
  }
  
  this.findMaxEmptySquare = function(){
    
    for (let y = 0; y < this.size; y++){
      for (let x = 0; x < this.size; x++){
        if (this.board[y][x] == -1) { //Ignore the pixel cells, which have 0 values already.
          if (x == 0 || y == 0){ 
            //Border cells have a max size of 1.
            this.board[y][x] = 1;
          } else {
            //Use memoization to find this cell's size.
            this.board[y][x] = Math.min(this.board[y-1][x-1], this.board[y-1][x], this.board[y][x-1]) + 1;
          }
        }
        
        if (this.board[y][x] > this.largestSquare.size){
          this.largestSquare.size = this.board[y][x];
          this.largestSquare.x = x;
          this.largestSquare.y = y;
        }
      }
    }

  }
}

let simulation = new MinimumSquareSimulation();

let gui = new dat.GUI(); 

gui.add(simulation, "colourAllSizes").name("Colour Sizes");
gui.add(simulation, "showLargestSquare").name("Show Square");
let sizeController = gui.add(simulation, "size", 10, 100).name("Size"); 
let blackPixelsController = gui.add(simulation, "blackPixels", 1, 100).name("Pixels"); 
gui.add(simulation, "resetBoard").name("New Board");

sizeController.onChange(function() {simulation.resetBoard()});
blackPixelsController.onChange(function() {simulation.resetBoard()});

function setup(){
  createCanvas(windowWidth, windowHeight); 
  colorMode(HSB, 360, 100, 100, 1); 
  simulation.resetBoard();
}

function draw(){
  simulation.displayBoard();
}
