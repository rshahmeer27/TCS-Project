var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var studentSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	rollno: {
		type: String,
		required: true,
	},
	courses: {
		type: [
			{
				code: {
					type: String,
					required: true,
				},
				name: {
					type: String,
					required: true,
				},
				marks: {
					type: Number,
				},
				quiz: {
					type: [
						{
							_id: {
								type: mongoose.Types.ObjectId,
							},
							qid: {
								type: mongoose.Types.ObjectId,
								ref: 'Quiz',
							},
							attempted: {
								type: Boolean,
								default: false,
							},
							marks: {
								type: Number,
							},
						},
					],
				},
			},
		],
	},
});

module.exports = mongoose.model('Student', studentSchema, 'students');
