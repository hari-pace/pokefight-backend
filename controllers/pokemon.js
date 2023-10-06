const Pokemon = require("../schemas/Pokemon");

const getAllPokemon = async (req, res) => {
  try {
    const pokemon = await Pokemon.find().sort({ id: 1 });
    if (!pokemon.length) {
      res.status(200).json({ msg: "There are no Pokemon here..." });
    } else {
      res.status(200).json(pokemon);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const getOnePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.find({ id: id });
    if (pokemon) {
      return res.status(200).json(pokemon);
    } else {
      res.status(404).json({ msg: "That Pokemon could not be found..." });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllPokemon,
  getOnePokemon,
};
