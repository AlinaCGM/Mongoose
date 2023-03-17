import { Router } from "express";
import {
  getAllUserController,
  createUserController,
  deleteUserById,
  updateUserController,
} from "../controllers/users";

const router = Router();

router.get("/", getAllUserController);

router.post("/", createUserController);

router.delete("/:id", deleteUserById);

router.put("/:id", updateUserController);

export default router;
