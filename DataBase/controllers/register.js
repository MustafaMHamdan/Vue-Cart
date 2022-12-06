const connection = require("../models/db");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const register = async (req, res) => {
  const { name, phone, email, password } =
    req.body;

  const encryptedPassword = await bcrypt.hash(password, saltRounds);

  const query = `INSERT INTO users (name,phone, email ,password) VALUES (?,?,?,?)`;
  const data = [
    name,phone,
       email,
    encryptedPassword,
     
  ];
  connection.query(query, data, (err, result) => {
    if (err) {
    return  res.status(409).json({
        success: false,
        massage: "The email already exists",
        err
      });
    }
   return res.status(200).json({
      success: true,
      massage: "Account Created Successfully",
      result
    });
  });
};

module.exports = {
  register,
}