import { Document } from "mongoose";

export interface BudgetDocument extends Document {
    rateOInterest: Number,
    createdAt: Date,
    updatedAt: Date
}