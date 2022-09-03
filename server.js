const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;


// Middleware helper functions

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//  points to the root route of the server
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

// It will redirect the user if the path does not exist 
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/db.db.json'));
})

app.post('/api/routes', (req,res) => {
    let note = req.body;
    let list = JSON(parse(fs.readFileSync('/db/db.json', 'utf8')));
    let lengthNote = list.length.toString();

    newNote.id = lengthNote;
    list.push(newNote);

    fs.writeFileSync('/db/db.json', JSON.stringify(list));
    res.json(list);
})


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})
