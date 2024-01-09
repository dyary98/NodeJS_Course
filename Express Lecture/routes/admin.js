const express = require("express");
const path = require("path");

const router = express.Router();

const products = [];
router.get("/add-product", (req, res, next) => {
  console.log("in another the midlleware");
  res.render("add-product", {
    title: "add product",
    path: "/admin/add-product",
  });
});
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
