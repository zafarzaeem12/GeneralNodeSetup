const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userid:{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [
        {
          productsId: {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Product'
          },
          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
    price:{
        type: Number,
        required: true
    }
},
    { timestamps: true }
)
module.exports = mongoose.model("Order", OrderSchema);