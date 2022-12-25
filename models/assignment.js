var mongoose = require('mongoose');



var schema = mongoose.Schema;


var assignmentSchema = new schema({
    title: {
        type: String,
        required: true,
    },

    dueDate:{
        type: Date,
        required: true,
    },
createdAt:{
    type: Date,
    required: true,
    default: Date.now
},
    createdBy:{
        type: mongoose.Schema.ObjectId,
        ref: 'Teacher',
        required: true
    },

    response:[
        new mongoose.Schema(
            {
                submittedBy:{
                    type: mongoose.Schema.ObjectId,
                    ref: 'Student',
                    required: true,
                },
                url:{
                    type: String,
                    match: [
                        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
                        'Please use a valid URL with HTTP or HTTPS'
                    ]
                }
            },


        )
    ]

});
module.exports = mongoose.model('Assignment', assignmentSchema);
