import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import StarBg4 from "../assets/images/4star.png";
import StarBg5 from "../assets/images/5star.png";

import AddCircleIcon from "@mui/icons-material/AddCircle";

const getRarityBackground = (rarity) => {
  if (rarity === 4) return StarBg4;
  if (rarity === 5) return StarBg5;
};

const StyledIcon = styled("div")`
  color: #4a5d66;
  text-decoration: none;
  border-radius: 2px;
  background-color: #e9e5dc;
  box-sizing: border-box;
  border: 4px solid #e9e5dc;
  width: 117px;
  height: 143px;
  margin: auto;
  transition: all 0.2s ease-out;
  :hover {
    border-color: #d3bc8d;
    background-color: #d3bc8d;
    color: #f1f1f1;
  }
`;

export const CharacterIcon = ({ character }) => {
  const { name, id, rarity, vision } = character;
  const iconBig = `https://api.genshin.dev/characters/${id}/icon-big`;
  const icon = `https://api.genshin.dev/characters/${id}/icon`;

  const element = `https://api.genshin.dev/elements/${vision.toLowerCase()}/icon`;

  return (
    <Link
      to={`${id}`}
      style={{
        textDecoration: "none",
      }}
    >
      <StyledIcon>
        <div
          style={{
            position: "relative",
          }}
        >
          <img
            src={element}
            alt="element"
            style={{
              width: "25px",
              height: "25px",
              position: "absolute",
              top: 0,
              right: 0,
            }}
          />
          <img
            onError={(ev) => (ev.target.src = icon)}
            src={iconBig || icon}
            alt={name}
            style={{
              width: "100%",
              // height: "90%",
              height: "113px",
              backgroundImage: `url(${getRarityBackground(rarity)})`,
              borderRadius: "4px 4px 16px 8px",
              objectFit: "cover",
              objectPosition: "50% 50%",
            }}
          />
          <Button
            color="success"
            sx={{
              position: "absolute",
              top: "-10px",
              left: "-10px",
              padding: 0,
              justifyContent: "flex-start",
              fontSize: "2rem",
              minWidth: "20px",
            }}
          >
            <AddCircleIcon
              sx={{
                background: "#fff",
                borderRadius: "50%",
              }}
            />
          </Button>
          <Rating
            name="simple-controlled"
            value={rarity}
            readOnly
            sx={{
              fontSize: "1rem",
              position: "absolute",
              bottom: 4,
              width: "100%",
              zIndex: "100",
              justifyContent: "center",
              left: 0,
            }}
          />
        </div>
        <section
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <p
            style={{
              margin: "auto",
              textAlign: "center",
              height: "20px",
              textTransform: "capitalize",
            }}
          >
            {id.replace("-", " ")}
          </p>
        </section>
      </StyledIcon>
    </Link>
  );
};
