import { PrismaClient, UserRole } from "@prisma/client";
import bcrypt from "bcrypt";
import config from "../../../config";
const prisma = new PrismaClient();

const createAdmin = async (data: any) => {
  const hashedPassword = await bcrypt.hash(
    data.password,
 12
  );

  const userData = {
    email: data.admin.email,
    password: hashedPassword,
    role: UserRole.ADMIN,
  };

  const result = await prisma.$transaction(async (transactionClient) => {
    const user = await transactionClient.user.create({
      data: userData,
    });

    const createdAdminData = await transactionClient.admin.create({
      data: data.admin,
    });

    return { user, createdAdminData };
  });

  return result;
};

export const userServices = {
  createAdmin,
};
