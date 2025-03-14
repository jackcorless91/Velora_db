const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    stock: Number,
    dinosaur_type: String
    // category_id {
    //     type: mongoose.Types.ObjectId,
    //     ref: "Category"
    // }
//     no category schema yet
})

const Product = mongoose.model("Product", ProductSchema)

module.exports = Product