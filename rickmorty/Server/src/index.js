var http = require("http");
var data = require("./utils/data");

const PORT = 3001;

module.exports = http
  .createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url === "/rickandmorty/character") {
      return res.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify(data));
    }
    if (req.url.includes("/rickandmorty/character")) {
      const idurl = parseInt(req.url.split("/").at(-1));

      const character = data.find((c) => c.id === idurl);

      if (character) {
        return res.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify(character));
      } else {
        return res.writeHead(404, { "Content-Type": "text/plain" }).end("Character not found");
      }
    }
  })

  .listen(PORT, "localhost");
