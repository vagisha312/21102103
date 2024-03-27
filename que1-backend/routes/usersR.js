import express from 'express';
import { userRegister } from "../controller/usersC.js";

const usersR = express.Router();
usersR.post("/register", userRegister);


export default usersR;