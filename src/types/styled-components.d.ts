import { Theme } from "@/theme/theme";

declare module "styled-components" {
  // tslint:disable-next-line:no-empty-interface
  interface DefaultTheme extends Theme {}
}
