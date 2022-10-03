import { Router } from "express";
import * as productController from '../controllers/productController';
import validateToken from "../middlewares/validateToken";
import validateSchema from "../middlewares/validateSchema";
import wishSchema from "../schemas/wishSchema";

const productRouter = Router();

productRouter.get('/products', productController.getAllProducts);
productRouter.get('/types', productController.getAllTypes);
productRouter.get('/products/:typeId', productController.getProductsByType);


export default productRouter;