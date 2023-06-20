import { NextFunction, Request, Response } from 'express'
import catchErrorAsync from '../../utils/catchErrorAsync';
import ErrorHandler from '../../middleware/ErrorHandler';
import DesignationModel from '../../database/model/DesignationModel';

// CREATE
export const createDesignation = catchErrorAsync(async (req: Request, res: Response, next: NextFunction) => {
    let { designationCode, designationName } = req.body;
    let designation = await DesignationModel.findOne({ designationCode })
    if (designation) return next(new ErrorHandler("designation already exists", 400))
    designation = await DesignationModel.create({ designationCode, designationName });
    res.status(201).json({
        success: true,
        message: "Designation Create Successfully",
        designation
    })
})

// READ
export const getAllDesignation = catchErrorAsync(async (req: Request, res: Response) => {
    const designations = await DesignationModel.find();
    res.status(201).json({
        success: true,
        message: "All Designation Fetch Succesfully",
        designations
    })
})

// export const getOneDesignation = catchErrorAsync(async (req: Request, res: Response, next: NextFunction) => {
//     const { designationCode } = req.body;
//     const designation = await DesignationModel.findOne({ designationCode });
//     if (!designation) return next(new ErrorHandler("designation not exists", 400))
//     res.status(201).json({
//         success: true,
//         message: "Designation Fetch Succesfully",
//         designation
//     })
// })

// UPDATE
export const updateDesignation = catchErrorAsync(async (req: Request, resp: Response, next: NextFunction) => {
    const { designationCode, updateData } = req.body;
    let designation = await DesignationModel.findOne({ designationCode });
    if (!designation) {
        return next(new ErrorHandler("Designation does not exist", 404));
    }
    await designation.updateOne(updateData);
    resp.status(200).json({
        success: true,
        message: "Department updated successfully.",
        designation,
    });
});

// DELETE
export const deleteDesignation = catchErrorAsync(async (req: Request, resp: Response, next: NextFunction) => {
    const { designationCode } = req.body;
    let designation = await DesignationModel.findOne({ designationCode });
    if (!designation) {
        return next(new ErrorHandler("Designation does not exist", 404));
    }
    await designation.deleteOne();
    resp.status(200).json({
        success: true,
        message: "Department deleted successfully.",
        designation,
    });
});