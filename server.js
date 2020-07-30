const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();

let movies = [
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
  },
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Sci-Fi, Thriller",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    "Plot": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 152 wins & 217 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.8/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "87%"
      },
      {
        "Source": "Metacritic",
        "Value": "74/100"
      }
    ],
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,980,743",
    "imdbID": "tt1375666",
    "Type": "movie",
    "DVD": "07 Dec 2010",
    "BoxOffice": "$292,568,851",
    "Production": "Warner Bros. Pictures",
    "Website": "N/A",
    "Response": "True"
  },
  {
    "Title": "The Pianist",
    "Year": "2002",
    "Rated": "R",
    "Released": "28 Mar 2003",
    "Runtime": "150 min",
    "Genre": "Biography, Drama, Music, War",
    "Director": "Roman Polanski",
    "Writer": "Ronald Harwood (screenplay), Wladyslaw Szpilman (book)",
    "Actors": "Adrien Brody, Emilia Fox, Michal Zebrowski, Ed Stoppard",
    "Plot": "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
    "Language": "English, German, Russian",
    "Country": "UK, France, Poland, Germany",
    "Awards": "Won 3 Oscars. Another 54 wins & 73 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Ratings": [
      {
        "Source": "Internet Movie Database",
        "Value": "8.5/10"
      },
      {
        "Source": "Rotten Tomatoes",
        "Value": "95%"
      },
      {
        "Source": "Metacritic",
        "Value": "85/100"
      }
    ],
    "Metascore": "85",
    "imdbRating": "8.5",
    "imdbVotes": "701,983",
    "imdbID": "tt0253474",
    "Type": "movie",
    "DVD": "27 May 2003",
    "BoxOffice": "$32,519,322",
    "Production": "Focus Features",
    "Website": "N/A",
    "Response": "True"
  }
]


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/public')));
app.use(bodyParser.json());
// app.use('/api', express.static(path.join(__dirname, 'db', 'movies.json')));

// An api endpoint that returns a list of movies from json file
// app.get('/api/movies', (req,res) => {
//     console.log('Sent list of items');
//     res.sendFile(path.join(__dirname, 'db', 'movies.json'));
// });

// An api endpoint that returns a list of movies from an array
app.get('/api/movies', (req,res) => {
  console.log('Sent list of movies');
  res.json(movies);
});

// An api endpoint that returns one movie from an array
app.get('/api/movies/:id', (req, res) => {
  const movie = movies.find(movie => movie.imdbID === req.params.id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ error: { message: 'No such movie yet' } });
  }
});

// An api endpoint that adds one movie to an array
app.post('/api/movies', (req,res) => {
  const newMovie = { ...req.body };
  movies.push(newMovie);
  res.status(201).set('location', `/api/movies/${newMovie.imdbID}`).json(newMovie);
});

function deleteMovie(id) {
  movies = movies.filter(movie => movie.imdbID !== id);
  return movies;
}

// An api endpoint that deletes one movie from an array
app.delete('/api/movies/:id', (req, res) => {
  const movie = movies.find(movie => movie.imdbID === req.params.id);
  if (!movie) {
    res.status(404).json({ error: { message: 'No such movie' } });
    return;
  }
  deleteMovie(movie.imdbID);
  res.status(204).json({});
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
});

// const routes = require("./routes.js")(app, fs);

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);