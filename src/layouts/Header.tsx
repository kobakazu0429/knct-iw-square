import React, { FC, useState, useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DefaultDesign, MobileDesign } from "@/components/utils/Responsive";

import { BarsIcon } from "@/icons/Bars";
import logo from "@/assets/images/logo.jpg";

import { routes } from "@/components/App";

const Links: FC = () => (
  <>
    {routes.map(({ name, path }) => (
      <LinkWrapper key={`nav${path}`}>
        <PageLink to={path}>{name}</PageLink>
      </LinkWrapper>
    ))}
  </>
);

const Mobile: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = useCallback(() => setIsOpen(true), [isOpen]);
  const closeMenu = useCallback(() => setIsOpen(false), [isOpen]);
  return (
    <>
      <MobileNav onClick={openMenu}>
        <StyledMenu>
          <BarsIcon />
        </StyledMenu>
      </MobileNav>
      {isOpen && <FullScreenMenu closeMenu={closeMenu} />}
    </>
  );
};

const FullScreenMenu: FC<{ closeMenu: () => void }> = ({ closeMenu }) => {
  return (
    <FullScreen onClick={closeMenu}>
      <div>
        <Links />
      </div>
    </FullScreen>
  );
};

export const Header = () => (
  <HeaderStyle>
    <LogoArea to="/">
      <Logo src={logo} />
      <BrandText>呉高専IWスクエア</BrandText>
    </LogoArea>
    <DefaultDesign>
      <PCNav>
        <Links />
      </PCNav>
    </DefaultDesign>
    <MobileDesign>
      <Mobile />
    </MobileDesign>
  </HeaderStyle>
);

const height = `60px`;

const HeaderStyle = styled.header`
  width: 100%;
  height: ${height};
  line-height: ${height};
  vertical-align: middle;
  display: flex;
`;

const LogoArea = styled(Link)`
  display: flex;
  width: auto;
  margin-right: auto;
`;

const Logo = styled.img`
  height: ${height};
  width: ${height};
`;

const BrandText = styled.div`
  color: ${({ theme }) => theme.color.brand};
  font-size: 1.5rem;
  text-align: left;
  vertical-align: middle;
  margin-left: 15px;
`;

const PCNav = styled.nav`
  padding: 0 30px;
  display: flex;
  font-size: 18px;
`;

const LinkWrapper = styled.div`
  padding: 0 10px;
`;

const PageLink = styled(Link)`
  &:visited {
    color: ${({ theme }) => theme.color.brand};
  }
  &:hover {
    color: #f38d00;
  }
`;

const MobileNav = styled.nav`
  width: ${height};
`;

const StyledMenu = styled.div`
  height: ${height};
  width: ${height};
  line-height: ${height};
  font-size: 30px;
`;

const FullScreen = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  position: fixed;
  z-index: 10000;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
`;
