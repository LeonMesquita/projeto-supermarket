import * as purchaseRepository from '../repositories/purchaseRepository';
import {wishData} from '../interfaces/productInterface';

export async function addInCart(userId: number, wish: wishData){
    if(wish.amount < 0) throw{type: "bad_request", message: ""}
    const userCart = await purchaseRepository.findUserCart(userId);
    const wishExists = await purchaseRepository.findUserCartByProductId(wish.product_id, userCart!.id);
    if(!wishExists && wish.amount > 0){
        await purchaseRepository.addProductInCart(userCart!.id, wish)
    }
    else{
        if(wish.amount === 0){
            await removeWish(userId, wish.product_id)
        }
        else
        await purchaseRepository.updateProductAmount(userCart!.id, wish.product_id, wish.amount);
    }
}



export async function removeWish(userId: number, productId: number){
    const userCart = await purchaseRepository.findUserCart(userId);
    console.log(userCart)
    await purchaseRepository.removeWish(productId, userCart!.id);
}


export async function getProductsInCart(userId: number){
    const products = await purchaseRepository.findProductsInTheCart(userId);
    return products;
}


export async function getOneProductInCart(user_id: number, product_id: number){
     const product = await purchaseRepository.findUserCartByProductId(product_id, user_id); 
     console.log(product)
     return product
}