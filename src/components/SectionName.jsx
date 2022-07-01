import Line from "../assets/images/line.png";
import { Box, Typography } from "@mui/material";
import BackgroundImage from "../assets/images/background.png";
import styled from "@emotion/styled";

const StyledSection = styled("div")`
  color: #fff;
  text-align: center;
  height: 15vh;
  position: relative;
  overflow: hidden;
  border: 1px solid #f1f1f1;
  > div {
    height: 15vh;
    width: 100%;
  }
  > div.bg-image {
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${BackgroundImage});
    filter: blur(5px);
    background-size: cover;
    background-position: bottom;
  }
  > div.text {
    display: flex;
    justify-content: space-around;
    position: absolute;
    top: 0;
    align-items: center;
  }
`;

export const SectionName = ({ name }) => {
  return (
    <StyledSection>
      <div className="bg-image"></div>
      <div className="text">
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", sm: "none", md: "inline" },
          }}
        >
          <img src={Line} alt="" />
        </Box>
        <Typography variant="h5"> {name} </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "inline" } }}>
          <img
            src={Line}
            alt=""
            style={{
              transform: "rotate(180deg)",
            }}
          />
        </Box>
      </div>
    </StyledSection>
  );
};
