import React, { FC, useState, useCallback, useEffect, useContext } from "react";
import styled from "styled-components";
import { AlgoliaContext } from "@/contexts/AlgoliaContext";
import { Header } from "@/layouts/Header";
import { Creator } from "@/components/Creator";
import creators from "@/assets/images/creators.jpg";

interface CreatorsResponse {
  avatorUrl: string;
  name: string;
  skills: string[];
}

export const CreatorsPage: FC = () => {
  const { creatorsIndex } = useContext(AlgoliaContext);
  const [data, setData] = useState<CreatorsResponse[]>([]);

  const searchCreators = useCallback(() => {
    creatorsIndex.search<CreatorsResponse>("").then(res => {
      setData([...res.hits]);
    });
  }, [creatorsIndex]);

  useEffect(() => {
    searchCreators();
  }, []);

  return (
    <>
      <Header />
      <HeroArea>
        <h1>Creators</h1>
      </HeroArea>
      <Container>
        {data.map(({ avatorUrl, name, skills }) => (
          <Creator
            avatorUrl={avatorUrl}
            name={name}
            skills={skills}
            key={name}
          />
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 600px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const HeroArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${creators});
  height: 500px;
  h1 {
    font-size: 120px;
    color: #fff;
    text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.5);
  }
`;
