
 import { Injectable } from '@angular/core';
 

export class CellModel {

  constructor(public rowNum: number, public colNum: number, public entity: string) {}
}


 @Injectable()
 export class TttService {
    public row: CellModel[] = []; 
    public board: CellModel[][] = [];

    constructor() { this.create() }
    
    public create() {
        for (var row = 0; row < 3; row++) {
            let newRow = [];
            this.board.push(newRow);
            for (var col = 0; col < 3; col++) {
                let newCell = new CellModel (row, col, '');
                newRow.push(newCell);                
            }
        }
    }

    public checkGame(board: CellModel[][], cell:CellModel) {

            if (
                (board[cell.rowNum][0].entity === board[cell.rowNum][1].entity) && 
                (board[cell.rowNum][1].entity === board[cell.rowNum][2].entity) 
            ) return true;

            else if (
                (board[0][cell.colNum].entity === board[1][cell.colNum].entity) && 
                (board[1][cell.colNum].entity === board[2][cell.colNum].entity) 
            ) return true;

            // else if (board.every(elm => elm.reduce((a, b) => !a ? a : b) !== null)) {
            //     console.log('Draw!!!!!!!!!!!!!')
            //     return true;
            // } 

            else return false;
    }

 }