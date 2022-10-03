import { Router } from "express";
import authRouter from "./authRouter";
import purchaseRouter from "./purchaseRouter";
import productRouter from "./productRouter";
const router = Router();


router.use(authRouter)
router.use(purchaseRouter);
router.use(productRouter);



export default router;