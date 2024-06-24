const mongoose = require('mongoose');

const shipmentPackageSchema = new mongoose.Schema({
    shipmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shipment'
    },
    productName: String,
    productWeight:String,
    BookingMode:String,
    PostingDate:String,
    ConsignmentNo:String,
    productSize: String
},{
    timestamps: true
});

const ShipmentPackage = mongoose.model('ShipmentPackage', shipmentPackageSchema);

module.exports = ShipmentPackage;
