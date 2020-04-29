const changeUserPhone = (User) => (req, res) => {
  const { code } = req.params;
  const { phone } = req.body;
  User.findOneAndUpdate(
    { "user.code": code },
    { $set: { "user.phone": phone } },
    { new: true }
  )
    .then((data) => {
      if (data) {
        res.json({ phone: data.user.phone });
      } else {
        res.status(404).json("User does not not exist!");
      }
    })
    .catch((err) =>
      res.status(500).json("An error occurred, please try again later!")
    );
};

module.exports = changeUserPhone;
