const User = require('../model/Users')
const Stripe = require('stripe');


const Create_Online_Payment = async (req, res) => {
  const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

  const checkout =  await stripe.checkout.sessions.create({
    success_url: 'https://example.com/success',
    cancel_url: 'https://example.com/cancel',
    line_items: [
      {
         price_data : {
          currency : "usd",
          product_data : {
            name : "Samsung s 20"
          },
          unit_amount: 1000 * 100,
        },
        quantity: 1
      },
    ],
    mode: 'payment',
  })


  res.send({
    message:"Checkout Successfully",
    status:200,
    data: checkout
  })

}

const For_Stripe_Account_Creation = async (req, res) => {

  const User_Id = req.params.uid;

  const UserInfo = await User.findById(User_Id);
  const country_code = UserInfo.country
  const code = country_code.split('')
  const [a, b, c, d, e, f, g, ...h] = code;

  const cocode = a + g

  const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
  const account = await stripe.accounts.create({
    type: req.body.type || "custom",
    country: cocode,
    email: UserInfo.email,
    capabilities: {
      card_payments: { requested: true },
      transfers: { requested: true },
    },
  })

  res.send({
    message: "Account Created Successfully",
    status: 200,
    data: account
  })

}

module.exports = {
  Create_Online_Payment,
  For_Stripe_Account_Creation
}