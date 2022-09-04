const router = require('express').Router();
const fs = require('fs');
const path = require('path');
// It will create unique id's 
const uniqid = require('uniqid');
const note = require('../db/db.json')


router.get('/notes', (req, res) => {
    res.json(note);
});

router.post('/notes', (req, res) => {
    req.body.id = uniqid();
    const temporalNote = req.body;
    console.log(note + "here ");
    note.push(temporalNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(note));
    res.json(temporalNote);
});

router.delete('/notes', (req,res) =>{
    const id = req.params.id;
    for (i = 0; i <note.length; i++) {
        if(note[i].id === id){
            note.splice(i,1);
        }
    }
    fs.writeFileSync("./db/db.json", JSON.stringify(note));
    res.send(note);
});

module.exports = router;

