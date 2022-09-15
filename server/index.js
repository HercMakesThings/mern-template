// if(process.env.NODE_ENV !== 'production'){
//     require('dotenv').config();
// }
require('dotenv').config();
const express = require('express');
const app = express();
// const upload = multer({dest: '../public/csv/'});
const fs = require('fs');
const port = process.env.PORT || 3002;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs/dist/bcrypt');
const path = require('path');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

//******************* */
//env variables
//******************* */
const JWT_SECRET = process.env.JWT_SECRET;
//path to mongodb
const db_URI = process.env.LOCAL_MONGODB;
//path to DOCKERFIED mongodb container db
// const docker_db_URI = process.env.CONTAINER_MONGODB;
// const docker_db_URI = 'mongodb://mongodb:27017/hercgg';
//admin password
const ADMIN_PASS = process.env.ADMIN_PASS;

//route handler
const myRoutes = require('./routes/routes.js');

//Checks whether admin user exists in mongodb and creates it if not
// async function checkAdmin(){
//     const user = await User.findOne({username: 'herc'}).lean();
//     try{
//         if(!user){
//             const username = 'herc';
//             const password = await bcrypt.hash(ADMIN_PASS, 10);
//             await User.create({ username, password });
//         }
//     }catch(e){
//         console.log(e);
//     }
//     // console.log(user);
// }


//connecting to mongodb and set server to listen for port after
// mongoose.connect(db_URI)
//     .then(result=>{
//         app.listen(port, ()=>console.log(`Now Listening on port...${port}`))
//     })
//     .then(checkAdmin)
//     .catch(err=>console.log(err));


//middleware
app.use(myRoutes);
// app.use(express.static('public'));
app.use(bodyParser.json());


app.listen(port, ()=>console.log(`Now Listening on port...${port}`));