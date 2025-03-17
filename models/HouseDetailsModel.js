//House Details Schemes
import mongoose from "mongoose";
const memberSchema = new mongoose.Schema({
  relation: { type: String, required: true },
  name: String,
  age: Number,
  aadhar: String,
  bpl: String,
  occupation: String,
  details: Object,
  hobbies: String,
  sportsActivity: String,
  voterId: String,
  email: String,
  phone: String,
});

const houseDetailsSchema = new mongoose.Schema(
  {
    houseNo: { type: String, required: true, unique: true },
    members: [memberSchema],
    schemes: { type: [String], default: [] },
  },
  { timestamps: true }
);

const HouseDetails = mongoose.model("HouseDetails", houseDetailsSchema);
export default HouseDetails;
