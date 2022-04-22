require('dotenv').config();
const Movie = require("./model/movieModel");
const Movies = require("./helper/movieData/json/movies-in-theaters.js");
const mongoose = require('mongoose')
const URI = process.env.MONGODB_URL

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, err => {
  if(err) throw err;
  console.log("Connected to mongodb Successfully...seeder")
})


//import data
const importData = async () => {
  try {
    await Movie.deleteMany();
    const sampleData = Movies.map((movie) => {
      return { ...movie };
    });
    await Movie.insertMany(sampleData);
    console.log("DATA IMPOrted");
     process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

const dataDestroy = () => {};

if (process.argv[2] === "-d") {
  dataDestroy();
} else {
  importData();
}
