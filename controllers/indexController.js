// const message = require("../messages");
const db = require("../db/queries");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

const getMessagesController = asyncHandler(async function messagesGetter(
  req,
  res
) {
  const data = await db.getAllMessages();

  if (!data) {
    return res.render("indexView", { title: "Mini messageboard", message: [] });
  }

  res.render("indexView", { title: "Mini Messageboard", messages: data });
});

const messageValidationChain = [
  body("authorName").trim().notEmpty(),
  body("messageText").trim().notEmpty(),
];

const setMessageController = [
  messageValidationChain,
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render("formView", {
        title: "mini message board: new",
        errors: errors.array(),
      });
    }

    const { authorName, messageText } = req.body;
    await db.addMessage(messageText, authorName, new Date());
    res.redirect("/");
  }),
];

module.exports = { getMessagesController, setMessageController };
