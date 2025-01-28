import { Request, Response, Router } from "express";
import { userControllers } from "./user.controllers";

const router = Router();

router.get("/", userControllers.createAdmin)


export const userRoutes = router