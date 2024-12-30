const newMessageController = async function (req, res) {
  res.render("formView", { title: "Mini Messageboard: new message" });
};

module.exports = newMessageController;
