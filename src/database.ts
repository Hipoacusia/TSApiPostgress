import { Pool } from 'pg';


export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: '25798552Jose',
  database: 'typescriptdatabase',
  port: 5432
});
