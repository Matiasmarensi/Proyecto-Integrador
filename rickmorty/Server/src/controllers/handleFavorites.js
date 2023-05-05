let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);

  res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  myFavorites = myFavorites.filter((fav) => fav.id !== parseInt(id));

  res.status(200).json(myFavorites);
};

module.exports = { postFav, deleteFav };
