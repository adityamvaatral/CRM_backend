import HouseDetails from "../models/HouseDetailsModel.js";

// @desc    Create or update house details
// @route   POST /api/houses
// @access  Public
// export const createOrUpdateHouseDetails = async (req, res) => {
//   try {
//     const { houseNo, members } = req.body;

//     if (!houseNo || !members || !Array.isArray(members)) {
//       return res.status(400).json({ message: "Invalid data provided" });
//     }

//     let houseDetails = await HouseDetails.findOne({ houseNo });

//     if (houseDetails) {
//       houseDetails.members = members;
//       await houseDetails.save();
//       return res.status(200).json({ message: "House details updated", houseDetails });
//     } else {
//       houseDetails = new HouseDetails({ houseNo, members });
//       await houseDetails.save();
//       return res.status(201).json({ message: "House details saved", houseDetails });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

  
export const createOrUpdateHouseDetails = async (req, res) => {
  try {
    const { houseNo, members, selectedSchemes } = req.body;

    if (!houseNo || !members || !Array.isArray(members)) {
      return res.status(400).json({ message: "Invalid data provided" });
    }

    let houseDetails = await HouseDetails.findOne({ houseNo });

    if (houseDetails) {
      houseDetails.members = members;
      houseDetails.selectedSchemes = selectedSchemes || houseDetails.selectedSchemes; // Store schemes
      await houseDetails.save();
      return res.status(200).json({ message: "House details updated", houseDetails });
    } else {
      houseDetails = new HouseDetails({ houseNo, members, selectedSchemes });
      await houseDetails.save();
      return res.status(201).json({ message: "House details saved", houseDetails });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get house details by houseNo
// @route   GET /api/houses/:houseNo
// @access  Public
export const getHouseDetails = async (req, res) => {
  try {
    const { houseNo } = req.params;
    const houseDetails = await HouseDetails.findOne({ houseNo });

    if (!houseDetails) {
      return res.status(404).json({ message: "House details not found" });
    }

    res.status(200).json(houseDetails);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
