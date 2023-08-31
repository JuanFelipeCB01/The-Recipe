const { default: mongoose } = require("mongoose");
const User = require("../api/models/users.models");
const dotenv = require('dotenv').config();

const arrayUsers = [
    {
        "name": "Admin1",
        "role": "admin",
        "email": "admin1@admin.com",
        "age": "50",
        "password": "admin1123,",
        "image": "admin1.jpg",
        "recipes": [],
        "comments": []
      },
      {
        "name": "Admin2",
        "role": "admin",
        "email": "admin2@admin.com",
        "age": "40",
        "password": "admin2123,",
        "image": "admin2.jpg",
        "recipes": [],
        "comments": []
      },
      {
        "name": "User1",
        "role": "user",
        "email": "user1@user.com",
        "age": "30",
        "password": "user1123,",
        "image": "user1.jpg",
        "recipes": [],
        "comments": []
      },
      {
        "name": "User2",
        "role": "user",
        "email": "user2@user.com",
        "age": "20",
        "password": "user2123,",
        "image": "user2.jpg",
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
.catch((error)=> console.log("error deleting users",error))
.then(async ()=> {
    const userMap = arrayUsers.map((user) => new User(user));
    await User.insertMany(userMap);
    console.log("users insert correctly");
})
.catch((error) => console.log("error inserting users", error))
.finally(()=> mongoose.disconnect())