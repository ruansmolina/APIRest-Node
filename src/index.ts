import { server } from './server/server';
//pra rodar o servidor usa o comando npx ts-node-dev src/index.ts

server.listen(3333, ()=> console.log('App rodando!'));