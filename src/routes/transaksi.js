const express = require("express");
const router = express.Router();
const transakasiController = require("../controller/transaksi");

router.get("/", transakasiController.allTransaksi);
router.get("/:id", transakasiController.getTransaksi);
router.post("/", transakasiController.insert);
router.put("/:id", transakasiController.update);
router.delete("/:id", transakasiController.delete);


module.exports = router;