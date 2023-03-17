import { Router } from "express";
import {
  getAllOrderController,
  createOrderController,
  deleteOrderController,
  updateOrderController,
} from "../controllers/orders";

const router = Router();

router.get("/", getAllOrderController);
router.post("/:userId", createOrderController);
router.delete("/:id", deleteOrderController);
router.put("/:id", updateOrderController);
//there should not be any orders created manually in DB, it will be created from postman

export default router;
