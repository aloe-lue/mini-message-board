const { Router } = require("express");
const errorRouter = Router();
const errorController = require("../controllers/errorController");

errorRouter.get("/", errorController);

module.exports = errorRouter;
