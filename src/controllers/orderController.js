const Order = require("../models/order")

async function getOrders () {
    const orders = await Order.find()
    return orders
}

async function getOrder(orderId) {
    const order = await Order.findById(orderId)
    return order
}

async function createOrder(order) {
    const newOrder = await Order.create(order)
    return newOrder
}

async function updateOrder(orderId, order) {
    const updatedOrder = await Order.findByIdAndUpdate(orderId, order, { new: true })
    return updatedOrder
}

async function deleteOrder(orderId) {
    const deletedOrder = await Order.findByIdAndDelete(orderId)
    return deletedOrder
}

module.exports = {
    getOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder
}