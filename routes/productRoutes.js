const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/low-stock", productController.getLowStockProducts);

router.post("/", productController.createProduct);
router.get("/", productController.getProducts);
router.get("/:id", productController.getProductById);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

router.post("/:id/increase", productController.increaseStock);
router.post("/:id/decrease", productController.decreaseStock);

module.exports = router;
