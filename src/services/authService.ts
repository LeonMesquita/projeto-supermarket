import { AuthData } from "../interfaces/authInterface";
import * as authRepository from '../repositories/authRepository';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();



export async function createUser(userData: AuthData){
    const encryptedPassword = bcrypt.hashSync(userData.password, 10);
    const user = await authRepository.findByEmail(userData.email);
    if(userData.confirmPassword !== userData.password) throw{type: "unauthorized", message: "The confirmation password is incorrect"}
    if(user) throw{type: "conflict", message: "This user already exists"}
    
    
    await authRepository.insert({
        name: userData.name,
        email: userData.email,
        password: encryptedPassword
    });
}


export async function loginUser(userData: AuthData){
    console.log(userData)
    const user = await authRepository.findByEmail(userData.email);
    console.log(user)
    const validatePassword = bcrypt.compareSync(userData.password, user!.password);
    if(!user || !validatePassword) throw{type: "unauthorized", message: "Incorrect email or password"}
    const secretKey: string = process.env.JWT_SECRET!;
    const token = jwt.sign(user.id.toString(), secretKey);
    return token;
}