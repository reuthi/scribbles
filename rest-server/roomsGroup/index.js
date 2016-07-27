const Room = require('./Room.class');

class RoomsGroup{

    constructor(){
        this.roomsCount = 0;
        this.rooms = [ new Room(this.getNextRoomNum()) ];
        
    }

    setupAvailableRoom() {
        
        let room = this.rooms[(this.rooms.length-1)];
        if (room.playersCount >= 2) {
            console.log('Creating new room');
            
            room = new Room(this.getNextRoomNum());
            this.rooms.push( room );
        }
        else {
            room.playersCount++;
            console.log('Found spot in existing room');
        }
        return room;
    }

    getNextRoomNum(){
        this.roomsCount++;
        return this.roomsCount;
    }


}

module.exports = RoomsGroup;