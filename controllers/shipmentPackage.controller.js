const ShipmentPackage = require('../models/shipmentPackage.model');

// Create a shipment package
exports.createShipmentPackage = async (req, res) => {
    try {
        const shipmentPackage = new ShipmentPackage({
            shipmentId: req.body.shipmentId,
            productName: req.body.productName,
            productWeight: req.body.productWeight,
            productSize: req.body.productSize
        });

        const savedShipmentPackage = await shipmentPackage.save();
        res.json(savedShipmentPackage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all shipment packages
exports.getAllShipmentPackages = async (req, res) => {
    try {
        const shipmentPackages = await ShipmentPackage.find();
        res.json(shipmentPackages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getShipmentPackagesByShipmentId = async (req, res) => {
    try {
        const shipmentPackages = await ShipmentPackage.findOne({shipmentId : req.params.id});
        res.json(shipmentPackages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Find one shipment package by id
exports.findOneShipmentPackageById = async (req, res) => {
    try {
        const shipmentPackage = await ShipmentPackage.findById(req.params.id);
        res.json(shipmentPackage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete one shipment package by id
exports.deleteOneShipmentPackageById = async (req, res) => {
    try {
        await ShipmentPackage.findByIdAndDelete(req.params.id);
        res.json({ message: 'Shipment package deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update one shipment package by id
exports.updateOneShipmentPackageById = async (req, res) => {
    try {
        const updatedShipmentPackage = await ShipmentPackage.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedShipmentPackage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
