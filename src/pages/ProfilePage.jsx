import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Characters } from "../components/Characters";
import { Weapons } from "../components/Weapons";
import { Container } from "../components/Container";
import { SectionName } from "../components/SectionName";

const StyledSection = styled("div")`
  margin: 25px;
  color: black;
`;

export const ProfilePage = () => {
  return (
    <Container>
      <div style={{}}>
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            maxWidth: "1200px",
            margin: "auto",
          }}
        >
          Welcome
        </Typography>
        <Box
          sx={{
            display: {
              xs: "block",
              md: "flex",
            },
          }}
        >
          <div style={{ width: "100%" }}>
            <SectionName name="Characters" />
            {/* <Characters iconsPerRow={} /> */}
            <StyledSection>
              <Characters xs={6} sm={4} md={3} />
            </StyledSection>
          </div>

          <div style={{ width: "100%" }}>
            <SectionName name="Weapons" />
            <StyledSection>
              <Weapons xs={2} sm={4} md={3} />
            </StyledSection>
          </div>
        </Box>
      </div>
    </Container>
  );
};
