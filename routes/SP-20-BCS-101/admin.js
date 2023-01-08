router.post('/:id/addclass', async (req, res) => {
  const student = await Student.findById(req.params.id);
  student.classes.push(req.body.class);
  await student.save();
  res.send(student);
});
