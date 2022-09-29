import prisma from "../config/database";
import { wishData } from "../interfaces/productInterface";



export async function createUserCart(user_id: number){
    await prisma.carts.create({data: {user_id}});
}


export async function findUserCart(user_id: number){
    return await prisma.carts.findUnique({where: {user_id}});
}


export async function findUserCartByProductId(product_id: number, cart_id: number){
    return await prisma.carts_products.findFirst({where: {product_id, cart_id}});
}



export async function addProductInCart(cart_id: number, wish: wishData){
    const data = {
        ...wish,
        cart_id,
    }
   await prisma.carts_products.create({data});
}


export async function updateProductAmount(cart_id: number, product_id: number, amount: number){
    await prisma.$executeRaw`UPDATE carts_products SET amount = ${amount} WHERE cart_id = ${cart_id} AND product_id = ${product_id}`
}



export async function removeWish(product_id: number, cart_id: number){
    await prisma.carts_products.deleteMany({where: {product_id, cart_id}})
}