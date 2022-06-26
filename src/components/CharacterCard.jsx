export const CharacterCard = ({ character }) => {
  return (
    <div>
      <img src={character.cardImageURL} alt={character.name} />
    </div>
  );
};
