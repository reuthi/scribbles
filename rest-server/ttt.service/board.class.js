
class Cell {

  constructor(rowNum, colNum, entity) {
      this.rowNum = rowNum;
      this.colNum = colNum;
      this.entity = entity;
      
  }
}

class Board {

    constructor() {
        this.board = this.create();
    }

    create() {
        let board = [];
        for (var row = 0; row < 3; row++) {
            let newRow = [];
            board.push(newRow);
            for (var col = 0; col < 3; col++) {
                let newCell = new Cell (row, col, '');
                newRow.push(newCell);                
            }
        }
        return board;
    }

    checkGame(board, cell) {
        // *** Checking for col match:
        if (board[0][cell.colNum].entity === board[1][cell.colNum].entity &&
            board[1][cell.colNum].entity === board[2][cell.colNum].entity) {
                return true;
            }
        // *** Checking for row match:        
        else if (board[cell.rowNum][0].entity === board[cell.rowNum][1].entity &&
                 board[cell.rowNum][1].entity === board[cell.rowNum][2].entity) {
                return true;            
            }
        else { 
            return false;
        }
    }

}

module.exports = Board;
