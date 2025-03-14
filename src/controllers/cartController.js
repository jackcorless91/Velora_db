const Cart = require("../models/cart")

async function getCarts() {
    const carts = await Cart.find()
    return carts
}

async function getCart(wishlistId) {
    const cart = await Cart.findById(wishlistId)
    return cart
}

async function createCart(wishlist) {
    const newCart = await Cart.create(wishlist)
    return newCart
}

async function updateCart(wishlistId, wishlist) {
    const updatedCart = await Cart.findByIdAndUpdate(wishlistId, wishlist, { new: true })
    return updatedCart
}

async function deleteCart(wishlistId) {
    const deletedCart = await Cart.findByIdAndDelete(wishlistId)
    return deletedCart
}

module.exports = {
    getCarts,
    getCart,
    createCart,
    updateCart,
    deleteCart
}