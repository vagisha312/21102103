import express from 'express';
import dotenv from "dotenv";

import cors from 'cors';

dotenv.config();
import dbConnect from "./config/db/dbConnect.js";
import usersR from "./routes/usersR.js";

const app = express();
dbConnect();

app.use(express.json());
//cors
app.use(cors());

app.use("/tests", usersR);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running ${PORT}`));