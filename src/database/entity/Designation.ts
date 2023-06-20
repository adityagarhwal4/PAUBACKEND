import { Document } from "mongoose";

export interface designationDocument extends Document{
    designationCode:string,
    designationName:string,
    createdAt:Date,
    updatedAt:Date,
}