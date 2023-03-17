import { Router } from "express";
import {
  getAllProductsController,
  createProductController,
  deleteProductsController,
  updateProductController,
} from "../controllers/products";

const router = Router();

router.get("/", getAllProductsController);
router.post("/", createProductController);
router.delete("/:id", deleteProductsController);
router.put("/:productId", updateProductController);

export default router;
