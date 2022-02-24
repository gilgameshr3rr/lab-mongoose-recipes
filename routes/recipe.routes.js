const express = require('express');

const router = express.Router();

const data = require('../data');
const Recipe = require('../models/Recipe.model');


router.post("/create-recipe", async (req, res) => {
    try {
        const createdRecipe = await Recipe.create(req.body);

        return res.status(201).json(createdRecipe);
    } catch (err) {
        return res.status(500).json(err);
    }    
});


router.post('/insert-recipe', async (req, res) => {
    try {
        const newRecipes = await Recipe.insertMany(data);

        return res.status(201).json(newRecipes);
    } catch (error) {
        return res.status(500).json(error);
    }

});

router.put("/edit-recipe/:title", async (req, res) => {
    const { title } = req.params;
    const { duration } = req.body;
    try {
        const updatedRecipe = await Recipe.findOneAndUpdate(
            { title: title }, 
            { duration: Number(duration) },
            { new: true },
        );
        return res.status(200).json(updatedRecipe);
    } catch (error) {
        return res.status(500).json(error);
    }
});

router.delete("/delete-recipe/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deletedRecipe = await Recipe.deleteOne({ _id: id });
  
      return res.status(200).json(deletedRecipe);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
});

module.exports = router;


