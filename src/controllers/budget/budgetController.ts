import { Request, Response } from "express";
import { BudgetDocument } from "../../database/entity/budgetTypes";
import { BudgetModel } from "../../database/model/BudgetModel";
import catchErrorAsync from "../../utils/catchErrorAsync";

// CREATE
export const createNewBudget = catchErrorAsync(async (req: Request, res: Response): Promise<void> => {
    const budget: BudgetDocument = await BudgetModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "New Budget Created",
      budget
    });
});

// READ
export const getAllbudget = catchErrorAsync(async (req: Request, res: Response): Promise<void> => {
    const budgets: BudgetDocument[] = await BudgetModel.find();
    res.status(200).json({
      success: true,
      message: "Got All Budget",
      budgets
    });
})

// export const getBudgetById = async (req: Request, res: Response): Promise<void> => {
//   const id: string = req.params.id;
//   try {
//     const budgetById: BudgetDocument | null = await BudgetModel.findById(id);
//     res.status(200).json({
//       success: true,
//       message: "Getting Budget by ID successfully",
//       budgetById
//     });
//   }
//   catch (err: any) {
//     res.status(400).send({
//       success: false,
//       message: "This Budget not exist",
//       error: err.message
//     });
//   }
// };

// UPDATE
// export const updateBudgetById = async (req: Request, res: Response): Promise<void> => {
//   const id: string = req.params.id;
//   try {
//     const budgetByIdAndUpdate: BudgetDocument | null = await BudgetModel.findByIdAndUpdate(id, {...req.body, updatedAt: new Date()});
//     res.status(200).json({
//       success: true,
//       message: "Getting Budget by ID and updated successfully",
//       budgetByIdAndUpdate
//     });
//   }
//   catch (err: any) {
//     res.status(400).send({
//       success: false,
//       message: "This Budget not Updated",
//       error: err.message
//     });
//   }
// };

// DELETE
// export const deleteBudgetById = async (req: Request, res: Response): Promise<void> => {
//   const id: string = req.params.id;
//   try {
//     const budgetByIdAndDelete: BudgetDocument | null = await BudgetModel.findByIdAndDelete(id);
//     res.status(200).json({
//       success: true,
//       message: "Budget by ID deleted successfully",
//       budgetByIdAndDelete
//     });
//   }
//   catch (err: any) {
//     res.status(400).send({
//       success: false,
//       message: "This Budget not Deleted",
//       error: err.message
//     });
//   }
// }