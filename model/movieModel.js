const mongoose=require('mongoose');


const movieSchema = mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      price: {
        type:Number
      },
      genres: []
        // type: String,
      ,
      actors:[],
      posterurl: {
        type: String,
        required: true,
      },
      storyline: {
        type: String,
        // required: true,
      },
      cinema_name: {
        type: String,
        required: true,
      },
      imdbRating:{
        type:String
      }
    },
    { timestamps: true }
  );
  
  const movieModel = mongoose.model("movie", movieSchema);
  module.exports = movieModel;


  