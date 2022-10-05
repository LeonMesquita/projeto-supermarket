import prisma from "../config/database";



export async function findAll(user_id: number){
    return prisma.products.findMany();
    // const products = await prisma.$queryRaw`
    //     SELECT p.*, sum(cp.amount) as amount_on_cart FROM products p
    //     LEFT JOIN carts_products cp
    //     on cp.product_id = p.id
    //     GROUP BY p.id

    // `
    // return products;
}


export async function findByType(id: number){
    const products = await prisma.$queryRaw`
        SELECT p.*, pt.name as product_type FROM products p
        JOIN product_types pt
        ON p.product_type_id = pt.id
        WHERE pt.id = ${id}
    `

    return products;
}



export async function findAllTypes(){
    const types = await prisma.product_types.findMany()
    return types;
}
   


export async function findByName(name: string){
    const products = await prisma.products.findMany({
        where: {
            name: {
                contains: name
            }
        }
    })
    return products;
}