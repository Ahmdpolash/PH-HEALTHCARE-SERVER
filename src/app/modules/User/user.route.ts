import { Request, Response, Router } from "express";
import { userControllers } from "./user.controllers";

const router = Router();

router.post("/create-admin", userControllers.createAdmin)
router.get("/", userControllers.getAllUser)


export const userRoutes = router