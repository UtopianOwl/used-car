var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var carSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    reviews: {
        type: Number,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    img: {
        front: {
            type: String,
            required: true
        },
        side: {
            type: String,
            required: true
        }
    }
});

module.exports = mongoose.model("Car", carSchema);