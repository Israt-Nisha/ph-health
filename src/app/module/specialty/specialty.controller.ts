import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";
import { catchAsync } from "../../sheard/catchAsync";
import { sendResponse } from "../../sheard/sendResponse";

const createSpecialty = catchAsync(
    async (req: Request, res: Response) => {
         const payload = {
            ...req.body,
            icon : req.file?.path
        };
        const result = await SpecialtyService.createSpecialty(payload);
        sendResponse(res, {
            httpStatusCode: 201,
            success: true,
            message: 'Specialty created successfully',
            data: result
        });
    }
)


const getAllSpecialties = catchAsync(
    async (req: Request, res: Response) => {
        const result = await SpecialtyService.getAllSpecialties();
        sendResponse(res, {
            httpStatusCode: 200,
            success: true,
            message: 'Specialties fetched successfully',
            data: result
        });
    }
)

const updateSpecialty = catchAsync(
    async (req: Request, res: Response) => {
        const {id} = req.params;
        const payload = req.body;
        const result = await SpecialtyService.updateSpecialty(id as string, payload);
        sendResponse(res, {
            httpStatusCode: 200,
            success: true,
            message: "Specialty deleted successfully",
            data: result
        });
    }
)

const deleteSpecialty = catchAsync(
    async (req: Request, res: Response) => {
        const { id } = req.params;
        const result = await SpecialtyService.deleteSpecialty(id as string);
        sendResponse(res, {
            httpStatusCode: 200,
            success: true,
            message: 'Specialty deleted successfully',
            data: result
        });
    }
)

export const SpecialtyController = {
    createSpecialty,
    getAllSpecialties,
    updateSpecialty,
    deleteSpecialty
}