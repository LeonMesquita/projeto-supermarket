import { Request, Response } from "express";
import * as authService from '../services/authService';
import { AuthData } from "../interfaces/authInterface";

export async function signupUser(req: Request, res: Response){
    // const authBody: AuthData = {
    //     email: req.body.email,
    //     password: req.body.password
    // };
    await authService.createUser(req.body);
    res.sendStatus(201);
}


export async function signinUser(req: Request, res: Response){
    const token = await authService.loginUser(req.body);
    res.status(200).send(token);
}