
import mongoose from "mongoose";
 
const selectionSchema = new mongoose.Schema(
  {
    assembly: { type: String, required: true },
    ward: { type: String, required: true },
    booth: { type: String, required: true},
    streetNo: { type: String, required: true },
    houseNo: { type: String, required: true },
  },
  { timestamps: true }
);
 
const Selection = mongoose.model("Selection", selectionSchema);
 

export default Selection;

