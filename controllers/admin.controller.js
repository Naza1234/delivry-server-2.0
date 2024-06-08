const Admin = require('../models/admin.model');

// Create a shipment package
exports.createAdmin = async (req, res) => {
    try {
        const admin = new Admin({
            userName:req.body.name,  
            userPassword:req.body.password,  
        });

        const savedAdmin = await admin.save();
        res.json(savedAdmin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.loginAdmin = async (req, res) => {
    try {
        // Find the admin by username
        const admin = await Admin.findOne({ userName: req.body.name });
        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        // Compare the provided password with the stored password
        if (req.body.password !== admin.userPassword) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Respond with the admin details
        res.json( admin );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all shipment packages
exports.getAllAdmins = async (req, res) => {
    try {
        const Admins = await Admin.find();
        res.json(Admins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getAdminsByShipmentId = async (req, res) => {
    try {
        const Admins = await Admin.findOne({shipmentId : req.params.id});
        res.json(Admins);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Find one shipment package by id
exports.findOneAdminById = async (req, res) => {
    try {
        const Admin = await Admin.findById(req.params.id);
        res.json(Admin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete one shipment package by id
exports.deleteOneAdminById = async (req, res) => {
    try {
        await Admin.findByIdAndDelete(req.params.id);
        res.json({ message: 'Shipment package deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update one shipment package by id
exports.updateOneAdminById = async (req, res) => {
    try {
        const updatedAdmin = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedAdmin);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
