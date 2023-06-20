import { Schema } from "mongoose";

export const roiSchema = new Schema({
    rateOInterest: {type: Number},
    createdAt: {type: Date, required: true, default: new Date()},
    updatedAt: {type: Date}
})