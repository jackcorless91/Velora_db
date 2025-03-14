const Product = require("../models/product")

async function getProducts() {
    const products = await Product.find()
    return products
}

async function getProduct(productId) {
    const product = await Product.findById(productId)
    return product
}

async function createProduct(product) {
    const newProduct = await Product.create(product)
    return newProduct
}

async function updateProduct(productId, product) {
    const updatedProduct = await Product.findByIdAndUpdate(productId, product, { new: true })
    return updatedProduct
}

async function deleteProduct(productId) {
    const deletedProduct = await Product.findByIdAndDelete(productId)
    return deletedProduct
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}