const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cloudinary = require('cloudinary').v2;

const { connect } = require('./src/utils/database');
const routerUser = require('./src/api/routes/user.routes');

dotenv.config();
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET,
//   secure: true,
// });

const PORT = process.env.PORT || 5001;
const app = express();
app.use(cors());
app.use(express.json());

connect();

// bloque de rutas
//app.use('/user', routerUser);

app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});

//
