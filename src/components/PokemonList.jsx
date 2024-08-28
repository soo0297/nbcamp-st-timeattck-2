import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import MOCK_DATA from "../mock";

const ListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const PokemonList = ({ onAdd }) => {
  return (
    <ListContainer>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={() => {
            onAdd(pokemon);
          }}
          isSelected={false}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
