const express = require("express");
const router = express.Router();
const serveIndex = require("../controller/getIndex");

router.get("/", serveIndex);

module.exports.router = router;
