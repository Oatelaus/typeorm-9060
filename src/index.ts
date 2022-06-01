import { MysqlConnectionCredentialsOptions } from "typeorm/driver/mysql/MysqlConnectionCredentialsOptions";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User";

console.log(
  "Before Change (on DataSource)",
  (AppDataSource.options as MysqlConnectionCredentialsOptions).host
);
console.log(
  "Before Change (on DataSource.Driver)",
  (AppDataSource.driver.options as MysqlConnectionCredentialsOptions).host
);
AppDataSource.setOptions({
  host: "UPDATED STRING",
});
console.log(
  "After setOptions (on DataSource)",
  (AppDataSource.options as MysqlConnectionCredentialsOptions).host
);
console.log(
  "After setOptions (on DataSource.Driver)",
  (AppDataSource.driver.options as MysqlConnectionCredentialsOptions).host
);

// This then fixes the issue.

AppDataSource.driver.options = AppDataSource.options;

console.log(
  "After Fix (on DataSource)",
  (AppDataSource.options as MysqlConnectionCredentialsOptions).host
);
console.log(
  "After Fix (on DataSource.Driver)",
  (AppDataSource.driver.options as MysqlConnectionCredentialsOptions).host
);
