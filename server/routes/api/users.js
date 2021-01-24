const express = require("express");
const router = express.Router();
//const users = require('../../Users');
const User = require("../../models/users.js");

//Get all users
router.get("/", async (req, res) => {
  try {

    const users = await User.find();
    // console.log(users);
    res.status(200).json({ success: true, data: users });
  } 
  catch (e) {
    res.status(404).json({ success: false, error: err.message });
  }
});

// add single user
router.post("/", async (req, res) => {
  try{
    User.findOne({email: req.body.email})
    .then(user => { 
      if(!user)
      {
        User.create(req.body)
        .then (user => {
          res.json({
            status: 201,
            success: true,
            dbid: user._id,
            unique: true,
            // msg: 'user created',
          });
        })
      }
    })
    .catch(err => {
      res.json({
      success: false,
      status: 404,
      unique: false,
      msg: err, 
      })
    })
    

  } // try end
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
});

// delete single user
router.delete('/:id', async (req, res) => {
  try {
    const delOne = await User.findByIdAndRemove(req.params.id);
      res.json({
        success: true,
        status: 200,
        del: delOne,
      })
      console.log("Removed User : ", delOne);
 
} catch (err) {
  res.json({ 
    success: false,
    status: 400,
    error: err.message });
}

});

module.exports = router;
