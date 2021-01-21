const express = require("express");
const router = express.Router();
//const users = require('../../Users');
const User = require("../../models/users.js");

//Get all users
router.get("/", async (req, res) => {
  try {

    const users = await User.find();
    console.log(users);
    res.status(200).json({ success: true, data: users });
  } 
  catch (e) {
    res.status(404).json({ success: false, error: err.message });
  }
});
router.post("/", async (req, res) => {
  try{
    User.findOne({email: req.body.email})
    .then(user => {
      if(user){
        res.json({
          success: false,
          status: 404,
          msg: "Uset already exists"
        })
      }
      else{
        const user = await User.create(req.body);
        res.status(201).json({
        success: true,
        dbid: user._id
      });
    } // else end
  }) //then end
  }  //try end
  catch (err) {
    console.log(err);
    res.status(400).json({ success: false, error: err.message });
  }


});

//Get single user
router.get('/:id', async (req, res) => {
    try {
    const userOne = await User.findById(req.params.id);
    res.status(200).json({ success: true, data: userOne });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }

    // let id = parseInt(req.params.id)
    // console.log(id)
    // let result = users.filter((item) => item.id == id)
    // res.json(result[0])
});

module.exports = router;
