// Minimal Simple REST API Handler (With MongoDB and Socket.io)
// Author: Yaron Biton misterBIT.co.il

"use strict";
const 	express = require('express'),
		bodyParser 		= require('body-parser'),
		cors = require('cors'),
		mongodb = require('mongodb')

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const Room = require('./roomsGroup/Room.class');
const RoomsGroup = require('./roomsGroup/index');
// console.log('RoomsGroup', RoomsGroup);

const app = express();
app.use(cors());
app.use(bodyParser.json());

const http 	= require('http').Server(app);
const io 	= require('socket.io')(http);

function dbConnect() {

	return new Promise((resolve, reject) => {
		// Connection URL
		var url = 'mongodb://localhost:27017/seed';
		// Use connect method to connect to the Server
		mongodb.MongoClient.connect(url, function (err, db) {
			if (err) {
				cl('Cannot connect to DB', err)
				reject(err);
			}
			else {
				//cl("Connected to DB");
				resolve(db);
			}
		});
	});
}

// var corsOptions = {
//   origins: 'http://localhost:8080',
//   credentials: false
// };

let nspTTT  = io.of('/ttt');
nspTTT.roomsGroup = new RoomsGroup();
// console.log('roomsGroup', nspTTT.roomsGroup);

nspTTT.count = 0;

nspTTT.on('connection', function (socket) {
	
	console.log('TTT: user connected');
	nspTTT.count++;
	console.log('Playing TTT: ' + nspTTT.count);

	// This is a new socket, not assigned to room yet
	if (!socket.roomId) {
		let room = nspTTT.roomsGroup.setupAvailableRoom();
		socket.roomId = room.id;
		socket.join(room.id);
	}

	// console.log('Playing TTT: ' + nspTTT.count);
	nspTTT.to(socket.roomId).emit('ttt join', 'Someone Joined room '+ socket.roomId);

	socket.on('disconnect', function () {
		console.log('TTT: user disconnected');
		nspTTT.count--;
		console.log('Playing TTT: ' + nspTTT.count);
	});

	socket.on('chat message', function (msg) {
		nspTTT.to(socket.roomId).emit('chat message', msg);
	});

});








let nspChat = io.of('/chat');

nspChat.on('connection', function(socket){
//   console.log('a user connected to chat');
  socket.on('disconnect', function(){
    console.log('Chat: user disconnected');
  });
  socket.on('chat message', function(msg){
	//   console.log('Got msg: ', msg, ' emitting to all');
      nspChat.emit('chat message', msg);
  });    
});

// let nspTTT  = io.of('/ttt');
// nspTTT.roomsGroup = new RoomsGroup();
// // console.log('roomsGroup', nspTTT.roomsGroup);

// nspTTT.count = 0;

// nspTTT.on('connection', function (socket) {
	
// 	console.log('TTT: user connected');
// 	nspTTT.count++;
// 	console.log('Playing TTT: ' + nspTTT.count);

// 	// This is a new socket, not assigned to room yet
// 	if (!socket.roomId) {
// 		let room = nspTTT.roomsGroup.setupAvailableRoom();
// 		socket.roomId = room.id;
// 		socket.join(room.id);
// 	}

// 	// console.log('Playing TTT: ' + nspTTT.count);
// 	nspTTT.to(socket.roomId).emit('ttt join', 'Someone Joined room '+ socket.roomId);

// 	socket.on('disconnect', function () {
// 		console.log('TTT: user disconnected');
// 		nspTTT.count--;
// 		console.log('Playing TTT: ' + nspTTT.count);
// 	});

// 	socket.on('chat message', function (msg) {
// 		nspTTT.to(socket.roomId).emit('chat message', msg);
// 	});

// });

cl('WebSockets are Ready');

// Just for basic testing the socket
// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/test-socket.html');
// });


app.post('/profile', upload.single('avatar'), function (req, res, next) {
  console.log('req.file', req.file);
  console.log('req.body', req.body);
    
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})


// GETs a list
app.get('/data/:objType', function (req, res) {
	const objType = req.params.objType;
	dbConnect().then((db) => {
		const collection = db.collection(objType);

		collection.find({}).toArray((err, objs) => {
			if (err) {
				cl('Cannot get you a list of ', err)
				res.json(404, { error: 'not found' })
			} else {
				cl("Returning list of " + objs.length + " " + objType + "s");
				res.json(objs);
			}
			db.close();
		});
	});
});

// GETs a single
app.get('/data/:objType/:id', function (req, res) {
	const objType = req.params.objType;
	const objId = req.params.id;
	cl(`Getting you an ${objType} with id: ${objId}`);
	dbConnect().then((db) => {
		const collection = db.collection(objType);

		collection.findOne({_id: new mongodb.ObjectID(objId)}, (err, obj) => {
			if (err) {
				cl('Cannot get you that ', err)
				res.json(404, { error: 'not found' })
			} else {
				cl("Returning a single"+ objType);
				res.json(obj);
			}
			db.close();
		});
	});
});

// DELETE
app.delete('/data/:objType/:id', function (req, res) {
	const objType = req.params.objType;
	const objId = req.params.id;
	cl(`Requested to DELETE the ${objType} with id: ${objId}`);
	dbConnect().then((db) => {
		const collection = db.collection(objType);
		collection.deleteOne({ _id:  new mongodb.ObjectID(objId)}, (err, result) => {
			if (err) {
				cl('Cannot Delete', err)
				res.json(500, { error: 'Delete failed' })
			} else {
				cl("Deleted", result);
				res.json({});
			}
			db.close();
		});

	});



});

// POST - adds 
app.post('/data/:objType', function (req, res) {
	const objType = req.params.objType;
	const obj = req.body;
	cl("POST for " + objType);

	dbConnect().then((db) => {
		const collection = db.collection(objType);

		collection.insert(obj, (err, result) => {
			if (err) {
				cl(`Couldnt insert a new ${objType}`, err)
				res.json(500, { error: 'Failed to add' })
			} else {
				cl(objType + " added");
				res.json(obj);
			}
			db.close();

		});
	});

});

// PUT - updates
app.put('/data/:objType/:id', function (req, res) {
	const objType 	= req.params.objType;
	const objId 	= req.params.id;
	const newObj 	= req.body;
	cl(`Requested to UPDATE the ${objType} with id: ${objId}`);
	dbConnect().then((db) => {
		const collection = db.collection(objType);
		collection.updateOne({ _id:  new mongodb.ObjectID(objId)}, newObj,
		 (err, result) => {
			if (err) {
				cl('Cannot Update', err)
				res.json(500, { error: 'Update failed' })
			} else {
				cl("Updated", result);
				res.json(newObj);
			}
			db.close();
		});

	});

});


// Kickup our server 
const baseUrl = 'http://localhost:3003/data';
// Note: app.listen will not work with cors and the socket
// app.listen(3003, function () {
http.listen(3003, function () {
	console.log(`misterREST server is ready at ${baseUrl}`);
	console.log(`GET (list): \t\t ${baseUrl}/{entity}`);
	console.log(`GET (single): \t\t ${baseUrl}/{entity}/{id}`);
	console.log(`DELETE: \t\t ${baseUrl}/{entity}/{id}`);
	console.log(`PUT (update): \t\t ${baseUrl}/{entity}/{id}`);
	console.log(`POST (add): \t\t ${baseUrl}/{entity}`);

});

// Some small time utility functions
function cl(...params) {
	console.log.apply(console, params);
}
