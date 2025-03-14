const express = require("express")

const {
    getPayments,
    getPayment,
    createPayment,
    updatePayment,
    deletePayment
} = require("../controllers/paymentController")
const mongoose = require("mongoose");

const paymentRouter = express.Router()

// GET - /payment
paymentRouter.get("/", async (req, res) => {
    const payments = await getPayments()
    res.json(payments)
})

// GET a single payment - /payment/id
paymentRouter.get("/:paymentId", async (req, res) => {
    const payment = await getPayment(req.params.paymentId)
    if (payment) {
        res.json(payment)
    } else {
        res.status(404).json({ error: `Payment with id ${req.params.paymentId} not found` })
    }
})

// POST - /payment
paymentRouter.get("/", async (req, res) => {
    const bodyData = {
        payment_date: req.body.payment_date,
        payment_type: req.body.payment_type,
        user_id: req.body.user_id,
        order_id: req.body.order_id
    }
    const newPayment = await createPayment(bodyData)
    res.json(newPayment)
})

// PATCH - /payment/id
paymentRouter.patch("/:paymentId", async (req, res) => {
    const bodyData = {
        payment_date: req.body.payment_date,
        payment_type: req.body.payment_type,
        user_id: req.body.user_id,
        order_id: req.body.order_id
    }
    const updatedPayment = await updatePayment(req.params.paymentId)
    if (updatedPayment) {
        res.json(updatedPayment)
        console.log(`Payment with id ${req.params.paymentId} updated successfully`)
    } else {
        res.status(404).json({ error: `Payment with id ${req.params.paymentId} not found` })
    }
})

// DELETE - /user/id
paymentRouter.delete("/:paymentId", async (req, res) => {
    const deletedPayment = await deletePayment(req.params.paymentId)
    if (deletedPayment) {
        res.json(deletedPayment)
        console.log(`Payment with id ${req.params.paymentId} deleted successfully`)
    } else {
        res.status(404).json({ error: `Payment with id ${req.params.paymentId} not found` })
    }
})

module.exports = paymentRouter