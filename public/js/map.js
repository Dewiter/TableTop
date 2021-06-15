"use strict"

class Map {
  // init class
  constructor (config) {
    this.config   = config;
    const grid    = this.createGrid();
    const sketch  = this.drawCanvas(grid);
    new p5(sketch, 'container');
  }

  // @desc          Creates a grid array
  // @dimension     array that defines dimension of the map
  // @block         defines the number of tiles not walkable
  createGrid() {
    const grid = []
    let tmp = 0;
    for (let x = 0; x < this.config.dimension.x; x++) {
      grid[x] = [];
      for (let y = 0; y < this.config.dimension.y; y++) {
        let r = Math.floor(Math.random() * this.config.random.block);
        if (r / 100 == 0 && tmp < this.config.random.maxBlock) {
          grid[x][y] ="F";
          tmp++;
        } else {
          grid[x][y] ="E"
        }
      }
    }
    return grid;
  }

  createTile(p, x, y, state) {
    if (state == "F") {
      p.fill(51)
    } else {
      p.fill(255);
    }
    p.rect(x, y,  this.config.mapSize.x / this.config.dimension.x,
                  this.config.mapSize.y / this.config.dimension.y)
  }

  // @desc    Draws and creates a p5 canvas
  // @grid    Array that defines the map
  drawCanvas(grid) {
    const self = this;
    const sketch = function (p) {
      p.setup = () => {
        p.createCanvas(self.config.mapSize.x,self.config.mapSize.y);
        p.background(255);
      }
      p.draw = () => {
        let xIndex = 0;
        for (let x = 0; x < self.config.dimension.x; x++) {
          let yIndex = 0;
          for (let y = 0; y < self.config.dimension.x; y++) {
            self.createTile(p, xIndex, yIndex, grid[x][y]);
            yIndex += self.config.mapSize.y / self.config.dimension.y;
          };
          xIndex += self.config.mapSize.x / self.config.dimension.x; 
        }
      }
    }
    return sketch
  }

}

export default Map
