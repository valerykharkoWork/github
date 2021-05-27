import Main from "./pages/MainPage";
import { USER_ROUTE } from "./utils/const";

export const publicRoutes = [
  {
    path: USER_ROUTE,
    Component: Main,
  },
];
