/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from "express";
import { StatusCodes } from 'http-status-codes';
import { CidadeController } from "../controllers/cidades";
const router = Router();

router.get('/', (req, res) => {
    console.log(req.url);
    return res.send('Get Request');
});

router.post('/', CidadeController.create); 

router.put('/', (req, res) => {
    return res.send('Put Request');
});

router.delete('/:id', (req, res) => {
    console.log(`O parametro foi ${req.params.id}`)
    return res.send('Delete Request');
});
// router.delete('/', (req, res) => {
//     console.log(`O parametro foi ${req.query.id}`)
//     return res.send('Delete Request');
// });

export { router };