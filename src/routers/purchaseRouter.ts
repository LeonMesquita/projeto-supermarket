import { Router } from "express";
import * as purchaseController from '../controllers/purchaseController';
import validateToken from "../middlewares/validateToken";
import validateSchema from "../middlewares/validateSchema";
import wishSchema from "../schemas/wishSchema";
import purchaseSchema from "../schemas/purchaseSchema";

const purchaseRouter = Router();

purchaseRouter.post('/cart/add',validateToken, validateSchema(wishSchema) , purchaseController.addInCart);
purchaseRouter.delete('/cart/:productId', validateToken, purchaseController.removeWish);
purchaseRouter.get('/cart/products', validateToken, purchaseController.getProductsInCart);
purchaseRouter.get('/cart/products/:productId', validateToken, purchaseController.getOneProductInCart);
purchaseRouter.post('/purchase', validateToken, validateSchema(purchaseSchema), purchaseController.createPurchase);
purchaseRouter.post('/cart/reset', validateToken, purchaseController.resetCart);


export default purchaseRouter;