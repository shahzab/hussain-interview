const express = require("express");
const router = express.Router();
const getCart = require("../controller/getCart");
const postCart = require("../controller/postCart");

router.get("/cart", getCart);
router.post("/cart", postCart);

module.exports.router = router;
