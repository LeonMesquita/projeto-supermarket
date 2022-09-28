import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

const validateSchema = (schema: Schema) => {
    
    return (req: Request,res: Response, next: NextFunction) => {
        const body =  req.body;
        const validation =  schema.validate(body, {abortEarly: false});
        if(validation.error){
            const details = validation.error.details;
            const errors = details.map(details => {
                const error: string = `${details.path}`
                const message = details.message.split(" ").splice(1).join(" ");
                return {[error]: message}
            })
            return res.status(422).send(errors)
        };
        next();
    }
};

export default validateSchema;