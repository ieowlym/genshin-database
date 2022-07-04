import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Inazuma from "../assets/images/Inazuma/Inazuma.webp";
import Emblem_Inazuma from "../assets/images/Inazuma/Emblem_Inazuma.webp";
import Liyue from "../assets/images/Liyue/Liyue.webp";
import Emblem_Liyue from "../assets/images/Liyue/Emblem_Liyue.webp";
import Mondstadt from "../assets/images/Mondstadt/Mondstadt.webp";
import Emblem_Mondstadt from "../assets/images/Mondstadt/Emblem_Mondstadt.webp";
import ComingSoon from "../assets/images/soon.webp";
import Emblem_ComingSoon from "../assets/images/Emblem_Soon.webp";
import { fetchNations } from "../fetchers/fetchNations";
import { SectionName } from "./SectionName";
import Line from "../assets/images/line_center.png";
import {regionImages} from "../mockData"
import {useStore} from "../stores/StoreProvider";
import {observer} from "mobx-react";
const RegionsSection = styled("section")`
  color: #fff;
  text-align: center;
  > div.Nations {
    overflow: hidden;
    > div {
      box-sizing: border-box;
      padding: 0 10vw;
      width: 100%;
      height: 30vh;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-around;
      background-blend-mode: darken;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      -webkit-transition: all 0.2s linear;
      -moz-transition: all 0.2s linear;
      -o-transition: all 0.2s linear;
      transition: all 0.2s linear;
      opacity: 100%;
      :hover {
        opacity: 85%;
        background-repeat: no-repeat;
        /* -webkit-transform: scale(1.05);
        transform: scale(1.05); */
      }
      > img {
        max-width: 20vh;
        text-align: center;
      }
      > h4 {
        min-width: 30vh;
      }
    }
  }
`;
export const Regions = observer(() => {

  const {regionStore}=useStore()
  const {regions}=regionStore



  return (
    <RegionsSection>
      <SectionName name="Explore Teyvat Regions" />
      {regions &&
        regions?.map((region, index) => (
          <div className="Nations">
            <div
              key={index}
              style={{
                //   backgroundImage: `url(/static/media/${region.name}.webp)`,
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${region.linkedImage})`,
              }}
            >
              <img src={region.emblem} alt={region.name} />
              <Box sx={{ display: { xs: "none", sm: "none", lg: "inline" } }}>
                <img src={Line} alt="" />
              </Box>
              <Typography variant="h4"> {region.name} </Typography>
            </div>
          </div>
        ))}
      <div className="Nations">
        <div
          style={{
            //   backgroundImage: `url(/static/media/${region.name}.webp)`,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${ComingSoon})`,
          }}
        >
          <img src={Emblem_ComingSoon} alt="" />
          <Box sx={{ display: { sm: "none", lg: "inline" } }}>
            <img src={Line} alt="" />
          </Box>
          <Typography variant="h4"> Coming Soon </Typography>
        </div>
      </div>
    </RegionsSection>
  );
})
