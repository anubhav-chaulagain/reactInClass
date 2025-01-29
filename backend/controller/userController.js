const Users = require("../model/userSchema");
 
const getAllEmployee = async (req, res) => {
  console.log("Get Alls");
  try {
    const users = await Users.findAll();
 
    if (users.length === 0) {
      return res.status(200).json("All Users are fetched");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json("Error While fetching");
  }
};
 
const saveAllEmployee = async (req, res) => {
  console.log(req.body);
  const { name, userId } = req.body;
  try {
    const user = await Users.findOne({ where: { userId: userId } });
 
    if (user == null) {
      await Users.create(req.body);
      return res.status(201).json({ message: "Users Added Sucessfully" });
    }
    return res.status(500).json({ message: "user is already Present" });
  } catch (error) {
    console.log(error);
  }
};
 
module.exports = { getAllEmployee, saveAllEmployee };
 