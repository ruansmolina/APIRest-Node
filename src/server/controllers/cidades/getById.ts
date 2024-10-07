/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as yup from 'yup';
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { validation } from "../../middleware/Validation";

interface iParams{
    id?:number
}
const schema: yup.Schema<iParams> = yup.object().shape({
    id:yup.number().required().moreThan(0)
});
export const getByIdValidation = validation((getSchema)=>(
    {
        params:getSchema<iParams>(schema)
    }
));
export const getById = (req:Request<iParams,{},{}>,res:Response)=>{
    
    console.log(`params: ${req.params.id}`)
    res.status(StatusCodes.NOT_IMPLEMENTED).send('getbyid Request');

};