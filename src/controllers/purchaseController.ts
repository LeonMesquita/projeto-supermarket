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


export async function getProductsInCart(req: Request, res: Response){
    const userId: number = res.locals.userId;
    const products = await purchaseService.getProductsInCart(userId);
    return res.status(200).send(products);
}


export async function getOneProductInCart(req: Request, res: Response){
    const userId: number = res.locals.userId;
    const productId: number = Number(req.params.productId);
    const products = await purchaseService.getOneProductInCart(userId, productId);
    return res.status(200).send(products);
}