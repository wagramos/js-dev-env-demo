/* eslint-disable no-console */

import jsf from "json-schema-faker";
import { schema } from "./mockDataSchema";
import fs from "fs";
import chalk from "chalk";

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function (error) {
  if (error) {
    return console.log(chalk.red(error));
  } else {
    console.log(chalk.green("Mock data genereated"));
  }
});
