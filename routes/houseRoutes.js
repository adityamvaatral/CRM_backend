import express from "express";
import { createOrUpdateHouseDetails, getHouseDetails } from "../controllers/houseDetailsController.js";
import { getSchemes } from "../controllers/schemesController.js";

const router = express.Router();

router.post("/", createOrUpdateHouseDetails);
router.get("/:houseNo", getHouseDetails);
router.get("/schemes/all", getSchemes);


export default router;
