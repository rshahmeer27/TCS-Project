
const Assignment = require('../../models/assignment')



exports.attemptedAssignments = async(req,res,next)=>{

try{
    let data = await Assignment.find({
        "submittedBy" : req.params['student']

    })

    res.status(200).json(data)
}
catch(e){
    res.status(400).json({
        "success": false,
        "error":e.message
    })
}
}
