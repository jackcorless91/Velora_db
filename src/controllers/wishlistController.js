const Wishlist = require("../models/wishlist")

async function getWishlists() {
    const wishlists = await Wishlist.find()
    return wishlists
}

async function getWishlist(wishlistId) {
    const wishlist = await Wishlist.findById(wishlistId)
    return wishlist
}

async function createWishlist(wishlist) {
    const newWishlist = await Wishlist.create(wishlist)
    return newWishlist
}

async function updateWishlist(wishlistId, wishlist) {
    const updatedWishlist = await Wishlist.findByIdAndUpdate(wishlistId, wishlist, { new: true })
    return updatedWishlist
}

async function deleteWishlist(wishlistId) {
    const deletedWishlist = await Wishlist.findByIdAndDelete(wishlistId)
    return deletedWishlist
}

module.exports = {
    getWishlists,
    getWishlist,
    createWishlist,
    updateWishlist,
    deleteWishlist
}