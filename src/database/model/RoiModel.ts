import { Model, model } from "mongoose";
import { roiSchema } from "../schema/RoiSchema";
import { RoiDocument } from "../entity/roiTypes";

export const RoiModel: Model<RoiDocument> = model<RoiDocument>("Roi", roiSchema);