const Shipment = require('../models/shipment.model');

// Create a shipment
exports.createShipment = async (req, res) => {
    try {
        // Generate trackingId with 10 random characters
        const characters = '1234567890qwertyuiopasdfghjklzxcvbnm';
        let trackingId = 'TME';
        for (let i = 0; i < 7; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            trackingId += characters[randomIndex];
        }

        const shipment = new Shipment({
            from: req.body.from,
            to: req.body.to,
            trackingId: trackingId
        });

        const savedShipment = await shipment.save();
        res.json(savedShipment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Find a shipment by trackingId
exports.findShipmentByTrackingId = async (req, res) => {
    try {
        const trackingId = req.params.trackingId;
        const shipment = await Shipment.findOne({ trackingId: new RegExp(`^${trackingId}$`, 'i') });
        res.json(shipment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Find one shipment by id
exports.findOneShipmentById = async (req, res) => {
    try {
        const shipment = await Shipment.findById(req.params.id);
        res.json(shipment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all shipments
exports.getAllShipments = async (req, res) => {
    try {
        const shipments = await Shipment.find();
        res.json(shipments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete one shipment by id
exports.deleteOneShipmentById = async (req, res) => {
    try {
        await Shipment.findByIdAndDelete(req.params.id);
        res.json({ message: 'Shipment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update one shipment by id
exports.updateOneShipmentById = async (req, res) => {
    try {
        const updatedShipment = await Shipment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedShipment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
