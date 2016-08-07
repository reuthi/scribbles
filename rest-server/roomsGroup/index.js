const Room = require('./Room.class');

class RoomsMgr{

    constructor(){
        this.roomsCount = 0;
        this.rooms = [ new Room(this.getNextRoomNum()) ];
        
    }

    setupAvailableRoom() {
        
        let room = this.rooms[(this.rooms.length-1)];
        if (room.playersCount >= 2) {
            
            room = new Room(this.getNextRoomNum());
            console.log('Creating new room:', room.id);
            this.rooms.push( room );
        }
        else {
            room.playersCount++;
            console.log('Found spot in existing room:', room.id);
        }
        return room;
    }

    getNextRoomNum(){
        this.roomsCount++;
        return this.roomsCount;
    }

    getRoomById(id) {
        return this.rooms.filter(room => room.id === id)[0];
    }


}

module.exports = RoomsMgr;