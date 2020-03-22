import React, { FC } from "react";
import styled from "styled-components";
import { Header } from "@/layouts/Header";

import { WorkCard } from "@/components/WorkCard";
import works from "@/assets/images/works.jpg";

const tags = ["Fusion360", "3Dプリンター", "レーザーカッター", "基盤加工機"];

const contents = [...Array(10).keys()].map(i => ({
  coverUrl: `https://picsum.photos/200?random=${i}`,
  creatorId: i,
  tags
}));

export const WorksPage: FC = () => {
  return (
    <>
      <Header />
      <HeroArea>
        <h1>Works</h1>
      </HeroArea>
      <Container>
        {contents.map(v => (
          <WorkCard {...v} />
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 50px calc((100vw - 260px * 6) / 2);
`;

const HeroArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${works});
  height: 500px;
  h1 {
    font-size: 120px;
    color: #fff;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.5);
  }
`;
