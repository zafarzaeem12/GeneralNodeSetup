const router = require('express').Router();
const auth = require('../middleware/Authentication');
const { 
    Create_New_Category
} = require('../controller/Category')

router.post('/create' , auth , Create_New_Category );

module.exports = router