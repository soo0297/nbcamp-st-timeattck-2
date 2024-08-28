import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div``;

const Button = styled.button``;

function PokemonCard({ pokemon, onAdd, onRemove, isSelected }) {
  const navigate = useNavigate();

  const pokemonId = pokemon.id;

  return (
    <Card>
      <div
        onClick={() => {
          navigate(`/detail?id=${pokemonId}`);
        }}
      >
        <img src={pokemon.img_url} alt={pokemon.img_url} />
        <p>{pokemon.korean_name}</p>
      </div>
      {isSelected === true ? (
        <Button
          onClick={() => {
            onRemove(pokemon);
          }}
        >
          삭제
        </Button>
      ) : (
        <Button
          onClick={() => {
            onAdd(pokemon);
          }}
        >
          추가
        </Button>
      )}
    </Card>
  );
}

export default PokemonCard;
