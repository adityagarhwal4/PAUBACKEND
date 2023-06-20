import { Schema } from "mongoose";

export const budgetSchema = new Schema({
    amount: {type: Number},
    createdAt: {type: Date, required: true, default: new Date()},
    updatedAt: {type: Date}
})