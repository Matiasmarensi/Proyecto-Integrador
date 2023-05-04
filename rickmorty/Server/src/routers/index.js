const express = require("express");
const router = express.Router();

const { getCharacterById } = require("../controllers/getCharById");
const { login } = require("../controllers/login");
const { deleteFav, postFav } = require("../controllers/handleFavorites");

router.get("/character/:id", getCharacterById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
