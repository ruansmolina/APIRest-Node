import { server } from './server/server';
import 'dotenv/config';

//pra rodar o servidor usa o comando npx ts-node-dev src/index.ts
const port = process.env.PORT || 3333;
server.listen(port, ()=> console.log(`Servidor Rodando em http://localhost:${port}`));