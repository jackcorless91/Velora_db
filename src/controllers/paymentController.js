const Payment = require("../models/payment")

async function getPayments() {
    const payments = await Payment.find()
    return payments
}

async function getPayment(paymentId) {
    const payment = await Payment.findById(paymentId)
    return payment
}

async function createPayment(payment) {
    const newPayment = await Payment.create(payment)
    return newPayment
}

async function updatePayment(paymentId, payment) {
    const updatedPayment = await Payment.findByIdAndUpdate(paymentId, payment, { new: true })
    return updatedPayment
}

async function deletePayment(paymentId) {
    const deletedPayment = await Payment.findByIdAndDelete(paymentId)
    return deletedPayment
}

module.exports = {
    getPayments,
    getPayment,
    createPayment,
    updatePayment,
    deletePayment
}