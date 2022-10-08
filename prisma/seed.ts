import prisma from "../src/config/database";
import { productTypes, ProductType } from "./models/typesModel";
import { Products, productsList } from "./models/productsModel";


async function main(){
    await populateTypes();
    await populateProducts();
}


main()
    .catch(e => {

    })
    .finally(() => {
        prisma.$disconnect();
})


async function populateTypes(){
    productTypes.forEach(async (type, index) => {
        const data: ProductType = type;
        const findType = await prisma.product_types.findUnique({where: {name: data.name}})
        if(!findType){
            await prisma.product_types.create({data})
        }
        
    })
}

async function populateProducts(){
    productsList.forEach(async (product, index) => {
        const data: Products = product;
        const findProduct = await prisma.products.findFirst({where: {name: data.name}})
        if(!findProduct){
            await prisma.products.create({data})
        }
        
    })
}