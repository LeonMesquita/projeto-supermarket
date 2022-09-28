import prisma from "../config/database";
import {AuthData} from '../interfaces/authInterface';

type AuthBody = Omit<AuthData, 'confirmPassword'>

export async function insert(authData: AuthBody){
   await prisma.users.create({data: authData});
}

export async function findByEmail(email: string){
   const user = await prisma.users.findUnique({where: {email}});
   return user;
}

export async function findById(id: number){
   const user = await prisma.users.findUnique({where: {id}});
   return user;
}