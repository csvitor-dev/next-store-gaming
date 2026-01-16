import { index } from "./controller";
import { Router } from "express";

const router = Router();
/* GET home page. */
router.get("/", index);

export default router;
