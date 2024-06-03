const ShipmentRating = require('../models/shipmentRating.model');

// Create a shipment rating
exports.createShipmentRating = async (req, res) => {
    try {
        const shipmentRating = new ShipmentRating({
            from: req.body.from,
            to: req.body.to
        });

        const savedShipmentRating = await shipmentRating.save();
        res.json(savedShipmentRating);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all shipment ratings
exports.getAllShipmentRatings = async (req, res) => {
    try {
        const shipmentRatings = await ShipmentRating.find();
        res.json(shipmentRatings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Find one shipment rating by id
exports.findOneShipmentRatingById = async (req, res) => {
    try {
        const shipmentRating = await ShipmentRating.findById(req.params.id);
        res.json(shipmentRating);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete one shipment rating by id
exports.deleteOneShipmentRatingById = async (req, res) => {
    try {
        await ShipmentRating.findByIdAndDelete(req.params.id);
        res.json({ message: 'Shipment rating deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update one shipment rating by id
exports.updateOneShipmentRatingById = async (req, res) => {
    try {
        const updatedShipmentRating = await ShipmentRating.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedShipmentRating);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
