import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../../../routes/routeNames";
import { getPokemonsThunk } from "../api";
import CustomButton from "../../../commonComponents/CustomButton";
import PokemonLink from "../components/pokemonLink/PokemonLink";
import Errors from "../components/Errors/Errors";

const PokemonsContainer = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.dataFetching.data);
  const errors = useSelector((state) => state.dataFetching.errors);

  const handleGetPokemons = () => {
    dispatch(getPokemonsThunk());
  };

  return (
    <div>
      <h1>Получить всех покемонов</h1>
      <CustomButton onClick={() => handleGetPokemons()} text={"Click me !"} />

      {errors && <Errors errors={errors} />}

      <div style={{ display: "flex", flexWrap: "wrap", width: "700px" }}>
        {pokemons.map(({ name }) => (
          <Link
            key={name}
            to={`${ROUTE_NAMES.POKEMONS}/${name}`}
            style={{
              textDecoration: "none",
            }}
          >
            <PokemonLink name={name} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PokemonsContainer;
