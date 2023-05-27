const { User } = require("../DB_connection");

const login = async (req, res) => {
  const { username, password } = req.query;
  try {
    if (!username || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ message: "Usuario no encontrado" });

    user.password === password
      ? res.status(200).json({ access: true })
      : res.status(403).json({ message: "contraseña incorrecta" });

    return { access: true };
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = login;
