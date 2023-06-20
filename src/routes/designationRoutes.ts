import express from "express";
import { createDesignation, deleteDesignation, getAllDesignation, updateDesignation } from "../controllers/Designation/designationController";
const designationRouter = express.Router();

designationRouter.route("/add").post(createDesignation)
designationRouter.route("/").get(getAllDesignation)
// designationRouter.route("/designation/findone").get(getOneDesignation)
designationRouter.route("/").patch(updateDesignation)
designationRouter.route("/").delete(deleteDesignation)


export default designationRouter;