import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Regions } from "../components/Regions";
import { SectionName } from "../components/SectionName";
import { Elements } from "../components/Elements";
import Icon from "../assets/images/pin.png";

const IntroSection = styled("section")`
  color: #fff;
  height: 100vh;
  max-width: 1000px;
  margin: auto;
  padding: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  box-sizing: border-box;
  > h6 {
    margin: 3vh 0;
  }
  & img.down {
    position: relative;
    animation: mymove 3s infinite ease-in;

    @keyframes mymove {
      /* from {
        transform: rotate(-90deg) translate(0, 0.5px);
      }
      to {
        transform: rotate(-90deg) translate(-5px, 0.5px);
      } */
      0% {
        transform: rotate(-90deg) translate(0, 0.5px);
      }
      50% {
        transform: rotate(-90deg) translate(-5px, 0.5px);
      }
      100% {
        transform: rotate(-90deg) translate(0, 0.5px);
      }
    }
  }
`;

const handleScroll = (e) => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
};

export const HomePage = () => {
  return (
    <div>
      <img
        src="https://genshin.hoyoverse.com/_nuxt/img/b57475e.jpg"
        alt=""
        style={{
          position: "absolute",
          width: "100%",
          zIndex: "-100",
          top: 0,
          height: "100vh",
          objectFit: "cover",
          filter: "brightness(80%)",
        }}
      />
      <IntroSection>
        <Typography
          variant="h3"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1vw",
            fontSize: {
              xs: "2rem",
              sm: "3rem",
            },
          }}
        >
          <img src={Icon} alt="" /> Teyvat Travel Highlights{" "}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "1.3rem",
            },
          }}
        >
          You have arrived in Teyvat — a fantasy world where the seven elements
          flow and converge. In the distant past, the Archons granted mortals
          unique elemental abilities. With the help of such powers, people
          formed a bountiful homeland out of the wilderness. However, 500 years
          ago, the collapse of an ancient civilization turned the universe
          upside down...
          <br />
          <br />
          Here you can find a wealth of information on travel in Teyvat,
          courtesy of the Adventurers' Guild.
        </Typography>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "300px",
            marginTop: "5vh",
          }}
        >
          <img
            style={{
              position: "absolute",
              margin: "auto",
            }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWQAAABMCAYAAABak83PAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYThkMDRiYy1jNTZkLTJkNDMtOGY5Yy02OGY3YWNhYzQ5ZjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkEzQzM2QkY4MEY2MTFFOTgyNzFEQjQ0QkUyMDlFMEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkEzQzM2QkU4MEY2MTFFOTgyNzFEQjQ0QkUyMDlFMEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFFMEEwQUZBN0QwMjExRTk5RjVBRjA0QkIxQTU2MjBGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFFMEEwQUZCN0QwMjExRTk5RjVBRjA0QkIxQTU2MjBGIi8+IDwvcmRmOkRlc2Ny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"
            alt=""
          />
          <img
            className="down"
            style={{
              transform: "rotate(-90deg)",
              width: "30px",
            }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAABACAYAAACOcP4eAAAFZklEQVRogcXaeYhd1R0H8M/MJJNEGxVJcAloVQT/MgmYGsEtuBCq4larxiYuxVgVKVpaQcXdVnBpwSKt4i5Ssa6UgjWQ1gXikhoqaFFUUNP8E9xSNYkmzz9+5/Ju3sx7c8+d+9584TL3nHvO737nvN92fucOtVotU4gT8DY+zJk03B8ulXAQHsaM3IlTSfph7I6NuROnivRNWIRv6nCYCtLH4pp0v7WOgEGTnivUosBQHSGDJv0E9pqskEGSvhVHNSFoUKSX4cqmhA2C9CG4r0mB/Sa9O57BzCaF9pP0CB7HvKYF95P0A8InN45+kb4eyyuMm1aHQz9Ir8R1FcfOwJbcFzRN+kz8OWP89fgs+y2tVqup65hWq/Vdqzqeq/uuoYY2Acfjb5hecfyrOFLNhKkJ0ofhH/hBxfEbcCg+rvvCyer0ifiX6oS34iRtwvunKwuTIX0KnlZdJVo4FWtTe1TkJMvSfWXUJf1LQXhaxpyf4e+l9lLMSdfSnJfXIX0r/pA552I8VmovwhJsSteS1FcJOaSn4375KeZv8KdSex5OFkHlu3RtSX17VxFYlfR+wk2dX5VpwnW4rdSeLcL7LLGpHUrXN6lveRrTE1VIH44XsDCPr6twY8e7zsCeQiXK+8Oh1LdXGtOT10SkL8VLOCCPr1/hdx19yzAfn6d2SxjytHQvPVuAc3oJ72b9O+NurMgkux0X4KFS3zB+IgztixLhUe1kaYbw4UOJ+CHp2V+TzB0wXkRcgHvTxBxsxekinBeYJvR0fiLcStfM9OyeNG6lMMjN2nq+G9bhkfSsK+lf4A7slEn4XZHhrSv17SMC0AFi9YoVGxVG9xReTn2H4zRhkEU+MpyIvy+2bB91kt4Ddwq9y8UbItJ9UupbjB8LNftS2+hGRMh/Fv/skHO0cHv/x7bU18Iu+EoEpjUF6QtxlxrVS/wRl5Xa+4rV/aH4qYufm1i56WLVXu0ib3Ei/q32L1Oo00xREn52WFuH6mBbR7vQ2V4ye3msbnMKeS20CvXYE7ebwNV0wRqhjxtKfT8S6jHbWPWYLdRjdYecJWKVNxmrHpuEerzGWEO8JJGflUn8HZyF/5T65gldP1B4joJIYYjP4MXUd0QaWzbEEeyK90Rytr4QPJ7LWyRc3vxM4ptFNCu7vBHh8hYKD1J2edO195MXCT3udHlvCpe3gxp227nsIpKcszOJb8PPjQ0upwu39oUwsF7BZVis8Mt40jjBpZtRfCnc3xWZpEfwoAjjBbaLEu/rYvUkclsT8dESYWnM62nOGMJU2yMuEdWifTP/gavx21J7GOfhYO38oxO7Cbt4UBfChaCJsBrH4a0KY8u4BTeU2ttFbW+9UL/yahVeYn0a05Uw1fPp94SBPlJxfIFrRYpa4Cs8mv7O0jbMWR3PeiJn57JFZH23Z8whVvzyUnuDcHej2qnpqPDdG8bMHgd19oi/lm+gdwp9LrBWqN3sdK0WOUwl1N2N/14Eg28z5jyQ5hR4Xhx8bkz3lTHZCtMJ8msfR+CV1C4KNR/kvLSJsthiURabcEOasFGUxbKIltFEqXeNiHhVi4lzxDaq9jlMU/XpF4SqVP3ZFgq1qoUmi+qrVDuyKLBUlBiyc/mm6tNlrFT9NGC7OC//NOcF/ThzuceO4bsXNsusmNLf063HJhokSgM984zx0M9zxBXCQBtHP0lvE7WQ2scU3dDvs/HPREnh6yaFDuIrhH+LLVhjGNT3Hn8xtopaG4P8suYqY2sdtTDob5h+iv9NVsigSW/EuaV2rXA8Fd/lrcLN6T47GtKf3KMqXhOb5bkyP92cym9NV4hEaU7uxKkk/V9BPPsjle8BB9HRUL6DehMAAAAASUVORK5CYII="
            alt=""
            onClick={(e) => handleScroll(e)}
          />
        </div>
      </IntroSection>
      <SectionName name="Discover Elements" />

      <Elements />

      <Regions />
    </div>
  );
};
