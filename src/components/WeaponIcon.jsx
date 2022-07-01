import styled from "@emotion/styled";
import Rating from "@mui/material/Rating";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";

const StyledIcon = styled("div")`
  position: relative;
  width: 100px;
  height: 100px;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 14px;
  transition: all 0.2s linear;
  & img {
    width: 90px;
    height: 90px;
    margin: 4px;
    border-radius: 12px;
    border: 1px solid #d3bc8d;
  }
  :hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const WeaponIcon = ({ weapon }) => {
  const { name, type, id, rarity } = weapon;
  const icon = `https://api.genshin.dev/weapons/${id}/icon`;
  const defaultIcon = `https://api.genshin.dev/weapons/dull-blade/icon`;

  return (
    <StyledIcon title={name}>
      <div>
        {icon && (
          <img
            onError={(ev) => (ev.target.src = defaultIcon)}
            src={icon}
            alt={name}
            style={{}}
          />
        )}
        <Rating
          name="simple-controlled"
          value={rarity}
          max={rarity}
          readOnly
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            margin: "auto",
            fontSize: "1.1rem",
            justifyContent: "center",
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
      </div>
    </StyledIcon>
  );
};
