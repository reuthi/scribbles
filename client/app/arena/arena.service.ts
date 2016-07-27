import { Injectable, Inject } from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import * as io from 'socket.io-client';

@Injectable()
export class ArenaService {
  private url = 'http://localhost:3003/ttt';
  private socket;
  
  public messages = [];
  public connected = false;

  constructor(@Inject('io') io){
    // console.log('Arena Service ctor');
    
    this.socket = io.connect(this.url);
    this.socket.on('ttt join', (msg)=>{
      console.log('ttt join', msg);
    });
    this.socket.on('chat message', msg => {
      this.messages.push(msg);
    })
  }
  sendMsg(msg) {
    this.socket.emit('chat message', msg);
  }

}
