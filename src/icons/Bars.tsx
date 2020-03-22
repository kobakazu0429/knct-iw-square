import React from "react";
import styled from "styled-components";

export const BarsIcon = () => (
  <StyledIcon>
    <i className="fas fa-bars fa-fw" />
  </StyledIcon>
);

const StyledIcon = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  vertical-align: middle;
  color: ${({ theme }) => theme.color.brand};
`;
