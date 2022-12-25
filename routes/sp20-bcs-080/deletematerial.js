var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});
router.delete('/deletematerial/:id',function (req, res,next)
{
    Material.deleteOne({
     _id:req.params.id},function(error , results)
     {
        if(error)
        {
            return next(error);

        }
        res.json(results);
    });
});
module.exports = router;