import { config } from "./config";
import { DataSource } from "typeorm"
import { GameEntity } from "../modules/games/game.entity";
import { FieldEntity } from "../modules/fields/fields.entity";
import { FieldCellEntity } from "../modules/field-cells/field-cell.entity";
import { TreeEntity } from "../modules/trees/trees.entity";
import { TreeCellEntity } from "../modules/tree-cells/tree-cell.entity";

console.log('config :>> ', config);

const { PG_HOST, PG_PORT, PG_USERNAME, PG_PASSWORD, PG_DATABASE } = process.env;

const entities = [
  GameEntity,
  FieldEntity,
  FieldCellEntity,
  TreeEntity,
  TreeCellEntity,
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
  migrations: ["dist/src/migrations/*.js"],
})

export default appDataSource
