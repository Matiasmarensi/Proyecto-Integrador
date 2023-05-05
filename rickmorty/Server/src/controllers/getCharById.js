const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharacterById = (req, res) => {
  const { id } = req.params;
  axios
    .get(URL + id)
    .then(({ data }) => {
      const { id, name, species, gender, origin, status, image } = data;
      if (name) {
        const character = {
          id,
          name,
          species,
          origin,
          image,
          status,
          gender,
        };
        return res.status(200).json(character);
      }
      return res.status(404).send("Not found");
    })
    .catch((error) => res.status(500).send(error.message));
};
module.exports = { getCharacterById };
