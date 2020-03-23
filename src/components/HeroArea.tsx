import React, { FC } from "react";
import styled from "styled-components";
import { DefaultDesign, MobileDesign } from "@/components/utils/Responsive";

interface Props {
  text: string;
  backgroundImage: any;
}

export const HeroArea: FC<Props> = ({ text, backgroundImage }) => {
  return (
    <>
      <DefaultDesign>
        <StyledHeroArea backgroundImage={backgroundImage}>
          <h1>{text}</h1>
        </StyledHeroArea>
      </DefaultDesign>
      <MobileDesign>
        <StyledMobileHeroArea backgroundImage={backgroundImage}>
          <h1>{text}</h1>
        </StyledMobileHeroArea>
      </MobileDesign>
    </>
  );
};

const StyledHeroArea = styled.div<{ backgroundImage: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  height: 450px;
  h1 {
    font-size: 120px;
    color: #fff;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.5);
  }
`;

const StyledMobileHeroArea = styled.div<{ backgroundImage: any }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  height: 30vh;
  h1 {
    font-size: 70px;
    color: #fff;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.5);
  }
`;
