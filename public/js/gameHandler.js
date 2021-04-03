/**
 * Handles game logic
 *   
*/



class GameHandler {
    constructor(ref) {
        let grid = new Grid(ref);
        grid.generateGrid();
    }
}