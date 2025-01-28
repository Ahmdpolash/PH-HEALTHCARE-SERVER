import { Request, Response } from "express";



const createAdmin = async () => {

    return {
        message: 'admin created'
    }

}



export const userServices = {
    createAdmin
}