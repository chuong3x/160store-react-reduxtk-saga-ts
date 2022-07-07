import express from "express";
import * as Product from "../controllers/ProductController.js";

const router = express.Router();

router.get("/", Product.getProducts);
router.get("/:slug", Product.getProductDetail);
router.post("/", Product.createProduct);
router.put("/", Product.updateProduct);

export default router;
