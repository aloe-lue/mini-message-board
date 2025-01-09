const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function addMessage(text, user, date) {
  await pool.query(
    "INSERT INTO messages (message, username, added) VALUES ($1, $2, $3)",
    [text, user, date]
  );
}

module.exports = {
  getAllMessages,
  addMessage,
};
