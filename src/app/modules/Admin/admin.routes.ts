import { Router } from "express";
import { AdminControllers } from "./admin.controller";



const router = Router()



router.get('/',AdminControllers.getAllAdmin)


export const AdminRoutes = router