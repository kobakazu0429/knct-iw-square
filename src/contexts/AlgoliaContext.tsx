import { createContext } from "react";
import { SearchIndex } from "algoliasearch/lite";

export interface Context {
  worksIndex: SearchIndex;
  creatorsIndex: SearchIndex;
}

export const AlgoliaContext = createContext<Context>({} as Context);
export const AlgoliaContextProvider = AlgoliaContext.Provider;
