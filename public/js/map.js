"use strict"
import openSimplexNoise from './noise.js'
class Map {
  // init class
  constructor (config, player) {
    this.config   = config;
    this.noise    = openSimplexNoise(Date.now());
    this.player   = player;
    const grid    = this.createGrid();
    const sketch  = this.drawCanvas(grid);
    new p5(sketch, 'sketch');
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
        let r = (this.noise.noise2D(x, y) + 1) / 2;
        if (r <= this.config.random.maxBlock / 100) {
          grid[x][y] = r; 
        } else {
          grid[x][y] ="E"
        }
      }
    }
    return grid;
  }

  // @desc    draws a tile
  // @p       p5 variable
  // @x       position on the y axis
  // @y       position on the y axis
  // @state   sate of the current tile
  createTile(p, x, y, state) {
    if (state != "E") {
      console.log('in')
      p.fill(100)
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
        p.clear();
        p.background(255);
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
