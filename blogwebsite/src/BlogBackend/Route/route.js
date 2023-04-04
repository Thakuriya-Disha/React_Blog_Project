const route = require("express").Router();
const data = require("../DummyData/data");

route.get("/poetry", data.poetry);
route.get("/music", data.music);
route.get("/movies", data.movies);
route.get("/kdramas", data.kdramas);
route.get("/animes", data.animes);

module.exports = route;