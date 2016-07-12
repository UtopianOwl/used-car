var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var contactSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model("Contact", contactSchema);