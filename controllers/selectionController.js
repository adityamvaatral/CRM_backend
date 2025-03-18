
import Selection from "../models/SelectionModel.js";
import House from "../models/HouseModel.js";
 
// @desc    Create a new selection entry
// @route   POST /api/selection
// @access  Public
export const createSelection = async (req, res) => {
  try {
    const { assembly, ward, booth, streetNo, houseNo } = req.body;
 
    if (!assembly || !ward || !booth || !streetNo || !houseNo) {
      return res.status(400).json({ message: "All fields are required" });
    }
 
    // Store House No separately
    let house = await House.findOne({ houseNo });
    if (!house) {
      house = new House({ houseNo });
      await house.save();
    }
 
    // Store other details in Selection
    const selection = new Selection({ assembly, ward, booth, streetNo, houseNo });
    await selection.save();
 
    res.status(201).json({ message: "Assembly saved successfully", selection });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
 
// @desc    Get all selection entries
// @route   GET /api/selection
// @access  Public

export const getSelections = async (req, res) => {
  try {
    const { assembly, ward, booth, streetNo } = req.query;
 
    const query = {};
    if (assembly) query.assembly = assembly;
    if (ward) query.ward = ward;
    if (booth) query.booth = booth;
    if (streetNo) query.streetNo = streetNo;
 
    const selections = await Selection.find(query);
 
    res.status(200).json(selections);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};