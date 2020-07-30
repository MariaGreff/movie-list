const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/public')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list =
        {
          "Title": "The Godfather",
          "Year": "1972",
          "Rated": "R",
          "Released": "24 Mar 1972",
          "Runtime": "175 min",
          "Genre": "Crime, Drama",
          "Director": "Francis Ford Coppola",
          "Writer": "Mario Puzo (screenplay by), Francis Ford Coppola (screenplay by), Mario Puzo (based on the novel by)",
          "Actors": "Marlon Brando, Al Pacino, James Caan, Richard S. Castellano",
          "Plot": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
          "Language": "English, Italian, Latin",
          "Country": "USA",
          "Awards": "Won 3 Oscars. Another 26 wins & 30 nominations.",
          "Poster": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
          "Ratings": [
            {
              "Source": "Internet Movie Database",
              "Value": "9.2/10"
            },
            {
              "Source": "Rotten Tomatoes",
              "Value": "98%"
            },
            {
              "Source": "Metacritic",
              "Value": "100/100"
            }
          ],
          "Metascore": "100",
          "imdbRating": "9.2",
          "imdbVotes": "1,562,921",
          "imdbID": "tt0068646",
          "Type": "movie",
          "DVD": "09 Oct 2001",
          "BoxOffice": "N/A",
          "Production": "Paramount Pictures",
          "Website": "N/A",
          "Response": "True"
        };
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);