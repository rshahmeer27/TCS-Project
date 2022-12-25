var mongoose = require('mongoose');
var Schema  = mongoose.Schema;
var materialSchema = new Schema({
    teacher_id:
    {
        type:mongoose.Types.ObjectId,
        ref:'Teacher',
    },
    title:
    {
        type:String,
        required:true
    },

  MaterialType:
  {
    type:String,
    required:true
  },
  UploadedOn:
  {
    type:Date,
    required:true
  },
  filesize:
  {
    type:String,
    required:true
  },
  filetype:
  {
    type:String,
    required:true
  }
});
module.exports = mongoose.model('Material' , materialSchema);