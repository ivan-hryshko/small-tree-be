import { DataSource } from "typeorm"
import { GameEnity } from "../entity/game.entity";
const { PG_HOST, PG_PORT, PG_USERNAME, PG_PASSWORD, PG_DATABASE } = process.env;

const entities = [GameEnity]
export const postgresSource = new DataSource({
  type: "postgres",
  host: PG_HOST,
  port: parseInt(PG_PORT || "5432"),
  username: PG_USERNAME,
  password: PG_PASSWORD,
  database: PG_DATABASE,
  entities,
  logging: true,
  synchronize: true,
})
