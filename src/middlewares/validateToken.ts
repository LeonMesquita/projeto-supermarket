import dotenv from 'dotenv';
import jwt from "jsonwebtoken";
import {Request, Response, NextFunction} from 'express';

dotenv.config();

const validateToken = (req: Request,res: Response,next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if(token === null) return res.sendStatus(401);
    jwt.verify(token!, process.env.JWT_SECRET!, (err,user) => {
        //console.log(user)
        if(err) return res.sendStatus(401);
        res.locals.userId = Number(user);
        next();
    })
    
}

export default validateToken;