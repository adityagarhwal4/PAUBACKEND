import { Model, model } from "mongoose";
import { budgetSchema } from "../schema/BudgetSchema";
import { BudgetDocument } from "../entity/budgetTypes";

export const BudgetModel: Model<BudgetDocument> = model<BudgetDocument>("Budget", budgetSchema);