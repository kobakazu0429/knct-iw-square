import React, { FC } from "react";
import { ThemeProvider } from "@/theme/ThemeProvider";
import { GlobalStyle } from "@/theme/GlobalStyle";
import { createRouter } from "@/routes";
import { TopPage } from "@/pages/TopPage";

export const routes = [
  {
    exact: true,
    path: "/",
    component: TopPage,
    name: "ホーム"
  },
  {
    exact: true,
    path: "/works",
    component: TopPage,
    name: "作品集"
  },
  {
    exact: true,
    path: "/creators",
    component: TopPage,
    name: "クリエイター"
  }
];

const Router = createRouter({ routes });

export const App: FC = () => {
  return (
    <ThemeProvider themeName="default">
      <GlobalStyle />
      {Router}
    </ThemeProvider>
  );
};
