const express = require("express");
const postRouter = express.Router();
const Post = require("../../models/posts.js");

//Get all users
postRouter.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    console.log(posts);
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
// postRouter.delete('/:id', async (req, res) => {
//   try {
//     const delOne = await Post.findByIdAndRemove(req.params.id, function (err, data) { 
//       // if (err){ 
//       //     console.log(err) 
//       // } 
//       // else{ 
//       //     console.log("Removed User : ", docs); 
//       // } 
//       res.status(200).json({
//         del: data
//       })
//       console.log("Removed User : ", docs);
//   }); 
// } catch (err) {
//   res.status(400).json({ success: false, error: err.message });
// }


postRouter.delete('/:id', async (req, res) => {
  try {
    const delOne = await Post.findByIdAndRemove(req.params.id);
      // if (err){ 
      //     console.log(err) 
      // } 
      // else{ 
      //     console.log("Removed User : ", docs); 
      // } 
      res.status(200).json({
        del: delOne
      })
      console.log("Removed User : ", delOne);
 
} catch (err) {
  res.status(400).json({ success: false, error: err.message });
}

});

module.exports = postRouter;
