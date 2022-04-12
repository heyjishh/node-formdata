const mongoose = require("mongoose");
const validator = require("validator");

const student = new mongoose.Schema({
	name: {
		type: String,
		//required: true,
		// validate(value) {
		// 	if (!validator.isAlpha(value)) {
		// 		throw new console.error();
		// 	}
		// },
	},
	email: String,
	// email: {
	// 	type: String,
	//required: true,
	//unique: true,
	// validate(value) {
	// 	if (!validator.isEmail(value)) {
	// 		throw new console.error();
	// 	}
	// },
	// },
	gender: {
		type: String,
	},
	status: {
		type: String,
	},
});

const studentModel = mongoose.model("Student", student);

module.exports = studentModel;
