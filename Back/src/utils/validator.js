// Todas las validaciones de datos que hagan falta en el proyecto
const User = require('../api/models/users.models')

// regex email

const validateEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //email
  return regex.test(email);
};
// regex pass

const validatePassword = (password) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; 
  return regex.test(password);
};

const validateEmailDB = async (emailUser) => {
  try {
    const user = await User.find({ email: emailUser });
    console.log(user.length);
    return user.length;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { validateEmail, validatePassword, validateEmailDB };