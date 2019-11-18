import { SQLite } from "expo-sqlite";

const database_name = "byteorbit.db";
const database_version = "1.0";
const database_displayname = "SQLite React Offline Database";
const database_size = 200000;

const db = SQLite.openDatabase(database_name);
//  "CREATE TABLE IF NOT EXISTS Locations (loc_id, location_address, location_name, latitude, longitude)"
export default class SqliteHelper {
  initDB() {}
}
