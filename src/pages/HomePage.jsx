import { useCallback, useEffect } from "react";
import { CharacterCard } from "../components/CharacterCard";
import { loadCharacters } from "../store/actions/loadCharacters";
import { useDispatch, useSelector } from "react-redux";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { characters } = useSelector((state) => state.characters);

  const load = useCallback(() => {
    dispatch(loadCharacters());
    console.log(characters);
  }, [dispatch]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <div>
      {characters &&
        characters.map((character) => {
          <div>
            <h5>aaa </h5>
            <CharacterCard character={character} />;
          </div>;
        })}
    </div>
  );
};
