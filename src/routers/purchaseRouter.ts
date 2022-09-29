import { Router } from "express";
import * as purchaseController from '../controllers/purchaseController';
import validateToken from "../middlewares/validateToken";
import validateSchema from "../middlewares/validateSchema";
import wishSchema from "../schemas/wishSchema";

const purchaseRouter = Router();

purchaseRouter.post('/cart/add',validateToken, validateSchema(wishSchema) , purchaseController.addInCart);
purchaseRouter.delete('/cart/:productId', validateToken, purchaseController.removeWish);

export default purchaseRouter;