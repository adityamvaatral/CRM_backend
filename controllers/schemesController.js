import Scheme from "../models/SchemesModel.js";

export const getSchemes = async (req, res) => {
  try {
    const schemes = await Scheme.find();
    res.status(200).json(schemes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
