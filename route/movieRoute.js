const express = require('express');
const router = express.Router();
const movieModel = require('../model/movieModel')


router.get('/movielist', async (req, res) => {
    try {
        const movies = await movieModel.find({});
        res.send(movies);
      } catch (error) {
        res.json({ message: error });
      }
})

router.post('/movieAdd',async (req, res) => {
    const movie = req.body.movie;
    try {
        const newMovie = new movieModel({
            title: movie.title,
            price: movie.price,
            genres: movie.genres,
            actors: movie.actors,
            posterurl: movie.posterurl,
            storyline: movie.storyline,
            cinema_name: movie.cinema_name,
            imdbRating: movie.imdbRating,
            posterurl:movie.posterurl
        })
        await newMovie.save();
        res.status(201).send("New Movie Added");
    } catch (error) {
        res.json({ message: error });
    }
})




router.post("/addpizza", async (req, res) => {
    const pizza = req.body.pizza;
    try {
        const newPizza = new pizzaModel({
            name: pizza.name,
            image: pizza.image,
            varients: ["small", "medium", "larg"],
            description: pizza.description,
            category: pizza.category,
            prices: [pizza.prices],
        });
        await newPizza.save();
        res.status(201).send("New Pizza Added");
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;