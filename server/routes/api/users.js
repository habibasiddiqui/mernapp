const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
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
  let {email, name, pwd} = req.body;
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(pwd, salt);
  let newUser = { pwd: hash, email, name }
  try{
    User.findOne({email: req.body.email})
    .then(user => { 
      if(!user)
      {
        User.create(newUser)
        .then (user => {
          res.json({
            status: 201,
            success: true,
            dbid: user._id,
            unique: true,
            msg: 'user created',
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

// SIGNIN
router.post('/login', async (req, res) => {
  let { pwd, email } = req.body;
  // console.log(req.body)
  try {
    User.findOne({ email })
      .then(user => {
        // console.log(user)
        bcrypt.compare(pwd, user.pwd).then((isMatch) => {
          if (!isMatch) 
            return res.status(400).json({ msg: "Invalid credentials" });
          else {
            let sessUser = { id: user._id, name: user.name, email: user.email };
            req.session.user = sessUser;
            // console.log(req.session.user);
            res.json({
              status: 200,
              data: user,
              msg: "login success"
            })

          }//else
        }) //bcypt then
        // .catch(err => console.log('.....', err))
      })//usr then
  }//try
  catch (error) {
    console.log(error)
  }
} // POST
)

// SIGNOUT
router.post('/logout',(req,res)=>{
  req.session.destroy( err => {
    if (err)
    {
      res.json({
        status: 400,
        msg: 'logout failed'
      })
    } //IF
    else 
    {
      res.clearCookie('session-id');
      res.json({
        status: 200,
        msg: 'logout successful'
      })
    } //ELSE
  }) //SESSION.DESTROY
  
}) //POST

module.exports = router;
