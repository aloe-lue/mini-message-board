const errorController = async function (req, res) {
  res.render("errorView", { title: "Mini Messageboard: errorpage" });
};

module.exports = errorController;
