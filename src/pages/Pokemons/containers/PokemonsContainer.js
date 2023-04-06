import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ROUTE_NAMES } from "../../../routes/routeNames";
import { getPokemonsThunk } from "../api";

const PokemonsContainer = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector((state) => state.dataFetching.data);

  const handleGetPokemons = () => {
    dispatch(getPokemonsThunk());
  };

  return (
    <div>
      <h1>Получить всех покемонов</h1>
      <button onClick={handleGetPokemons}>Click me !</button>

      <div>
        {pokemons.map(({ name }) => (
          <Link key={name} to={`${ROUTE_NAMES.POKEMONS}/${name}`}>
            <div>{name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PokemonsContainer;
