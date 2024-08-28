import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

const Dex = () => {
  //   console.log("덱스", selectedPokemon);
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const onAdd = (pokemon) => {
    if (selectedPokemon.lenth >= 6) {
      alert("6개까지만 선택할 수 있습니다.");
      return;
    }
    if (selectedPokemon.find((el) => el.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다.");
      return;
    }
    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  const onRemove = (pokemon) => {
    const removePokemon = selectedPokemon.filter((p) => {
      return p.id !== pokemon.id;
    });
    setSelectedPokemon(removePokemon);
  };

  return (
    <div>
      <Dashboard selectedPokemon={selectedPokemon} onRemove={onRemove} />
      <PokemonList pokemonList={MOCK_DATA} onAdd={onAdd} />
    </div>
  );
};

export default Dex;
