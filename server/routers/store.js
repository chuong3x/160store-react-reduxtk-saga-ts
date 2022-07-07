import express from "express";
import * as Store from "../controllers/StoreController.js";

const router = express.Router();

router.get("/", Store.getStores);
router.post("/", Store.createStore);
router.put("/", Store.updateStore);

export default router;
