import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";

describe('Cidade - create', ()=>{

    it('Criar um registro -sucesso',async ()  => {

        const resp = await testServer.post('/').send({name:'cidade 1'});

        expect(StatusCodes.CREATED).toEqual(resp.statusCode);
    });

    it('Criar um registro - fracasso - falta de caracteres',async ()  => {

        const resp = await testServer.post('/').send({name:'JU'});

        expect(StatusCodes.BAD_REQUEST).toEqual(resp.statusCode);
        expect(resp.body).toHaveProperty('errors.body.name');
    });
});