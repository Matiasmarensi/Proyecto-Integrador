const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  try {
    if (!username || !password) {
      res.status(400).json({ message: "Faltan datos" });
    }
    const [user, created] = await User.findOrCreate({
      where: {
        username: username,
        password: password,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = postUser;
