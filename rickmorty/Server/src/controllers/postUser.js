const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);

  try {
    if (!username || !password) {
      res.status(400).send("Faltan datos");
    }
    const [user, created] = await User.findOrCreate({
      where: {
        username: username,
        password: password,
      },
    });
    console.log(user);
    res.status(201).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = postUser;
