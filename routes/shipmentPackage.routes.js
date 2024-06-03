const express = require('express');
const router = express.Router();
const shipmentPackageController = require('../controllers/shipmentPackage.controller');

router.post('/shipment-packages', shipmentPackageController.createShipmentPackage);
router.get('/shipment-packages', shipmentPackageController.getAllShipmentPackages);
router.get('/shipment-packages/:id', shipmentPackageController.findOneShipmentPackageById);
router.get('/shipment-packages-by-shipment-id/:id', shipmentPackageController.getShipmentPackagesByShipmentId);
router.delete('/shipment-packages/:id', shipmentPackageController.deleteOneShipmentPackageById);
router.put('/shipment-packages/:id', shipmentPackageController.updateOneShipmentPackageById);

module.exports = router;
