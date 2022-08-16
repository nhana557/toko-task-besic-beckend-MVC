const express = require("express");
const router = express.Router();
const transaksi_detailController = require("../controller/transaksi_detail");

router.get("/", transaksi_detailController.allTransaksiDetail);
router.post("/", transaksi_detailController.insert);
router.put("/:id", transaksi_detailController.update);
router.delete("/:id", transaksi_detailController.delete);


module.exports = router;