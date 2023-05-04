const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

export const getCharacterById = (req, res) => {
  const { id } = req.params;
  axios(URL + id);
  axios(URL + id).then((response) => response.data);
  console
    .log(response)
    .then(({ id, name, species, gender, origin, status, image }) => {
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
