import { Component, OnInit } from '@angular/core';
import { TttService, CellModel } from '../ttt-service/ttt.service';


@Component({
    moduleId: module.id,
    selector: 'tc-board',
    providers: [TttService],
    styleUrls: ['ttt-board.component.css'],
    templateUrl: 'ttt-board.component.html',
})
export class BoardComponent implements OnInit {
    private board;
    private row;
    private win;
    private draw:any;
    private currentPlayer:boolean = true; //true = x | false = o 
    

    constructor(private tttService: TttService) { }

    ngOnInit() { 

        this.board = this.tttService.board;
        this.row = this.tttService.row;
    }

    play(cell: CellModel) {
        
        const x = cell.rowNum;
        const y = cell.colNum;
        console.log('cell', cell)
        
        // if(cell.entity !== 'X' || cell.entity !== 'O' ) {
        //     if(this.currentPlayer) cell.entity = 'X';
        //     else cell.entity = 'O';

        this.tttService.socket.emit('move', cell)

        this.win = this.tttService.checkGame(this.board, cell);
        if(this.win) alert ('game over!')
        this.currentPlayer = !this.currentPlayer;
        // }
        
    }
}