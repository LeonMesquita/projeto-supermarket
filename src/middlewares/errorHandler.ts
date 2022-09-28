import { Request, Response, NextFunction } from "express";

export default  function errorHandler(
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
){
    const type: string = error.type;
    let statusCode: number = 500;
    if(error.type === "conflict") statusCode = 409;
    else if(error.type === "unauthorized") statusCode = 401;
    else if(error.type === "not_found") statusCode = 404;
    else if(error.type === "bad_request") statusCode = 400;

    return res.status(statusCode).send(error.message);
}