const express = require("express");
const { append } = require("express/lib/response");
const route = express.Router();
const app = express();
app.use(express.json());

route.get("/", (req, res) => {
	res.send();
	res.render("index");
});

route.get("/add-user", (req, res) => {
	res.render("add_user");
});
route.get("/update-user", (req, res) => {
	res.render("update_user_1");
});

module.exports = route;
