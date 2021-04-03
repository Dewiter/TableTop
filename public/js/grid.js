class Grid{
    constructor(ref, refRow = 10, refColumn = 10) {
        this.refColumn =refColumn;
        this.refRow = refRow;
        this.ref = ref;
        this.ctx =  this.ref.getContext("2d");
    }
    
    generateGrid() {
        let data = new Array();
        let max = 10
        let current  = 0;
        for (let row = 0; row < this.refRow; row++) {
            data[row] = new Array();
            for (let column = 0; column < this.refColumn; column++) {
                if ((Math.floor(Math.random() * this.refColumn) % 2 == 0) && current < max) {
                    console.log(current)
                    data[row][column] = 'f';
                } else {
                    data[row][column] = 'e';
                }
            }
            current++;
        }
        this.fillGrid(data);
    }

    fillGrid(grid) {
        let y = 0;
        console.log(grid)   
        grid.forEach(row => {
            let x = 0;
            row.forEach((column) => {
                this.ctx.beginPath();
                this.ctx.moveTo(x, y);
                this.ctx.rect(x, y, x + this.ref.width * .1, y + this.ref.height * .1);
                if (column == 'f') {
                    console.log(x, y, x + this.ref.width * .1, y + this.ref.height * .1);
                    this.ctx.closePath();
                } else {
                    this.ctx.stroke();
                }
                // this.ctx.stroke();
                x += this.ref.width * .1
            });
            y += this.ref.height * .1
        });
    }

    createTile() {
        var ctx = this.ref.getContext("2d");
        for (let i = 0; i < 100; i += 100) {
            ctx.moveTo(i, 0);
            ctx.lineTo(i, 10);
            ctx.stroke(); 
            for (let y = 0; y < 100; y++) {
                ctx.moveTo(0, y);
                ctx.lineTo(100, y);
                ctx.stroke(); 
                
            }  
        }
    }
}
