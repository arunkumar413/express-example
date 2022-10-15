module.exports.Login = async function (req, res) {
  console.log("This is login ");
  console.log(req.body);
  res.json({ res: "This is login" });
};
