
 import { Injectable, Inject } from '@angular/core';
 import {Observable, Subject} from 'rxjs/Rx';

 import * as io from 'socket.io-client';

 

export class CellModel {

  constructor(public rowNum: number, public colNum: number, public entity: string) {}
}

 @Injectable()
 export class StateService {    

    private url = 'http://localhost:3003/ttt';

    public socket$: any;    
    public connected$: any;
    public myTurn$ = new Subject();
    public send$ = new Subject();
    public sendUserName$ = new Subject();
    public state$: any;
    public board$: any;  
    public currPlayer$: any;  
    public isWin$: any;  

    public players: any;      
    private myPlayerId;    

    constructor(@Inject('io') io) { 

        console.log('IN CONSTRUCTOR OF STATE SERVICE');

        this.socket$ = Observable.of(io(this.url))

        const connect$ = this.socket$
            .switchMap(socket => Observable.fromEvent(socket, 'connection'));

        const disconnect$ = this.socket$
            .switchMap(socket => Observable.fromEvent(socket, 'disconnect'));
    
        this.connected$ = Observable.merge (
            connect$.mapTo(true),
            disconnect$.mapTo(false)
        );

        const initalState$ = this.socket$
            .switchMap(socket => Observable.fromEvent(socket, 'ttt join'))
            .do((ev,i)=> {
                
                this.myPlayerId = ev.you;
                console.log('ev.you: ',  this.myPlayerId, 'i: ',i);
            });

        const currState$ = this.socket$
            .switchMap(socket => Observable.fromEvent(socket, 'ttt move'))
            .do(ev => console.log(`Got new state from server: ${ev}`));

        this.state$ = Observable.merge(initalState$, currState$)

        this.board$ = this.state$
            .map((ev) => ev.board.board)
            // .do((ev)=>console.log('Got Board:',  ev) );

         this.state$.subscribe(state => { 
             this.players = state.players
            this.myTurn$.next(this.isMyTurn())    
         })


        this.send$.withLatestFrom(this.socket$, (cell, socket: SocketIOClient.Socket)=>{
            return {cell, socket};
        })
       .subscribe(({cell, socket})=>{
            socket.emit('ttt move', cell);
        })


    }


    private isMyTurn() {
       
        if (this.players[this.myPlayerId].currTurnPlayer) return true;
        else return false;
    }
 }