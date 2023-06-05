const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieName: {type: true, unique: true},
  genre: String,
  language: String,
  releasedYear: Number,
  rating: Number
})

const movie = mongoose.model('Movie',movieSchema)

model.export = movie;