const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbConnect = require('./config/db.js');
var cors = require('cors')
const userRoute = require('./routes/api/users')
const postRoute = require('./routes/api/posts') 

// // for image 
// // var mongoose = require('mongoose')
// var fs = require('fs');
// // var path = require('path');
// // require('dotenv/config');
// // for image

const app = express();
app.use(cors())
app.use(bodyParser.json({ extended: true }));
const PORT = process.env.PORT || 4000
///connect to db
dbConnect();
///to start app
app.listen(PORT, (req,res)=>{
console.log('server is running at', PORT)
})

///Routes
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);


// image/products
// app.set("view engine", "ejs");
// var multer = require('multer');
 
// var storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads')
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.fieldname + '-' + Date.now())
//     }
// });
 
// var upload = multer({ storage: storage });

// // var imgModel = require('./models/products');

// const productRoute = require('./routes/api/products') 
// app.use('/api/products', productRoute);
