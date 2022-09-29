import { Router } from "express";
import authRouter from "./authRouter";
import purchaseRouter from "./purchaseRouter";

const router = Router();


router.use(authRouter)
router.use(purchaseRouter);




export default router;