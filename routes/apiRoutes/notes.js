const router = require('express').Router();
const { db }  = require('../../db/db');

router.get("/notes", (req,res) => {
    console.log(db);
    res.json(db);
});

router.post("/notes", (req,res) => {
    
})
module.exports = router;