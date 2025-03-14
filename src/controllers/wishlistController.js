const Wishlist = require("../models/wishlist")

async function getWishlist() {
    const wishlists = await Wishlist.find()
    return wishlists
}

module.exports = getWishlist