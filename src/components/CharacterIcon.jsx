import Rating from "@mui/material/Rating";

export const CharacterIcon = ({ character }) => {
  const { name, id, rarity, vision } = character;
  const icon = `https://api.genshin.dev/characters/${id}/icon`;

  const element = `https://api.genshin.dev/elements/${vision.toLowerCase()}/icon`;

  return (
    <div style={{ width: "5vw" }}>
      <img src={icon} alt={name} />
      <section
        style={{
          display: "flex",
          height: "20px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src={element}
          alt="element"
          style={{
            width: "inherit",
            height: "inherit",
          }}
        />
        <p>{name}</p>
      </section>
      <Rating name="simple-controlled" value={rarity} readOnly />
    </div>
  );
};
