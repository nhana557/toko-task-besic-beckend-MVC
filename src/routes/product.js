const express = require("express");
const router = express.Router();
const productController = require("../controller/product");


router.get("/cari", productController.searching);
router.get("/", productController.showAllProductLimited);
router.get("/", productController.getAllproduct);
router.get("/:id",productController.getproduct);
router.post("/", productController.insert);
router.put("/:id",productController.update);
router.delete("/:id",productController.delete);

module.exports = router;