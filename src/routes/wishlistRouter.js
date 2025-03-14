const express = require("express")

const {
    getWishlists,
    getWishlist,
    createWishlist,
    updateWishlist,
    deleteWishlist
} = require("../controllers/wishlistController")

const wishlistRouter = express.Router()

// GET - /wishlist
wishlistRouter.get("/", async (req, res) => {
    const wishlists = await getWishlists()
    res.json(wishlists)
})

// GET a single wishlist - /wishlist/id
wishlistRouter.get("/:wishlistId", async (req, res) => {
    const wishlist = await getWishlist(req.params.wishlistId)
    if (wishlist) {
        res.json(wishlist)
    } else {
        res.status(400).json({ error: `Wishlist with id ${req.params.wishlistId} not found` })
    }
})

// POST -/wishlist
wishlistRouter.post("/", async (req, res) => {
    const bodyData = {
        product_id: req.body.product,
        user_id: req.body.user_id
    }
    const newWishlist = await createWishlist(bodyData)
    res.json(newWishlist)
})

// PATCH - /wishlist/id
wishlistRouter.patch("/:wishlistId", async (req, res) => {
    const bodyData = {
        product_id: req.body.product,
        user_id: req.body.user_id
    }
    const updatedWishlist = await updateWishlist(req.params.wishlistId, bodyData)
    if (updatedWishlist) {
        res.json(updatedWishlist)
        console.log(`wishlist with id ${req.params.wishlistId} updated successfully`)
    } else {
        res.status(404).json({ error: `wishlist with id ${req.params.wishlistId} not found` })
    }
})

// DELETE - /wishlist/id
wishlistRouter.delete("/:wishlistId", async (req, res) => {
    const deletedWishlist = await deleteWishlist(req.params.wishlistId)
    if (deletedWishlist) {
        res.json(deletedWishlist)
        console.log(`Wishlist with id ${req.params.wishlistId} deleted successfully`)
    } else {
        res.status(404).json({ error: `Wishlist with id ${req.params.wishlistId} not found` })
    }
})


module.exports = wishlistRouter