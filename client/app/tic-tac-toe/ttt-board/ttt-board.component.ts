import { Component, OnInit } from '@angular/core';
import { StateService, CellModel } from '../state-service/state.service';


@Component({
    moduleId: module.id,
    selector: 'tc-board',
    styleUrls: ['ttt-board.component.css'],
    templateUrl: 'ttt-board.component.html',
})
export class BoardComponent implements OnInit {
    private board;
    private row;
    private username: any;
    private state: any;
    private winner: any = '';
    private currTurnPlayer: any = '';
    private draw: any;
    private entiity: string = '';   
    private isMyTurn = false;

    constructor(private stateService: StateService) { }

    ngOnInit() { 
        this.stateService.myTurn$.subscribe((isMyTurn : boolean) => {
            this.isMyTurn = isMyTurn;
        });
    
        // let nickName = 'puki'//prompt('nickName?')
        // console.log(nickName);
        
        // this.stateService.sendNickName$.next(nickName)

        this.stateService.state$.subscribe(state => {
            if (state.players[0].isWin) this.winner = state.players[0].name;
            else if (state.players[1].isWin) this.winner = state.players[1].name;
            if (this.winner !== '') console.log(this.winner + 'is the winner!')  

            this.board = state.board.board;        


            if (state.players[0].currTurnPlayer) this.currTurnPlayer = state.players[0].name;
            else if (state.players[1].currTurnPlayer) this.currTurnPlayer = state.players[1].name;            
            // else if (state.players[1].isWin) this.winner = state.players[1].name;
            // console.log(this.currTurnPlayer + ' the curr turn player')          

        });


    }


    play(cell: CellModel) {
        
        if(!this.isMyTurn) return;
        // console.log(this.board);
        
        // let counter = 0;
        // let counterX = 0;
        // let counterO = 0;
        
        
        // for (var i = 0; i < this.board.length; i++) {
        //     for (var j = 0; j < this.board.length; j++) {
        //         //*** the first move:
        //         if (this.board[i][j].entity = '') counter++;
        //         if (this.board[i][j].entity = '') 
                
        //     }
            
        // }
        // if (counter === 0) cell.entity = 'fa-times';
        

        // this.stateService.state$.subscribe(state => {
        //     if (!state.currTurnPlayer1 && state.currTurnPlayer2 ||
        //         !state.currTurnPlayer2 && state.currTurnPlayer1) {
        //             console.log(state.currTurnPlayer1 , state.currTurnPlayer2) 
        //         // console.log('NOT');
        //         return
        //     }
            // if (this.isWin) alert ('game is over!')          
                // else


            this.stateService.send$.next(cell);
            // };        
 
        
        // this.win = this.tttService.checkGame(this.board, cell);
        // if(this.win) alert ('game over!')
        // this.currentPlayer = !this.currentPlayer;
        // }
            // this.returnCurrentPlayer()
    }

    
}