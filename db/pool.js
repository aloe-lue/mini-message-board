const { Pool } = require("pg");
require("dotenv").config();

const { PROD_DATABASE_USER, PROD_PASSWORD, PROD_HOST, PROD_DATABASE } =
  process.env;

module.exports = new Pool({
  connectionString: `postgresql://${PROD_DATABASE_USER}:${PROD_PASSWORD}@${PROD_HOST}/${PROD_DATABASE}`,
});
