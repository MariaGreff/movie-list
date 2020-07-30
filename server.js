const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/public')));

// app.use('/api', express.static(path.join(__dirname, 'db', 'movies.json')));

// An api endpoint that returns a list of movies
app.get('/api/movies', (req,res) => {
    console.log('Sent list of items');
    res.sendFile(path.join(__dirname, 'db', 'movies.json'));
});


// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);