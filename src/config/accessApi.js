const cors = require("cors");

const corsOption = {
  origin: "*",
  methods: "GET, PATCH, POST, DELETE",
  "Content-Type": "application/json",
};

module.exports = cors(corsOption);
