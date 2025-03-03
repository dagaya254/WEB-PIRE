const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "eiR1FL4Y#leNbH-FazffQPn7mvdJhlZ4UX1n9MHOelJjOJpohei4",
  MONGODB: process.env.MONGODB || "mongodb://mongo:AYxouuMkYykwClbVTMevfKxuEiINZVjT@centerbeam.proxy.rlwy.net:35880",
  OWNER_NUM: process.env.OWNER_NUM || "94703995359",
};
