const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
    from: {
        name: String,
        company: String,
        countryLocation: String,
        address: String,
        zip: String,
        city: String,
        start: String,
        phone: String,
        email: String
    },
    to: {
        name: String,
        company: String,
        countryLocation: String,
        address: String,
        zip: String,
        city: String,
        start: String,
        phone: String,
        email: String
    },
    trackingId: String,
    currentLocation: {
        type: String,
        default: "loading..."
    },
    currentLocationMap: {
        type: String,
        default: "loading..."
    },
},{
    timestamps: true
});

const Shipment = mongoose.model('Shipment', shipmentSchema);

module.exports = Shipment;
