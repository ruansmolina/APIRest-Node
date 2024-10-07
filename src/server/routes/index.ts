/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from "express";
import { StatusCodes } from 'http-status-codes';
import { CidadeController } from "../controllers/cidades";
const router = Router();

router.get('/', CidadeController.getAllValidation,CidadeController.getAll);
router.get('/:id', CidadeController.getByIdValidation,CidadeController.getById);

router.post('/',CidadeController.createValidation, CidadeController.create); 

router.put('/:id',CidadeController.updateByIdValidation,CidadeController.updateById);

router.delete('/:id',CidadeController.deleteByIdValidation,CidadeController.deleteById);

export { router };