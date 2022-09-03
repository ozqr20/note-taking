const path = require('path');
// It will create unique id's 
const uniqid = require('uniqid');
const note = require('../db/db.json')
const router = require('express').Router();
const fs = require('fs');


router.get('/api/notes', (req, res) => {
    res.json(note);
});

router.post('/api/notes', (req, res) => {
    req.body.id = uniqid();
    const temporalNote = req.body;
    console.log(note);
    note.push(temporalNote);
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(note)
    );
    res.json(temporalNote);
});

router.delete('/api/notes/:id', (req,res) =>{
    const id = req.params.id;
    for (i = 0; i <note.length; i++) {
        if(note[i].id === id){
            note.splice(i,1);
        }
    }
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(note)
    );
    res.send(note);
});

module.exports = router;

