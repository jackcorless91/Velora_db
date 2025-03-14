const mongoose = require("mongoose")

const PaymentSchema = mongoose.Schema({
    payment_date: Date,
    payment_type: String,
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    order_id: {
        type: mongoose.Types.ObjectId,
        ref: "Order"
    }
})

const Payment = mongoose.model("Payment", PaymentSchema)

module.exports = PaymentSchema