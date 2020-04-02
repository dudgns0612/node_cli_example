const commander = require("commander");
const pkg = require("./package.json");
const open = require("open");

const BASE_NPM_URL = "https://www.npmjs.com/package";

commander
  .version(pkg.version)
  .arguments("<module-name>")
  .action(module => open(`${BASE_NPM_URL}/${module}`, "Google chrome"))
  .parse(process.argv);

