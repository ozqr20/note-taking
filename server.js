const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
const { db } = require('./db/db.json');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware helper functions

app.use(express.static('public'));
app.use(express.urlencoded({esteended: true}));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/',htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})
