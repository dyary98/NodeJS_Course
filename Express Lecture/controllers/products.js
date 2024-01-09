const Product = require("../models/product");
exports.getAddProduct = (req, res, next) => {
  console.log("in another the midlleware");
  res.render("add-product", {
    title: "add product",
    path: "/admin/add-product",
  });
};
exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProduct = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop", { prods: products, docTitle: "shop" });
  });
};
