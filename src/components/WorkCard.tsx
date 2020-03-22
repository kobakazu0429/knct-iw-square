import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  coverUrl: string;
  creatorId: number;
  tags: string[];
}

export const WorkCard: FC<Props> = ({ coverUrl, creatorId, tags }) => {
  return (
    <Wrapper>
      <Img src={coverUrl}></Img>
      <Content>
        <CreatorName>
          {["はた なおき", "元木"][Math.round(Math.random() * 10) % 2]}
        </CreatorName>
        <br />
        {tags.slice(0, Math.round(Math.random() * 10) % tags.length).map(v => (
          <Tag>#{v}</Tag>
        ))}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 30px;
  width: 200px;
  /* min-height: 300px; */
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
  display: inline-block;
  vertical-align: top;
`;

const Img = styled.img`
  border-radius: 5px 5px 0 0;
  max-width: 100%;
  height: auto;
`;

const Content = styled.div`
  padding: 20px;
  height: 120px;
`;

// .card-title {
//   font-size: 20px;
//   margin-bottom: 20px;
//   text-align: center;
//   color: #333;
// }
// .card-text {
//   color: #777;
//   font-size: 14px;
//   line-height: 1.5;
// }
// .card-link {
//   text-align: center;
//   border-top: 1px solid #eee;
//   padding: 20px;
// }
// .card-link a {
//   text-decoration: none;
//   color: #0bd;
//   margin: 0 10px;
// }
// .card-link a:hover {
//   color: #0090aa;
// }

const Tag = styled.span`
  color: rgb(61, 118, 153);
  margin: 0 5px;
  word-break: break-word;
`;

const CreatorName = styled.span``;
