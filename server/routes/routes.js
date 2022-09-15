if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const bodyParser = require('body-parser');
// const bcrypt = require('bacryptjs/dist/bcrypt');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs/dist/bcrypt');
const path = require('path');
const jwt = require('jsonwebtoken');
const { builtinModules } = require('module');
const fs = require('fs').promises;
const cors = require('cors');

//******************* */
//env variables
//******************* */
const JWT_SECRET = process.env.JWT_SECRET;
//path to mongodb
const db_URI = process.env.LOCAL_MONGODB;
//admin password
const ADMIN_PASS = process.env.ADMIN_PASS;


//middleware
router.use(bodyParser.json());
router.use(cors());
router.use(express.json());

//client connect test
router.post('/testConnect', async (req, res)=>{
    // console.log(req);
    return res.json({status: 'ok', body: 'Connection to server has been established!'});
    // res.send("test test test");
});

module.exports = router;