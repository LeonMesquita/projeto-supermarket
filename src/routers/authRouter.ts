import { Router } from "express";
import * as authController from '../controllers/authController';
import validateSchema from "../middlewares/validateSchema";
import authSchema from "../schemas/authSchema";

const authRouter = Router();

authRouter.post('/signup',validateSchema(authSchema), authController.signupUser);
authRouter.post('/signin', authController.signinUser);


export default authRouter;