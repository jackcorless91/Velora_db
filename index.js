const express = require("express")
const mongoose = require("mongoose")

const userRouter = require("./src/routes/userRouter")
const productRouter = require("./src/routes/productRouter")
const wishlistRouter = require("./src/routes/wishlistRouter")
const cartRouter = require("./src/routes/cartRouter")
const orderRouter = require("./src/routes/orderRouter")

const app = express()

app.use(express.json())

app.use("/user", userRouter)
app.use("/product", productRouter)
app.use("/wishlist", wishlistRouter)
app.use("/cart", cartRouter)
app.use("/order", orderRouter)

app.listen(3000, async () => {
    console.log("server started")
    await mongoose.connect("mongodb://127.0.0.1:27017/velora_db")
    console.log("database connected")
})


// users - done
// carts - done
// products - done
// wishlists - done
// orders
// payments
// reviews
// categories
