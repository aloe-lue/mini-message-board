#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();
const { argv } = require("node:process");

const SQL = `
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    message VARCHAR(65535),
    username VARCHAR(255),
    added DATE
  );

  INSERT INTO messages (message, username, added)
  VALUES ('Hi there!', 'Jammy', '02-01-2024'),
        ('Hello World!', 'Ilu', '12-12-1212');
`;

async function main() {
  console.log("...seeding");

  const client = new Client({
    connectionString: `${argv[2]}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
