import prisma from "../config/database";
import { wishData } from "../interfaces/productInterface";
import { PurchaseBody } from "../interfaces/purchaseInterface";


export async function createUserCart(user_id: number){
    await prisma.carts.create({data: {user_id}});
}


export async function findUserCart(user_id: number){
    return await prisma.carts.findFirst({where: {user_id}});

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



export async function findProductsInTheCart(user_id: number){
    const products = await prisma.$queryRaw`
        SELECT * FROM products p
        JOIN carts_products cp
        ON cp.product_id = p.id
        JOIN carts c
        ON c.id = cp.cart_id
        WHERE c.user_id = ${user_id}
    `
    return products;
}




export async function insertPurchase(data: PurchaseBody){
    await prisma.purchases.create({data});
}


export async function resetCart(cart_id: number){
    await prisma.$queryRaw`
        DELETE FROM carts_products

        WHERE cart_id = ${cart_id}
    `

    
}