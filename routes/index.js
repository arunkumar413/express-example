var express = require("express");
const { Authenticate } = require("../controllers/authentication");
const { Login } = require("../controllers/login");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/login", Login);
router.post("/login", Login);

module.exports = router;
