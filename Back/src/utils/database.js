const mongoose = require('mongoose');
const uri = 'mongodb+srv://jfelipecbermudez:XXpvFYuXhXBze5tQ@the-recipe.iccrbhk.mongodb.net/the-recipe?retryWrites=true&w=majority';
const connect = async () => {
  try {
    const db = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // const db = await mongoose.connect(process.env.DB_URL, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    const { name, host } = db.connection;
    console.log(`Connect to: ${name} host: ${host}`);
  } catch (error) {
    console.log(`He tenido el siguiente problema al conectarme: ${error}`);
  }
};

module.exports = { connect };
