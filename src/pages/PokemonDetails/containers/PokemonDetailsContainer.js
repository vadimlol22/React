import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getPokemonDetailsThunk } from "../api";
import { isPokemonDetailsLoadingSelector } from "../selectors";

import Spinner from "../../../commonComponents/Spinner";
import PokemonItem from "../components/PokemonItem";

const PokemonDetailsContainer = () => {
  const dispatch = useDispatch();
  const { pokemonName } = useParams();

  const isLoading = useSelector(isPokemonDetailsLoadingSelector);

  useEffect(() => {
    dispatch(getPokemonDetailsThunk(pokemonName));
  }, [pokemonName, dispatch]);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <PokemonItem />
        </>
      )}
    </div>
  );
};

export default PokemonDetailsContainer;
