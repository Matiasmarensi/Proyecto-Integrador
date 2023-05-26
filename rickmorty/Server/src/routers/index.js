const express = require("express");
const router = express.Router();

const { getCharacterById } = require("../controllers/getCharById");
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const postUser = require("../controllers/postUser");

router.get("/character/:id", getCharacterById);
router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
