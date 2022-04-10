const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const validator = require("validator");

const student = new mongoose.Schema({
	name: {
		type: String,
		// required: true,
		// validate(name) {
		// 	if (!validator.isAlpha(value)) {
		// 		throw new console.error();
		// 	}
		// },
	},
	email: {
		type: String,
		// required: true,
		// unique: true,
		// validate(value) {
		// 	if (!validator.isEmail(value)) {
		// 		throw new console.error();
		// 	}
		// },
	},
	gender: {
		type: String,
	},
	status: {
		type: String,
	},
});

const studentModel = mongoose.model("Student", student);

module.exports = studentModel;
