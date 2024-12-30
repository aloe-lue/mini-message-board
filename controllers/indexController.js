const message = require("../messages");

const getMessagesController = async function messagesGetter(req, res) {
  const data = await message.getMessages();

  res.render("indexView", { title: "Mini Messageboard", messages: data });
};

const setMessageController = async function messageSetter(req, res) {
  const obj = req.body;

  message.setMessage(obj);

  res.redirect("/");
};

module.exports = { getMessagesController, setMessageController };
