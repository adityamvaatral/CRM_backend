import mongoose from "mongoose";

const schemeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: String,
});

const Scheme = mongoose.model("Scheme", schemeSchema);
export default Scheme;
