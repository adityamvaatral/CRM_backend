import express from "express";
import { createOrUpdateHouseDetails, getHouseDetails } from "../controllers/houseDetailsController.js";

const router = express.Router();

router.post("/", createOrUpdateHouseDetails);
router.get("/:houseNo", getHouseDetails);

export default router;
