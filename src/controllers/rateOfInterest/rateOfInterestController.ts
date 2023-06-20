import { Request, Response } from "express";
import { RoiModel } from "../../database/model/RoiModel";
import { RoiDocument } from "../../database/entity/roiTypes";
import catchErrorAsync from "../../utils/catchErrorAsync";

// CREATE
export const createRateOfInterest = catchErrorAsync(async (req: Request, res: Response): Promise<void> => {
    const roi: RoiDocument = await RoiModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "New ROI Created",
      roi
    });
});

// READ
export const getAllRateOfInterest = catchErrorAsync(async (req: Request, res: Response): Promise<void> => {
    const allRoi: RoiDocument[] = await RoiModel.find();
    res.status(200).json({
      success: true,
      message: "Got All ROI",
      allRoi
    });
  }
)

// export const getRateOfInterestById = async (req: Request, res: Response): Promise<void> => {
//   const id: string = req.params.id;
//   try {
//     const roiById: RoiDocument | null = await RoiModel.findById(id);
//     res.status(200).json({
//       success: true,
//       message: "Getting ROI by ID successfully",
//       roiById
//     });
//   }
//   catch (err: any) {
//     res.status(400).send({
//       success: false,
//       message: "This ROI not exist",
//       error: err.message
//     });
//   }
// };

// UPDATE
// export const updateRateOfInterestById = async (req: Request, res: Response): Promise<void> => {
//   const id: string = req.params.id;
//   try {
//     const roiByIdAndUpdate: RoiDocument | null = await RoiModel.findByIdAndUpdate(id, {...req.body, updatedAt: new Date()});
//     res.status(200).json({
//       success: true,
//       message: "Getting ROI by ID and updated successfully",
//       roiByIdAndUpdate
//     });
//   }
//   catch (err: any) {
//     res.status(400).send({
//       success: false,
//       message: "This ROI not Updated",
//       error: err.message
//     });
//   }
// };

// DELETE
// export const deleteRateOfInterestById = async (req: Request, res: Response): Promise<void> => {
//   const id: string = req.params.id;
//   try {
//     const roiByIdAndDelete: RoiDocument | null = await RoiModel.findByIdAndDelete(id);
//     res.status(200).json({
//       success: true,
//       message: "ROI by ID deleted successfully",
//       roiByIdAndDelete
//     });
//   }
//   catch (err: any) {
//     res.status(400).send({
//       success: false,
//       message: "This ROI not Deleted",
//       error: err.message
//     });
//   }
// }