/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as yup from 'yup';
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../middleware/Validation";

interface iParams{
    id:number
}
interface iBody{
    name:string
}
const schemaParams:yup.Schema<iParams> = yup.object().shape({
    id:yup.number().required().moreThan(0)
});
const schemaBody: yup.Schema<iBody> = yup.object().shape({
    name:yup.string().required().min(3)
});
export const updateByIdValidation = validation((getSchema)=>(
    {
        params:getSchema<iParams>(schemaParams),
        body:getSchema<iBody>(schemaBody)
    }
));
export const updateById = (req:Request<{},{},iBody>,res:Response)=>{
    
    res.status(StatusCodes.NOT_IMPLEMENTED).send('updateById Request');

};