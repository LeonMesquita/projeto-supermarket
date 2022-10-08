import { Request, Response } from "express";
import * as userService from '../services/userService';


export async function createAddress(req: Request, res: Response){
    const userId = res.locals.userId;
    await userService.createAddress(userId, req.body);
    return res.sendStatus(201)
}


export async function getAddresses(req: Request, res: Response){
    const userId = res.locals.userId;
    const addresses = await userService.getAddresses(userId);
    return res.status(200).send(addresses);
}