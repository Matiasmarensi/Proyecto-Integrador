const axios = require("axios");

const getCharById = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const { id, name, gender, species, origin, image, status } = response.data;
      const char = {
        id,
        name,
        gender,
        species,
        origin,
        image,
        status,
      };
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(char));
    })
    .catch((reason) => {
      res.writeHead(500, { "content-type": "text/plain" });
      res.end(reason.reason.status);
    });
};

module.exports = getCharById;
