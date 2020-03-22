import React, { FC } from "react";
import styled from "styled-components";
import { Header } from "@/layouts/Header";
import safeIsFirst from "@/assets/images/safe-is-first.jpg";

export const TopPage: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <HeroArea>
          <HeroImg src={safeIsFirst} />
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
