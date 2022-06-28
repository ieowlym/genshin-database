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
        opacity: 95%;
        background-repeat: no-repeat;
        /* -webkit-transform: scale(1.05);
        transform: scale(1.05); */
      }
      > img {
        max-width: 20vh;
        width: 25vw;
        text-align: center;
      }
      > h4 {
        min-width: 30vh;
      }
    }
  }
`;
export const Regions = () => {
  const [regions, setRegions] = useState([]);

  const regionImages = [
    {
      name: "Mondstadt",
      img: {
        main: Mondstadt,
        emblem: Emblem_Mondstadt,
      },
    },
    {
      name: "Liyue",
      img: {
        main: Liyue,
        emblem: Emblem_Liyue,
      },
    },
    {
      name: "Inazuma",
      img: {
        main: Inazuma,
        emblem: Emblem_Inazuma,
      },
    },
  ];

  const loadRegions = async () => {
    try {
      const res = await fetchNations();
      const regions = res.reverse();
      setRegions(
        regions.map((item, index) => ({
          ...item,
          img: regionImages[index].img.main,
          emblem: regionImages[index].img.emblem,
        }))
      );
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadRegions();
  }, []);

  return (
    <RegionsSection>
      <SectionName name="Explore Teyvat Regions" />
      {regions &&
        regions.reverse().map((region, index) => (
          <div className="Nations">
            <div
              key={index}
              style={{
                //   backgroundImage: `url(/static/media/${region.name}.webp)`,
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${region.img})`,
              }}
            >
              <img src={region.emblem} alt={region.name} />
              <Typography variant="h4"> {region.name} </Typography>
            </div>
          </div>
        ))}
      <div className="Nations">
        <div
          style={{
            //   backgroundImage: `url(/static/media/${region.name}.webp)`,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${ComingSoon})`,
          }}
        >
          <img src={Emblem_ComingSoon} alt="" />
          <Typography variant="h4"> Coming Soon </Typography>
        </div>
      </div>
    </RegionsSection>
  );
};
