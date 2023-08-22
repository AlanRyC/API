import { createPool, Pool, PoolOptions } from "mysql2";

export class database {
  configuration: PoolOptions = {
    host: process.env.DB_HOS,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 3306,
    database: process.env.DB_DATABASE,
  };
  connection: Pool = createPool(this.configuration);
}
