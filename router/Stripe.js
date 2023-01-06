const router = require('express').Router();
const auth = require('../middleware/Authentication');
const { 
    Create_Online_Payment,
    For_Stripe_Account_Creation
} = require('../controller/Stripe');

router.post('/payment' , Create_Online_Payment);
router.post('/UserId/:uid/create_stripe_account' , For_Stripe_Account_Creation);

module.exports = router