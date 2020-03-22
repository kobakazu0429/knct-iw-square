import React, { FC } from "react";
import { useMediaQuery } from "react-responsive";

export const DefaultDesign: FC = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? <>{children}</> : null;
};

export const MobileDesign: FC = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? <>{children}</> : null;
};
