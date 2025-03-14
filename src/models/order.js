const mongoose = require("mongoose")

const OrderSchema = mongoose.Schema({
    order_date: Date,
    receipt_date: Date,
    delivery_date: Date,
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    product_id: {
        type: mongoose.Types.ObjectId,
        ref: "Product"
    }
})

const Order = mongoose.model("Order", OrderSchema)

module.exports = Order

