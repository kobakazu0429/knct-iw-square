import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  tag: string;
}

export const Tag: FC<Props> = ({ tag }) => {
  return <StyledTag to={`/works?tag=${tag}`}>{tag}</StyledTag>;
};

const StyledTag = styled(Link)`
  color: rgb(61, 118, 153);
  margin: 0 5px;
  word-break: break-word;

  &::before {
    content: "#";
  }
`;
