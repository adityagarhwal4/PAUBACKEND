import { Document } from "mongoose";

export interface RoiDocument extends Document {
    rateOInterest: Number,
    createdAt: Date,
    updatedAt: Date
}