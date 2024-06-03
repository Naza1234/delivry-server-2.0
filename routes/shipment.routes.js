const express = require('express');
const router = express.Router();
const shipmentController = require('../controllers/shipment.controller');

router.post('/shipments', shipmentController.createShipment);
router.get('/shipments/trackingId/:trackingId', shipmentController.findShipmentByTrackingId);
router.get('/shipments/:id', shipmentController.findOneShipmentById);
router.get('/shipments', shipmentController.getAllShipments);
router.delete('/shipments/:id', shipmentController.deleteOneShipmentById);
router.put('/shipments/:id', shipmentController.updateOneShipmentById);

module.exports = router;
