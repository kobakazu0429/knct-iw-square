import React, { FC, useState, useCallback, useEffect, useContext } from "react";
import styled from "styled-components";
import { AlgoliaContext } from "@/contexts/AlgoliaContext";
import { Header } from "@/layouts/Header";
import { Creator } from "@/components/Creator";
import { HeroArea } from "@/components/HeroArea";
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
      <HeroArea text="Creators" backgroundImage={creators} />
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
  height: auto;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
