import { config } from "./config";
import { DataSource } from "typeorm"
import { GameEntity } from "../entity/game.entity";
import { FieldEntity } from "../entity/field.entity";
console.log('config :>> ', config);

const { PG_HOST, PG_PORT, PG_USERNAME, PG_PASSWORD, PG_DATABASE } = process.env;

const entities = [
  GameEntity,
  FieldEntity,
]

const appDataSource = new DataSource({
  type: "postgres",
  host: PG_HOST,
  port: parseInt(PG_PORT || "5432"),
  username: PG_USERNAME,
  password: PG_PASSWORD,
  database: PG_DATABASE,
  entities,
  logging: true,
  synchronize: false,
  migrations: ["src/migrations/*.js"],
})

export default appDataSource
