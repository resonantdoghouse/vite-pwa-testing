import { useState, useEffect } from "react";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((res) => res.json())
      .then((data) => setPokemon(data.results))
      .catch((err) =>
        setError("Failed to load Pokémon. Check your connection.")
      );
  }, []);

  return (
    <div>
      <h1>Pokémon List</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {pokemon.map((p, index) => (
            <li key={index}>{p.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PokemonList;
