import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import selectionRoutes from "./routes/selectionRoutes.js";
import houseRoutes from "./routes/houseRoutes.js";  // NEW ROUTE
import errorHandler from "./middlewares/errorMiddleware.js";


dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/api/selection", selectionRoutes);
app.use("/api/selection", selectionRoutes); // Route setup
app.use("/api/houses", houseRoutes); // ADD NEW ROUTE


app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
