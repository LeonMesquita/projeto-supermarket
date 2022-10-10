import prisma from "../config/database";



export async function findAll(user_id: number){
    return prisma.products.findMany();
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