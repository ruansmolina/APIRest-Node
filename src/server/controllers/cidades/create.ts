/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';
export interface iCidade{
    name:string,uf:string
}
const schema :yup.Schema<iCidade>= yup.object().shape({
    name: yup.string().required().min(3),
    uf:yup.string().required()
});
export const create = async (req:Request<{},{},iCidade>,res:Response)  =>  {
    const body = req.body;
   let validateData:iCidade | undefined = undefined;
   try {
    validateData = await  schema.validate(body,{abortEarly:false});

   } catch (error) {
    const yupError = error as yup.ValidationError;
    const validateErrors: Record<string,string>={};
    console.log(yupError.errors)
    yupError.inner.forEach((error)=>{
        if(!error.path) return;
        validateErrors[error.path ] = error.message;
    })
    return res.status(StatusCodes.BAD_REQUEST).json({
        errors: validateErrors
    });
   }
   res.status(StatusCodes.CREATED).send(validateData);
};