import * as purchaseRepository from '../repositories/purchaseRepository';
import {wishData} from '../interfaces/productInterface';

export async function addInCart(userId: number, wish: wishData){
    if(wish.amount < 0) throw{type: "bad_request", message: ""}
    const userCart = await purchaseRepository.findUserCart(userId);
    const wishExists = await purchaseRepository.findUserCartByProductId(wish.product_id, userCart!.id);
    if(!wishExists){
        await purchaseRepository.addProductInCart(userCart!.id, wish)
    }
    else{
        if(wish.amount === 0){
            await removeWish(userId, wish.product_id)
           // await purchaseRepository.removeWish(wish.product_id, userCart!.id);
        }
        else
        await purchaseRepository.updateProductAmount(userCart!.id, wish.product_id, wish.amount);
    }
}



export async function removeWish(userId: number, productId: number){
    const userCart = await purchaseRepository.findUserCart(userId);
    await purchaseRepository.removeWish(productId, userCart!.id);
}