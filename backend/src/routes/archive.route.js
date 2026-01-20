import express from "express";
import {getArchives} from "../controllers/archive.controller.js";

const router = express.Router();


router.get("/:username", getArchives);

export default router;





