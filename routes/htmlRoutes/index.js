const router = require('express').Router();
const path = require('path');

//  points to the root route of the server
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// It will redirect the user if the path does not exist 
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

module.exports = router;