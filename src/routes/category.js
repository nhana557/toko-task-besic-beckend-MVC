const express = require("express");
const router = express();
const categoryController = require("../controller/category");

router.get("/cari", categoryController.searching);
router.get("/", categoryController.allCategory);
router.get("/:id", categoryController.category);
router.post("/", categoryController.insert);
router.get("/:id", categoryController.category);
router.put("/:id", categoryController.update);
router.delete("/:id", categoryController.deleted);


module.exports = router;