import PokemonCard from "./PokemonCard";

const Dashboard = ({ selectedPokemon, onRemove }) => {
  return (
    <div>
      <h2>나만의 포켓몬</h2>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <div>
          {selectedPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              onRemove={() => {
                onRemove(pokemon);
              }}
              isSelected={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
