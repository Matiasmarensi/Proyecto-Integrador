const users = require("../utils/users");

function login(req, res) {
  const { username, password } = req.query;
  console.log(req.query);
  const user = users.find((user) => user.email === username && user.password === password);
  if (user) {
    res.status(200).json({ access: true });
  } else {
    res.status(200).json({ access: false });
  }
}

module.exports = { login };
