const Assignment = require('../../models/assignment')


exports.viewAssignments = async(req, res, next) => {
    try {
        let data = await Assignment.find({_id : req.params.id})

    res.status(200).json(data)

    }catch(e){
        res.status(400).json({
            "success": false,
            "error":e.message
        })
    }
}
