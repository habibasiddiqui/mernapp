
const express = require('express');
const router = express.Router();
const Products = require('../../models/products.js');
const { route } = require('./users.js');

router.get("/", async (req, res) => {
    try {
  
      const products = await Products.find();
      console.log(products);
      res.status(200).json({ success: true, data: products });
    } 
    catch (e) {
      res.status(404).json({ success: false, error: err.message });
    }
  });

  router.post("/", async (req, res) => {
    try{
        const product = await Products.create(req.body);
        res.status(201).json({
        success: true,
        dbid: product._id
      });
    } 
    catch (err) {
      console.log(err);
      res.status(400).json({ success: false, error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
    const prodOne = await Products.findById(req.params.id);
    res.status(200).json({ success: true, data: prodOne });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
});

router.delete('/:id'), async (req, res) => {
  try{
    // await Products.findByIdAndDelete(req.params.id)
    const delOne = await Products.findByIdAndDelete(req.params.id);
    
    res.json({
      success: true,
      status: 200,
      // del: delOne,
    })
  }
  catch(err){
    res.json({
      status: 400,
      success: false,
      msg: err.message
    })
  }
}

module.exports = router;
