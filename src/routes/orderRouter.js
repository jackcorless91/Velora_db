const express = require("express")

const {
    getOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder
} = require("../controllers/orderController")
const mongoose = require("mongoose");

const orderRouter = express.Router()

// GET - /order
orderRouter.get("/", async (req, res) => {
    const orders = await getOrders()
    res.json(orders)
})

// GET a single product - /order/id
orderRouter.get("/:orderId", async (req, res) => {
    const order = await getOrder(req.params.orderId)
    if (order) {
        res.json(order)
    } else {
        res.status(404).json({ error: `Order with id ${req.params.orderId} not found` })
    }
})

// POST -/order
orderRouter.post("/", async (req, res) => {
    const bodyData = {
        order_date: req.body.order_date,
        receipt_date: req.body.receipt_date,
        delivery_date: req.body.delivery_date,
        user_id: req.body.user_id,
        product_id: req.body.product_id
    }
    const newOrder = await createOrder(bodyData)
    res.json(newOrder)
})

// PATCH - /order/id
orderRouter.patch("/:orderId", async (req, res) => {
    const bodyData = {
        order_date: req.body.order_date,
        receipt_date: req.body.receipt_date,
        delivery_date: req.body.delivery_date,
        user_id: req.body.user_id,
        product_id: req.body.product_id
    }
    const updatedOrder = await updateOrder(req.params.orderId, bodyData)
    if (updatedOrder) {
        res.json(updatedOrder)
        console.log(`Order with id ${req.params.orderId} updated successfully`)
    } else {
        res.status(404).json({ error: `Order with id ${req.params.orderId} not found` })
    }
})

// DELETE - /order/id
orderRouter.delete("/:orderId", async (req, res) => {
    const updatedOrder = await deleteOrder(req.params.orderId)
    if (updatedOrder) {
        res.json(updatedOrder)
        console.log(`Order with id ${req.params.orderId} deleted successfully`)
    } else {
        res.status(404).json({ error: `Order with id ${req.params.orderId} not found` })
    }
})

module.exports = orderRouter