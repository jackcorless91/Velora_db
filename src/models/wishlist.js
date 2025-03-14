const mongoose = require("mongoose")

const WishlistSchema = mongoose.Schema ({
    product_id: {
        type: mongoose.Types.ObjectId,
        ref: "Product"
    },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
})

const Wishlist = mongoose.model("Wishlist", WishlistSchema)

module.exports = Wishlist