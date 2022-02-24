const mongoose = require('mongoose');
const express = require('express');
require('./config/db.config')();

const index = express();
index.use(express.json());

const recipeRouter = require('./routes/recipe.routes');
index.use('/recipes', recipeRouter);

const PORT = 4000;
index.listen(PORT, () => console.log(`Server up and running at port ${PORT}`));