// import { useEffect, useMemo, useState } from "react";
import { BrowserRouter ,HashRouter } from "react-router-dom";
import Layout from "@/layout";
import appConfig from "@/config/index";
const { routerMode } = appConfig

console.log(import.meta.env)
const AppRouter = () => {

    if (routerMode) {
      return (
        <BrowserRouter >
        <Layout />
      </BrowserRouter>
      )
    }
    
    return (
      <HashRouter>
        <Layout />
      </HashRouter>
    );
    
}

export default AppRouter;