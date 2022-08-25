const apiRoutes = require('./routes/apiRoutes/notes');
const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
const { db } = require('./db/db.json');

//const PORT = process.env.PORT || 3001;
const app = express();

// Middleware helper functions

app.use(express.static('public'));
app.use(express.urlencoded({esteended: true}));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/',htmlRoutes);

app.listen(3001, () => {
    console.log(`API server now on port 3001`);
})
