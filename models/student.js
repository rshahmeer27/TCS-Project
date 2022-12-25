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
	courses:[{
		code:
			{
				type: String,
				required: true
			
		},
		name: {
			type: String,
			required: true
		},
		marks: {
			type: Number,
			
		}
	}]
});

module.exports = mongoose.model('Student', studentSchema);
