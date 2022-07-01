import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { fetchElements } from "../fetchers/fetchElements";

const ElementsSection = styled("section")`
  margin: 50px auto;
  height: auto;
  > div.wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40vh;
    > div {
      margin: 5px;
    }
  }
`;

export const Elements = () => {
  const [elements, setElements] = useState([]);

  const loadElements = async () => {
    try {
      const res = await fetchElements();

      setElements(res);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadElements();
  }, []);

  const degreeCounter = 360 / elements?.length;

  return (
    <ElementsSection>
      <div
        className="wrapper"
        style={{ position: "relative", display: "flex" }}
      >
        {elements &&
          elements.map((element, index) => {
            return (
              <div
                style={{
                  position: "absolute",
                  transform: `rotate(${degreeCounter * index + 90}deg)`,
                  width: "40vh",
                }}
              >
                <img
                  src={`https://api.genshin.dev/elements/${element.name.toLowerCase()}/icon`}
                  alt=""
                  style={{
                    transform: `rotate(-${degreeCounter * index + 90}deg)`,
                  }}
                />
              </div>
            );
          })}
      </div>
    </ElementsSection>
  );
};
