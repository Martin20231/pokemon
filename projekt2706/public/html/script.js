// pokedex.html

// Annahme: Die JSON-Daten sind in einer Variable namens "pokemonData" verfügbar

// ID aus der URL auslesen
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

// Funktion zum Suchen des Pokémon in den Daten anhand der ID
function findPokemonById(id) {
  return pokemonData.find(pokemon => pokemon.id === id);
}

// Funktion zum Anzeigen der Pokémon-Daten auf der Seite
function displayPokemonDetails(pokemon) {
  const pokemonImage = document.getElementById('pokemon-image');
  const pokemonNumber = document.getElementById('pokemon-number');
  const pokemonName = document.getElementById('pokemon-name');

  // Pokémon-Daten in die entsprechenden Elemente einfügen
  pokemonImage.src = pokemon.image;
  pokemonNumber.textContent = pokemon.number;
  pokemonName.textContent = pokemon.name;
}

// Pokémon anhand der ID suchen und Details anzeigen
const pokemon = findPokemonById(id);
if (pokemon) {
  displayPokemonDetails(pokemon);
}
