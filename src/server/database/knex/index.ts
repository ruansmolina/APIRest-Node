import { development,production,test } from "./Environment";
import { knex } from "knex";


const getEnvironment = () => {
    switch (process.env.NODE_ENV) {
        case 'production':
            return production;
        
        case 'test':
            return test;

        default:
            return development;
    }

}
export const Knex = knex(getEnvironment());