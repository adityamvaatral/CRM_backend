import mongoose from "mongoose";

const houseSchema = new mongoose.Schema(
  {
    houseNo: { type: String, required: true},
  },
  { timestamps: true }
);

const House = mongoose.model("House", houseSchema);
export default House;
