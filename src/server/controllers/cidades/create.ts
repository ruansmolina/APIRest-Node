/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
import { validation } from "../../middleware/Validation";

export interface iCidade{
    name:string
}
const schema :yup.Schema<iCidade>= yup.object().shape({
    name: yup.string().required().min(3)
});

export const createValidation = validation((getSchema)=>({
    body:getSchema<iCidade>(schema)
}));
export const create = async (req:Request<{},{},iCidade>,res:Response)  =>  {
    
    res.status(StatusCodes.CREATED).send("Create Request");
};