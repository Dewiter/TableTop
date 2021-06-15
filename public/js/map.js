"use strict"

class Map {
  // init class
  constructor (config) {
    const grid    = this.createGrid(config.size, config.block);
    const sketch  = this.drawCanvas(grid);
    new p5(sketch, 'container');

  }

  //@desc     Creates none walkable tile
  //@block    defines the number of tiles not walkable
  createBlock(block) {

  }

  // @desc    Creates a grid array
  // @size    array that defines size of the map
  // @block   defines the number of tiles not walkable
  createGrid(size, block) {
    const grid = []
    for (let x = 0; x < size[0]; x++) {
      grid[x] = [];
      for (let y = 0; y < size[1]; y++) {
        grid[x][y] = "E";
      }
    }
    console.log(grid);
    return grid;
  }


  // @desc    Draws and creates a p5 canvas
  // @grid    Array that defines the map
  drawCanvas(grid) {
    const sketch = function (p) {
      p.setup = () => {
        p.createCanvas(400, 400);
        p.background(255);
      } 
    }
    return sketch
  }

}

export default Map
