const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
require("./server/database/connection");
const route = require("./server/routes/router");
// const services = require('../services/render');
const studentModel = require("./server/model/model");

const app = express();
dotenv.config({ path: "config.env" });
// app.use("/", route);
const PORT = process.env.PORT || 8080;

// log request
// app.use(morgan("tiny"));

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

// set view engine
app.set("view engine", "ejs");

// load assets
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));

app.get("/", (req, res) => {
	res.render("index");
});

app.get("/add-user", (req, res) => {
	res.render("add_user");
});
app.get("/update-user", (req, res) => {
	res.render("update_user_1");
});

app.post("/add-user", (req, res) => {
	console.log(req.body);
	if (!req.body) {
		res.status(400).send({ message: "Not empty" });
		return;
	}

	const user = req.body;
	console.log(user);
	const storeData = new studentModel({
		name: user.name,
		email: user.email,
		gender: user.gender,
		status: user.status,
	});
	// const storeData = new studentModel(user);
	storeData
		.save()
		.then((result) => {
			console.log(result);
			res.send(storeData);
			res.redirect("/add-user");
		})
		.catch((err) => {
			res.status(500).send({ message: err.message || "Not empty" });
		});
	// res.render("add_user");
});

app.get("/get-users", (req, res) => {
	studentModel
		.find()
		.then((result) => {
			var data = result;
			console.log(data);
			res.send(data);
		})
		.catch((err) => {
			res.status(500).send({ message: err.message || "Not empty" });
		});
});

app.listen(PORT, () => {
	console.log(`service is running on http://localhost:${PORT}`);
});
