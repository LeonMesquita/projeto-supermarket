import { Request, Response } from "express";
import * as productService from '../services/productService';

export async function getAllProducts(req: Request, res: Response){
    const userId = res.locals.userId;
    const products = await productService.getAllProducts(userId);
    return res.status(200).send(products);
}


export async function getAllTypes(req: Request, res: Response){
    const productTypes = await productService.getAllTypes();
    
    return res.status(200).send(productTypes);
}


export async function getProductsByType(req: Request, res: Response){
    const typeId: number = Number(req.params.typeId);
    const products = await productService.getProductsByType(typeId);
    
    return res.status(200).send(products);
}