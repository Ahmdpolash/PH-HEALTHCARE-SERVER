import { Request, Response } from "express";
import { AdminServices } from "./admin.service";
import pick from "../../../shared/pick";



const getAllAdmin = async (req: Request, res: Response) => {



  try {

    

    const filters = pick(req.query, [ 'name ','email','searchTerm'])
    const result = await AdminServices.getAllAdminFromDb(filters);

    res.status(200).json({
      success: true,
      message: "Admin data retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
     
    });
  }
};



export const AdminControllers = {getAllAdmin}