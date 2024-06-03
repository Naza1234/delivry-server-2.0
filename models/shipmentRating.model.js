const mongoose = require('mongoose');

const shipmentRatingSchema = new mongoose.Schema({
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
},{
    timestamps: true
});

const ShipmentRating = mongoose.model('ShipmentRating', shipmentRatingSchema);

module.exports = ShipmentRating;
