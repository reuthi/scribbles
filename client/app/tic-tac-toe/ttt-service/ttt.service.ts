
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
    //     // const checkForColMatch = 
    //     const factor = board.length;
        const checkForColMatch = (board, x) => 
            (board[cell.rowNum][0].entity === board[cell.rowNum][1].entity) && 
            (board[cell.rowNum][1].entity === board[cell.rowNum][2].entity) && 
            board[x][2].entity;
            
            console.log(checkForColMatch)
    //     // const checkForRowMatch = (board, x) => (board[0][x] === board[1][x]) && (board[1][x] === board[2][x]) && board[2][x];
        
    // //     const checkForXMatch = (hash) => {
    // //     const center = hash[1][1];

    // //     if (!center)
    // //         return false;

    // //     return hash[0][0] === hash[2][2] && hash[2][2] === center || hash[0][2] === hash[2][0] && hash[2][0] === center;
    // // }

    // //   checkGame(hash:Array<any>): any{
    }

 }