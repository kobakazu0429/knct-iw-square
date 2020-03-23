import React, { FC } from "react";
import algoliasearch from "algoliasearch/lite";

import { ThemeProvider } from "@/theme/ThemeProvider";
import { GlobalStyle } from "@/theme/GlobalStyle";
import { createRouter } from "@/routes";
import { TopPage } from "@/pages/TopPage";
import { WorksPage } from "@/pages/WorksPage";
import { CreatorsPage } from "@/pages/CreatorsPage";
import { AlgoliaContextProvider } from "@/contexts/AlgoliaContext";

export const routes = [
  {
    exact: true,
    path: "/",
    component: TopPage,
    name: "Top"
  },
  {
    exact: true,
    path: "/works",
    component: WorksPage,
    name: "Works"
  },
  {
    exact: true,
    path: "/creators",
    component: CreatorsPage,
    name: "Creators"
  }
];

const Router = createRouter({ routes });

export const App: FC = () => {
  const client = algoliasearch(
    process.env.AlgoliaApplicationID || "",
    process.env.AlgoliaSearchOnlyAPIKey || ""
  );

  const worksIndex = client.initIndex("works");

  return (
    <ThemeProvider themeName="default">
      <GlobalStyle />
      <AlgoliaContextProvider value={{ worksIndex }}>
        {Router}
      </AlgoliaContextProvider>
    </ThemeProvider>
  );
};
