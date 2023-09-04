const express = require('express');
const dotenv = require('dotenv');
const { connect } = require('./src/utils/database');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;
const recipeRouter = require('./src/api/routes/recipes.routes');
const ingredientRouter = require('./src/api/routes/ingredients.routes');
const userRouter = require('./src/api/routes/user.routes');
const commentsRouter = require('./src/api/routes/comments.routes');


dotenv.config();
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET,
//   secure: true,
// });

const PORT = 5020 || 5001;
const app = express();
app.use(cors(
  {
    origin:"*",
    credentials:true
  }
));
app.use(express.json());

app.use('/recipes', recipeRouter);
app.use('/ingredients', ingredientRouter);
app.use('/user', userRouter)
app.use('/comments', commentsRouter)


connect();



app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});

//
