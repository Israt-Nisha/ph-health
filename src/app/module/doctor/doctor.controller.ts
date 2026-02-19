import { Request, Response } from "express";
import status from "http-status";
import { DoctorService } from "./doctor.service";
import { catchAsync } from "../../sheard/catchAsync";
import { sendResponse } from "../../sheard/sendResponse";

const getAllDoctors = catchAsync(
    async (req: Request, res: Response) => {

        const result = await DoctorService.getAllDoctors();

        sendResponse(res, {
            httpStatusCode: status.OK,
            success: true,
            message: "Doctors fetched successfully",
            data: result,
        })
    }
)

// const getDoctorById = catchAsync(
//const updateDoctor = catchAsync(
//const deleteDoctor = catchAsync(

export const DoctorController = {
    getAllDoctors,
    // getDoctorById,
    // updateDoctor,
    // deleteDoctor,
};