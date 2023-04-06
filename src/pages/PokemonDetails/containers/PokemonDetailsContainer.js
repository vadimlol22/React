import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getPokemonDetailsThunk } from "../api";
import {
  pokemonDetailsSelector,
  isPokemonDetailsLoadingSelector,
} from "../selectors";

import Spinner from "../../../commonComponents/Spinner";

const PokemonDetailsContainer = () => {
  const dispatch = useDispatch();

  const { name, sprites, stats } = useSelector(pokemonDetailsSelector);
  const isLoading = useSelector(isPokemonDetailsLoadingSelector);

  const { pokemonName } = useParams();

  useEffect(() => {
    dispatch(getPokemonDetailsThunk(pokemonName));
  }, [pokemonName, dispatch]);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h2>Name : {name}</h2>
          <h3>Attack :{stats[0].base_stat}</h3>

          <img src={sprites.front_default} alt="" />
        </>
      )}
    </div>
  );
};

export default PokemonDetailsContainer;
