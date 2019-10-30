// implement your API here
const express = require('express');
const cors = require('cors');
const db = require('./data/db.js');

const server = express();

server.listen(4000, () => {
    console.log('server listening on port 4000');
});

// express.json() is a parser function... if json *text* is in the body, this
// method will parse it into an actual object, so that when we access req.body,
// it will be an actual object.
server.use(express.json());

server.use(cors());

server.post('/api/users', (req, res) => {
    const { name, bio } = req.body;
    if(!name || !bio) {
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

server.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    db.remove(id)
        .then(removedItems => {
            if(removedItems && removedItems > 0) {
                res.status(200).json({numberOfRemovedUsers: removedItems});
            } else {
                res.status(404).json({ message: "The user with the specified ID does not exists." });
            };
        })
        .catch(err => {
            res.status(500).json({ error: "The user could not be removed" });
        });
});

server.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    if(!req.body.name || !req.body.bio) {
        res.status(400).json({ errorMessage: "Please provide a name and bio for the user." });
    } else {
        db.update(id, req.body)
            .then(updateNumber => {
                if(updateNumber && updateNumber > 0) {
                    res.status(200).json(updateNumber);
                } else {
                    res.status(404).json({ message: "The user with the specified ID does not exist." });
                }
            })
            .catch(err => {
                res.status(500).json({ errorMessage: "The user information could not be modified." });
            });
        };
});