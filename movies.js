const moviesRoutes = (app, fs) => {

  const dataPath = "./db/movies.json";

  // READ
  app.get("/movies", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
      console.log(JSON.parse(data));
    });
  });
};

module.exports = moviesRoutes;