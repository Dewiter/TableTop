"use strict"

class Map {
  constructor (size, block) {
    let sketch;
    sketch = this.initCancas()
    new p5(sketch, 'container');

  }

  initCancas() {
    const sketch = function (p) {
      p.setup = () => {
        p.createCanvas(400, 400);
        p.background(255);
      }
    }
    return sketch;
  }

}

export default Map
