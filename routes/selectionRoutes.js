

import express from "express";
import { createSelection, getSelections } from "../controllers/selectionController.js";
 
const router = express.Router();
 
router.post("/", createSelection);
router.get("/", getSelections);
 
export default router;
 