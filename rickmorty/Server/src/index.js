var http = require("http");
var data = require("./utils/data");
const getCharById = require("./controllers/getCharById");
const PORT = 3001;
http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const idurl = parseInt(req.url.split("/").at(-1));

    if (req.url.includes("/rickandmorty/character")) {
      getCharById(res, idurl);
    }
  })
  .listen(PORT, "localhost");

// if (req.url === "/rickandmorty/character") {
//   return res.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify(data));
// }
// if (req.url.includes("/rickandmorty/character")) {

//   if (character) {
//     return res.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify(character));
//   } else {
//     return res.writeHead(404, { "Content-Type": "text/plain" }).end("Character not found");
//   }
// }
