const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String,
        required: true,
        unique: true
    },
    buyerDetails: {
        name: { type: String, required: true },
        address: { type: String, required: true },
        contactNumber: { type: String, required: true }
    },
    items: [{
        itemName: { type: String, required: true },
        hsnCode: { type: String, required: true },
        gstRate: { type: Number, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

invoiceSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;