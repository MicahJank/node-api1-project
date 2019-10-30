// implement your API here
const express = require('express');
const db = require('./data/db.js');

const server = express();

server.listen(4000, () => {
    console.log('server listening on port 4000');
});

// express.json() is a parser function... if json *text* is in the body, this
// method will parse it into an actual object, so that when we access req.body,
// it will be an actual object.
server.use(express.json());