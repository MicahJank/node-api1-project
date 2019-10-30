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

server.get('/api/users', (req, res) => {
    db.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({error: "The users information could not be retrieved."});
        });
});

server.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    
    db.findById(id)
        .then(user => {
            if(user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ message: "The user with the specified ID does not exist." });
            };
        })
        .catch(err => {
            res.status(500).json({ error: "The user information could not be retrieved."});
        });
});

server.post('/api/users', (req, res) => {
    if(!req.body.name || !req.body.bio) {
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." });
    } else {
        db.insert(req.body)
            .then(userDoc => {
                res.status(201).json(userDoc);
            })
            .catch(err => {
                res.status(500).json({ error: "There was an error while saving the user to the database" });
            });
    };
});