import express from "express";

import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotel,
} from "../controllers/hotel.js";
const router = express.Router();
import { createError } from "../utils/error.js";

//Create
router.post("/", createHotel);

//Update
router.put("/:id", updateHotel);

//Delete
router.delete("/:id", deleteHotel);

//get
router.get("/:id", getHotel);

//getall
router.get("/", getAllHotel);

export default router;
