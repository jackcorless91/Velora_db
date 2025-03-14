const mongoose = require("mongoose")

const CartSchema = mongoose.Schema ({
    product_id: {
        type: mongoose.Types.ObjectId,
        ref: "Product"
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
})

const Cart = mongoose.model("Cart", CartSchema)

module.exports = Cart