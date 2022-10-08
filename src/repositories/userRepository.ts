import prisma from "../config/database";
import { AddressData } from "../interfaces/userInterface";





export async function insertAddress(data: AddressData){
    await prisma.address.create({data});
}




export async function findStreet(name: string){
    return await prisma.streets.findFirst({where: {name}});
}

export async function findDistrict(name: string){
    return await prisma.districts.findFirst({where: {name}});
}



export async function insertStreet(name: string){
    return await prisma.streets.create({data: {name}})
}

export async function insertDistrict(name: string){
    return await prisma.districts.create({data: {name}})
}


export async function findAddresses(user_id: number){
    return await prisma.$queryRaw`
        SELECT a.id, s.name as street, d.name as district, a.nickname, a.number FROM address a
        JOIN streets s
        ON s.id = a.street_id
        JOIN districts d
        ON d.id = a.district_id
        WHERE a.user_id=${user_id}
    `;
    return await prisma.address.findMany({where: {user_id}});
}