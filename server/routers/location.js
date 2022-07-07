import express from "express";
import * as Location from "../controllers/LocationController.js";

const router = express.Router();

router.get("/", Location.getLocations);
router.post("/", Location.createLocation);
router.put("/", Location.updateLocation);
router.delete("/", Location.deleteLocation);

export default router;
