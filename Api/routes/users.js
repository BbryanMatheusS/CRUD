import express from "express";
import { getUsers, addUser, updadteUser, deleteUser } from "../controllers/user.js"

const router = express.Router()

router.get("/", getUsers)

router.post("/", addUser)

router.put("/:id", updadteUser)

router.delete("/:id", deleteUser)

export default router;