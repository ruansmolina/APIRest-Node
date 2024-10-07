/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as yup from 'yup';
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../middleware/Validation";
export interface iQueryProps{
    page?:number | null,
    limit?:number | null,
    filter?:string | null
}
const schema:yup.Schema<iQueryProps> = yup.object().shape({
    page:yup.number().notRequired().moreThan(0),
    limit:yup.number().notRequired().moreThan(0),
    filter:yup.string().notRequired()
});

export const getAllValidation = validation((getSchema)=>(
    {
        query:getSchema<iQueryProps>(schema)
    }
));
export const getAll = (req:Request<{},{},{},iQueryProps>,res:Response)=>{
    console.log(req.query);
    
    res.status(StatusCodes.NOT_IMPLEMENTED).send('get Request');

};