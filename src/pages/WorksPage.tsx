import React, { FC, useState, useContext, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { AlgoliaContext } from "@/contexts/AlgoliaContext";
import { useQuery } from "@/utils/useQuery";
import { Header } from "@/layouts/Header";
import { WorkCard } from "@/components/WorkCard";
import { TextField } from "@/components/TextField";
import { Tag } from "@/components/Tag";
import works from "@/assets/images/works.jpg";

interface WorksResponse {
  productImage: string;
  tags: string[];
  title: string;
  creator: string;
}

interface SearchOptions {
  q?: string;
  t?: string;
}

const queryTagNormalizer = (prevTag: string | null) =>
  prevTag ? prevTag : undefined;
const queryQNormalizer = (prevQ: string | null) => (prevQ ? prevQ : "");

export const WorksPage: FC = () => {
  const history = useHistory();
  const query = useQuery();
  const queryTag = query.get("tag");
  const queryQ = query.get("q");

  const { worksIndex } = useContext(AlgoliaContext);

  const [data, setData] = useState<any[]>([]);
  const [allTags, setAllTags] = useState<any[]>([]);
  const [searchWord, setSearchWord] = useState<string>("");

  const getAllTags = useCallback(() => {
    worksIndex.search<WorksResponse>("").then(res => {
      const uniqueTags = Array.from(
        new Set(res.hits.map(({ tags }) => tags).flat())
      );
      setAllTags(uniqueTags);
    });
  }, [worksIndex, allTags]);

  const searchWorks = useCallback(
    ({ q = "", t }: SearchOptions = {}) => {
      const options: any = {};
      if (t) options.facetFilters = [`tags:${t}`];
      worksIndex.search<WorksResponse>(q, options).then(res => {
        setData([...res.hits]);
        const newQuery = [];
        if (q !== "") newQuery.push(`q=${q}`);
        if (t) newQuery.push(`tag=${t}`);
        history.push(`/works?${newQuery.join("&")}`);
      });
    },
    [worksIndex]
  );

  // init
  useEffect(() => {
    getAllTags();

    if (queryQ) setSearchWord(queryQNormalizer(queryQ));
    searchWorks({
      q: queryQNormalizer(queryQ),
      t: queryTagNormalizer(queryTag)
    });
  }, []);

  useEffect(() => {
    searchWorks({
      q: queryQNormalizer(searchWord),
      t: queryTagNormalizer(queryTag)
    });
  }, [searchWord, queryTag]);

  const getAllWorks = useCallback(() => {
    setSearchWord("");
    history.push(`/works`);
  }, []);

  return (
    <>
      <Header />
      <HeroArea>
        <h1>Works</h1>
      </HeroArea>
      <Controller>
        <SearchLabel>検索</SearchLabel>
        <TextField
          onChange={setSearchWord}
          value={searchWord}
          maxWidth="200px"
        />
        <Divider />
        <AllButton onClick={getAllWorks}>全件表示</AllButton>
        <Divider />
        {allTags.map(tag => (
          <Tag tag={tag} key={tag} />
        ))}
      </Controller>
      <Container>
        {data.map(({ productImage, creator, tags }) => (
          <WorkCard
            productImage={productImage}
            creator={creator}
            tags={tags}
            key={productImage}
          />
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

const Controller = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchLabel = styled.div`
  width: 60px;
  margin-right: -15px;
`;

const Divider = styled.div`
  width: 1px;
  height: 20px;
  margin: 0 20px;
  background: ${({ theme }) => theme.color.divider};
`;

const AllButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 0.25em 0;
  text-decoration: none;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 1px;
    top: 100%;
    left: 0;
    background: ${({ theme }) => theme.color.text.primary};
  }
`;
