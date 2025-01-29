import { Request, Response } from "express";
import { userServices } from "./user.services";

const createAdmin = async (req: Request, res: Response) => {
  try {
    const result = await userServices.createAdmin(req.body);

    res.status(200).json({
      success: true,
      message: "Admin created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.name || "An error occurred while creating the admin",
      error: error?.message,
    });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  const result = await userServices.getAllUsersFromDb();

  res.send(result);
};

export const userControllers = {
  createAdmin,
  getAllUser,
};
