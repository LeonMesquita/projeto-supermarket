import * as productRepository from '../repositories/productRepository';


export async function getAllProducts(userId: number){
    const products = await productRepository.findAll(userId);
    return products;
}


export async function getAllTypes(){
    const types = await productRepository.findAllTypes();
    return types;
}


export async function getProductsByType(typeId: number){
    const products = await productRepository.findByType(typeId);
    console.log(products)
    return products;
}