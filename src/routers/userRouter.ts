import { Router } from "express";
import * as userController from '../controllers/userController';
import validateToken from "../middlewares/validateToken";
import validateSchema from "../middlewares/validateSchema";
import addressSchema from "../schemas/addressSchema";
const userRouter = Router();

userRouter.post('/address',validateToken, validateSchema(addressSchema) , userController.createAddress);
userRouter.get('/address',validateToken , userController.getAddresses);

export default userRouter;