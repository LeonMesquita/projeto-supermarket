import { Router } from "express";
import authRouter from "./authRouter";
import purchaseRouter from "./purchaseRouter";
import productRouter from "./productRouter";
import userRouter from "./userRouter";
const router = Router();


router.use(authRouter)
router.use(purchaseRouter);
router.use(productRouter);
router.use(userRouter);



export default router;