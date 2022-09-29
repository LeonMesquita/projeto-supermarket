import { Request, Response } from "express";
import * as purchaseService from '../services/purchaseService';


export async function addInCart(req: Request, res: Response){
    const userId = res.locals.userId;
    const wishBody = {
        product_id: Number(req.body.productId),
        amount: Number(req.body.amount)
    }
    console.log(wishBody)
    await purchaseService.addInCart(userId, wishBody);
    return res.sendStatus(201);
}


export async function removeWish(req: Request, res: Response){
    const userId: number = res.locals.userId;
    const productId: number = Number(req.params.productId);
    await purchaseService.removeWish(userId, productId);

    return res.sendStatus(200);
}