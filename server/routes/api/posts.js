const express = require("express");
const postRouter = express.Router();
const Post = require("../../models/posts.js");

// images

// const multer = require('multer');

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//       cb(null, 'images');
//   },
//   filename: function(req, file, cb) {   
//       cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
//   }
// });

// const fileFilter = (req, file, cb) => {
//   const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//   if(allowedFileTypes.includes(file.mimetype)) {
//       cb(null, true);
//   } else {
//       cb(null, false);
//   }
// }

// let upload = multer({ storage, fileFilter });

// // make changes here
// postRouter.route('/add').post(upload.single('photo'), (req, res) => {
//     const name = req.body.name;
//     const birthdate = req.body.birthdate;
//     const photo = req.file.filename;

//     const newUserData = {
//         name,
//         birthdate,
//         photo
//     }

//     const newUser = new User(newUserData);

//     newUser.save()
//            .then(() => res.json('User Added'))
//            .catch(err => res.status(400).json('Error: ' + err));
// });



//Get all users
postRouter.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    // console.log(posts);
    res.status(200).json({ success: true, data: posts });
  } 
  catch (e) {
    res.status(404).json({ success: false, error: err.message });
  }
});
postRouter.post("/", async (req, res) => {
  try{
      const post = await Post.create(req.body);
      res.status(201).json({
      success: true,
      dbid: post._id
    });
  } 
  catch (err) {
    console.log(err);
    res.status(400).json({ success: false, error: err.message });
  }

});

//Get single post
postRouter.get('/:id', async (req, res) => {
    try {
    const postOne = await Post.findById(req.params.id);
    res.status(200).json({ success: true, data: postOne });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }

});



// Delete single post
postRouter.delete('/:id', async (req, res) => {
  try {
    const delOne = await Post.findByIdAndRemove(req.params.id);
      // if (err){ 
      //     console.log(err) 
      // } 
      // else{ 
      //     console.log("Removed User : ", docs); 
      // } 
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

module.exports = postRouter;
