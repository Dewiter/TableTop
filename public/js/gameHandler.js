class Game {
  constructor(block) {
    const sketch = this.createGrid(block);
    new p5(sketch, 'container');
  }
    createGrid(block) {
        const grid = [];
        for (let i = 0; i < 8; i++) {
          grid[i] =  new Array();
          let r = Math.floor (block * Math.random());
          for (let j = 0; j < 8; j++) {
            if (r == j) {
              grid[i][j] = "F";  
            } else  {
              grid[i][j] = "E";
            }
          }
          block++;
        }
        console.log(grid);
        let sketch = function(p) {
            p.setup = function(){
              p.createCanvas(400, 400);
              p.background(255);
            }
            p.draw = function () {
              let y = 0;
              for (let y = 0; y < 400; y+= 50) {
                for (let x = 0; x < 400; x+= 50) {
                  p.rect(x, y, 50, 50);
                };
                
              }
            }
          };
        return (sketch);
    }

    
}