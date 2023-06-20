import mongoose from "mongoose";
import { designationDocument } from "../entity/Designation";
import { designationSchema } from "../schema/DesignationSchema";

const DesignationModel = mongoose.model<designationDocument>("Designation",designationSchema);
export default DesignationModel;