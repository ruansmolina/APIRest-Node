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
export const deleteByIdValidation = validation((getSchema)=>(
    {
        params:getSchema<iParams>(schema)
    }
));
export const deleteById = (req:Request<iParams,{},{}>,res:Response)=>{
    res.status(StatusCodes.NOT_IMPLEMENTED).send('deleteById Request');
};