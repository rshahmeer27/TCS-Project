var express = require("express");
var router = express.Router();

router.get(
  "/viewHeadRouter/:id",
  asyncHandler(async (req, res) => {
    console.log("Req accepted");
    const id = req.params.id;
    console.log(req.body);
    const HeadRouter = await HeadRouter.findById(id);
    console.log(HeadRouter);
    if (HeadRouter) {
      res.json({ data: HeadRouter });
    } else {
      throw new Error("Head Router not found.");
    }
  })
);

module.exports = router;
