import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { Schema, ValidationError, } from 'yup';


type TProperty = 'body' | 'header' | 'params' | 'query';

type TGetSchema = <T>(schema: Schema<T>) => Schema<T>;

type TAllSchemas = Record<TProperty, Schema>;

type TGetAllSchemas = (getSchemas: TGetSchema) => Partial<TAllSchemas>;

type TValidation = (getAllSchemas: TGetAllSchemas) => RequestHandler

export const validation: TValidation = (getAllSchemas) => async (req, res, next) => {

    const schemas = getAllSchemas(schema => schema);
    const errorsResult: Record<string, Record<string, string>> = {};

    Object.entries(schemas).forEach(([key, schema]) => {
        try {
            schema.validateSync(req[key as  TProperty], { abortEarly: false });
        } catch (error) {
            const yupError = error as ValidationError;
            const validateErrors: Record<string, string> = {};
            console.log('yuperror =' + yupError.errors)
            yupError.inner.forEach((error) => {
                if (!error.path) return;
                validateErrors[error.path] = error.message;
            })
            errorsResult[key]= validateErrors;

        };
        })
        if (Object.entries(errorsResult).length === 0) {
            return next();
        } else {
            return res.status(StatusCodes.BAD_REQUEST).json({
                errors: errorsResult
            });
        }
}