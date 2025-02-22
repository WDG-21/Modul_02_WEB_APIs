// Container, in dem die Pokémon-Karten hinzugefügt werden sollen
const pokemonContainer = document.getElementById('pokemon-container');

// Funktion, um die Daten eines einzelnen Pokémon von der API abzurufen
async function fetchPokemon(id) {
  try {
    // Abruf der Pokémon-Daten anhand der ID
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json(); // Umwandlung der Antwort in ein JSON-Objekt
    // Die Daten des Pokémon werden zurückgegeben
    return pokemon;
  } catch (error) {
    // Fehlerbehandlung, falls die API-Anfrage fehlschlägt
    console.error('Error fetching pokemons', error);
  }
}

// Funktion, um Pokémon-Karten anzuzeigen
async function displayPokemons() {
  // Schleife, um die ersten 150 Pokémon (ID: 1 bis 150) zu durchlaufen
  for (let i = 1; i <= 150; i++) {
    // Abrufen der Pokémon-Daten für die aktuelle ID
    const pokemon = await fetchPokemon(i);

    // Nur fortfahren, wenn die Daten erfolgreich abgerufen wurden
    if (pokemon) {
      // Erstellen einer Karte für das Pokémon
      const pokemonCard = document.createElement('div');
      pokemonCard.classList.add(
        'bg-white',
        'rounded-lg',
        'shadow-lg',
        'p-4',
        'flex',
        'flex-col',
        'items-center',
        'text-center'
      );

      // Hinzufügen des Pokémon-Bildes
      const pokemonImage = document.createElement('img');
      // URL des Bildes wird aus den Pokémon-Daten entnommen
      pokemonImage.src = pokemon.sprites.other.showdown.front_shiny;
      pokemonImage.alt = pokemon.name;

      // Hinzufügen des Pokémon-Namens
      const pokemonName = document.createElement('h2');
      pokemonName.textContent = pokemon.name; // Name des Pokémon
      pokemonName.classList.add('text-xl', 'font-bold', 'mb-2'); // Styling für den Namen

      // Hinzufügen von Informationen wie ID und Typ
      const pokemonInfo = document.createElement('p');
      pokemonInfo.textContent = `ID: ${pokemon.id} | Type: ${pokemon.types
        .map((typeInfo) => typeInfo.type.name)
        .join(', ')
        .toUpperCase()}`;

      pokemonCard.appendChild(pokemonImage);
      pokemonCard.appendChild(pokemonName);
      pokemonCard.appendChild(pokemonInfo);

      pokemonContainer.appendChild(pokemonCard);
    }
  }
}

displayPokemons();
