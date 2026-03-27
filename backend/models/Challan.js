const mongoose = require('mongoose');

const challanSchema = new mongoose.Schema({
    challanNumber: {
        type: String,
        required: true
    },
    invoiceReference: {
        type: String,
        required: true
    },
    recipientDetails: {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        contactNumber: {
            type: String,
            required: true
        }
    },
    items: [{
        catalogNumber: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    deliveryStatus: {
        type: String,
        enum: ['Pending', 'Shipped', 'Delivered', 'Returned'],
        default: 'Pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

challanSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Challan = mongoose.model('Challan', challanSchema);

module.exports = Challan;