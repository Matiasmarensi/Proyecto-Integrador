const users = require("../utils/users");

function login(req, res) {
  const { email, password } = req.query;
  const user = users.find((user) => user.email === email && user.password === password);
  if (user) {
    res.status(200).json({ access: true }); // Si el usuario existe, devuelve un objeto con access: true
  } else {
    res.status(200).json({ access: false }); // Si no, devuelve un objeto con access: false
  }
}
module.exports = { login };
