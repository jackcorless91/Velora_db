const express = require("express")

const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require("../controllers/productController")

const productRouter = express.Router()

// GET - /product
productRouter.get("/", async (req, res) => {
    const products = await getProducts()
    res.json(products)
})

// GET a single product - /product/id
productRouter.get("/:productId", async (req, res) => {
    const product = await getProduct(req.params.productId)
    if (product) {
        res.json(product)
    } else {
        res.status(400).json({ error: `Product with id ${req.params.productId} not found` })
    }
})

// POST -/product
productRouter.post("/", async (req, res) => {
    const bodyData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        dinosaur_type: req.params.dinosaur_type
    }
    const newProduct = await createProduct(bodyData)
    res.json(newProduct)
})

// PATCH - /user/id
productRouter.patch("/:productId", async (req, res) => {
    const bodyData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        stock: req.body.stock,
        dinosaur_type: req.params.dinosaur_type
    }
    const updatedProduct = await updateProduct(req.params.productId, bodyData)
    if (updatedProduct) {
        res.json(updatedProduct)
        console.log(`product with id ${req.params.productId} updated successfully`)
    } else {
        res.status(404).json({ error: `Product with id ${req.params.productId} not found` })
    }
})

// DELETE - /user/id
productRouter.delete("/:productId", async (req, res) => {
    const deletedProduct = await deleteProduct(req.params.productId)
    if (deletedProduct) {
        res.json(deletedProduct)
        console.log(`Product with id ${req.params.productId} deleted successfully`)
    } else {
        res.status(404).json({ error: `Product with id ${req.params.productId} not found` })
    }
})

module.exports = productRouter