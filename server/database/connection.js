const mongoose = require("mongoose");

const conn = mongoose
	.connect("mongodb://localhost:27017/arsh")
	.then(() => {
		console.log("database is connected");
	})
	.catch(console.error());

// module.export = conn;
