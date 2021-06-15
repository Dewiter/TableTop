"use strict"

class Map {
  // init class
  constructor (config) {
    this.config   = config;
    const grid    = this.createGrid();
    const sketch  = this.drawCanvas(grid);
    new p5(sketch, 'container');
  }

  //@desc     Creates none walkable tile
  //@block    defines the number of tiles not walkable
  createBlock(block) {

  }

  // @desc    Creates a grid array
  // @dimension    array that defines dimension of the map
  // @block   defines the number of tiles not walkable
  createGrid() {
    const grid = []
    for (let x = 0; x < this.config.dimension.x; x++) {
      grid[x] = [];
      for (let y = 0; y < this.config.dimension.y; y++) {
        grid[x][y] = "E";
      }
    }
    return grid;
  }

  createTile(p, x, y) {
    p.rect(x, y, this.config.tileSize, this.config.tileSize)

  }

  // @desc    Draws and creates a p5 canvas
  // @grid    Array that defines the map
  drawCanvas(grid) {
    const self = this;
    const sketch = function (p) {
      p.setup = () => {
        p.createCanvas(400, 400);
        p.background(255);
      }
      p.draw = () => {
        for (let y = 0; y < self.config.mapSize.y; y+= self.config.tileSize) {
          for (let x = 0; x < self.config.mapSize.x; x+= self.config.tileSize) {
            self.createTile(p, x, y)
          } 
        }
      }
    }
    return sketch
  }

}

export default Map
