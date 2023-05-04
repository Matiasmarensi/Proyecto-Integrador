let myFavorites = [];

const postFav = (req, res) => {
  const { character } = req.body;
  myFavorites.push(character);

  res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  const index = myFavorites.findIndex((fav) => fav.id === id);
  if (index !== -1) {
    myFavorites.splice(index, 1);
    res.status(200).json(myFavorites);
  } else {
    res.status(404).json({ error: "Personaje no encontrado en favoritos" });
  }
};

module.exports = { postFav, deleteFav };
