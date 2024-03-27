const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    availability: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Product', productSchema);
