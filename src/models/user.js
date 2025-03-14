const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    // add security string as placeholder
    phone_number: {
        type: Number,
        length: 11,
        unique: true
    }
})

const User = mongoose.model("User", UserSchema)

module.exports = User