//Requires https NPM Module
var http = require("http");

//Defines Port for connection
var PORTONE = 7000;
var PORTTWO = 7500;

//Establish functions for handling request to each server and response back to client via callbacks.
function handleRequestOne(req, res) {
  res.end('Great job finding me! You must be really smart!' + req.url);
}

function handleRequestTwo(req, res) {
  res.end('Go away. You are really bugging me!' + req.url);
}

//Call create server function and pass handle request function as argument for each server. Store in variable defining server.
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

//Function with listen method for server to listen on established port for request from client.
serverOne.listen(PORTONE, function() {
  console.log('server listening on: http://localhost:%s', PORTONE);
});

serverTwo.listen(PORTTWO, function() {
  console.log('server listening on: http://localhost:%s', PORTTWO);
});

//run in CL with node server.js
