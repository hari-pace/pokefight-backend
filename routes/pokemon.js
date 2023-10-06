const express = require("express");
const { getAllPokemon, getOnePokemon } = require("../controllers/pokemon");

const api = express.Router();

api.route("/").get(getAllPokemon);

api.route("/:id").get(getOnePokemon);

module.exports = api;
