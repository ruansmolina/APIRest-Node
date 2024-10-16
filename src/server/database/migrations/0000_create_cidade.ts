import type { Knex } from "knex";
import { ETableNames as tables } from "../ETableNames";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable(tables.cidade,(table)=>{
        table.bigIncrements('id').primary().index();
        table.string('name',50).notNullable();
    }).then(()=>console.log(`#Create table ${tables.cidade}`));
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable(tables.cidade).then(()=>console.log(`#Drop table ${tables.cidade}`));
}

