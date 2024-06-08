const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/admin.controller');

router.post('/admin', AdminController.createAdmin);
router.get('/admin', AdminController.getAllAdmins);
router.get('/admin/:id', AdminController.findOneAdminById);
router.get('/admin-by-admin-id/:id', AdminController.getAdminsByShipmentId);
router.delete('/admin/:id', AdminController.deleteOneAdminById);
router.put('/admin/:id', AdminController.updateOneAdminById);

module.exports = router;
