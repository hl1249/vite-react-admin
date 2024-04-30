
import { BrowserRouter, HashRouter } from "react-router-dom";
import {
  RouterProvider,
} from "react-router-dom";

import Layout from "@/layout";
import appConfig from "@/config/index";

import defaultRouter from './index'
const { routerMode } = appConfig;

console.log(import.meta.env);
const AppRouter = () => {
  if (routerMode) {
    return (
      <RouterProvider router={defaultRouter}>
      </RouterProvider>
    );
  }

  return (
    <HashRouter>
      w shi hash
      <Layout />
    </HashRouter>
  );
};

export default AppRouter;
