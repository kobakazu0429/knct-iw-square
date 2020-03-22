import React, { FC } from "react";
import styled from "styled-components";
import { Header } from "@/layouts/Header";

import { Creator } from "@/components/Creator";
import creators from "@/assets/images/creators.jpg";

const names = [
  "東　弘美",
  "東　紀子",
  "川上　博史",
  "川上　あかね",
  "音泉　幹夫",
  "音泉　いく子",
  "広浦　秀利",
  "広浦　和佳美",
  "森田　起揮",
  "森田　春美",
  "片岡　晃一",
  "片岡　晃子",
  "大池　義人",
  "大池　牧子",
  "柏野　崇",
  "柏野　寿枝",
  "朝雄　元美",
  "朝雄　聡子",
  "稲垣　幸敏",
  "稲垣　美保子",
  "坂井　雅弘",
  "坂井　はつみ",
  "西村　太志",
  "西村　佑佳子",
  "西村　徳輝",
  "西村　理恵子",
  "青山　安幸",
  "青山　彩子",
  "生駒　将浩",
  "生駒　真弓",
  "野瀬　史朗"
];
const skills = ["Fusion360", "3Dプリンター", "レーザーカッター", "基盤加工機"];

const contents = [...Array(10).keys()].map(i => ({
  avatorUrl: `https://picsum.photos/200?random=${i}`,
  name: names[i],
  skills
}));

export const CreatorsPage: FC = () => {
  return (
    <>
      <Header />
      <HeroArea>
        <h1>Creators</h1>
      </HeroArea>
      <Container>
        {contents.map(v => (
          <Creator {...v} />
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
