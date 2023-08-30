const { default: mongoose } = require("mongoose");
const User = require("../api/models/users.models");
const dotenv = require('dotenv').config();

const arrayUsers = [
    {
        "name": "Admin",
        "role": "admin",
        "email": "admin@admin.com",
        "age": "50",
        "password": "admin123,",
        "image": "admin.jpg",
        "recipes": [],
        "comments": []
      }
];

const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL)
.then(async()=> {
    const allUsers = await User.find();
    if (allUsers.length > 0) {
        await User.collection.drop();
        console.log("Users deleted");
    }
})
.catch((error)=> console.log("error deleting userss",error))
.then(async ()=> {
    const userMap = arrayUsers.map((user) => new User(user));
    await User.insertMany(userMap);
    console.log("users insert correctly");
})
.catch((error) => console.log("error inserting users", error))
.finally(()=> mongoose.disconnect())