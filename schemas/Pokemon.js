const mongoose = require("mongoose");

const PokemonSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: Object,
  },
  type: {
    type: Object,
  },
  base: {
    type: Object,
  },
});

module.exports = mongoose.model("Pokemon", PokemonSchema);
