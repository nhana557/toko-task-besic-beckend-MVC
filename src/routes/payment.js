const express = require("express");
const router = express.Router();
const paymentController = require("../controller/payment");


router.get("/", paymentController.allPayment);
router.post("/", paymentController.insert);
router.put("/:id", paymentController.update);
router.delete("/:id", paymentController.delete);

module.exports = router;