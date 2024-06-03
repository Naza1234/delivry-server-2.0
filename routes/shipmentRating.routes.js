const express = require('express');
const router = express.Router();
const shipmentRatingController = require('../controllers/shipmentRating.controller');

router.post('/shipment-ratings', shipmentRatingController.createShipmentRating);
router.get('/shipment-ratings', shipmentRatingController.getAllShipmentRatings);
router.get('/shipment-ratings/:id', shipmentRatingController.findOneShipmentRatingById);
router.delete('/shipment-ratings/:id', shipmentRatingController.deleteOneShipmentRatingById);
router.put('/shipment-ratings/:id', shipmentRatingController.updateOneShipmentRatingById);

module.exports = router;
