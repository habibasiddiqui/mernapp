const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const dbConnect = require('./config/db.js');
var cors = require('cors');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);


const userRoute = require('./routes/api/users')
const postRoute = require('./routes/api/posts') 



app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '30mb' }));

const PORT = process.env.PORT || 4000
///connect to db
dbConnect();
///to start app
app.listen(PORT, (req,res)=>{
console.log('server is running at', PORT)
})

// // setting up connect-mongodb-session store
// const dotenv = require('dotenv');
// dotenv.config();

// const mongoDBstore = new MongoDBStore({
//     uri: process.env.MONGO_URI,
//     collection: "mySessions"
// });

// const MAX_AGE = 1000 * 60 * 60 * 3; // Three hours
// app.use(
//     session({
//       name: 'online-users', //name to be put in "key" field in postman etc
//       secret: 'secret',
//       resave: true,
//       saveUninitialized: false,
       
//       store: mongoDBstore,
//       cookie: {
//         maxAge: MAX_AGE,
//         // sameSite: false,
//         // userID: '',
//         // userName: '',
//         // role: '',  
//         secure: true
//       }
//     })
// );





///Routes
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);

