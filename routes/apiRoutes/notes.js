const router = require('express').Router();
const { saveNote, deleteNote } = require('../../public/assets/js/index');
const { db }  = require('../../db/db');
const path = require('path');
const fs = require('fs');


router.get("/notes", (req,res) => {
    console.log(db);
    res.json(db);
});

router.post("/notes", (req, res) => {
    console.log(req.body);
    const save = req.body;
    save = saveNote(req.body, save);
    fs.writeFileSync(
        path.join(__dirname, "../db.json"),
        JSON.stringify({ db }, null, 2)
    );

})
module.exports = router;