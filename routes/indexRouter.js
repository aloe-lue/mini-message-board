const { Router } = require("express");
const indexRouter = Router();
const {
  getMessagesController,
  setMessageController,
} = require("../controllers/indexController");

indexRouter.get("/", getMessagesController);
indexRouter.post("/new", setMessageController);

module.exports = indexRouter;
