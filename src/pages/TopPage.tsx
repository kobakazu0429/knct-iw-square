import React, { FC } from "react";
import styled from "styled-components";
import { Header } from "@/layouts/Header";

export const TopPage: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <HeroArea>
          <HeroImg src="https://lh3.googleusercontent.com/faMdVCQ3IT0r9gmblI4rfMP5p7ic6dNmrI-U0pRjxjXLGkrvqHvXywdSX5Bu2pclWp1VztTQ=w16383" />
        </HeroArea>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
`;

const HeroArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroImg = styled.img`
  width: 100%;
`;
