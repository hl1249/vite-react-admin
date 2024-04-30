import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"

// const Home = lazy(() => import("@/pages/Home.tsx"))
import Home from "@/pages/home/index"
import Err from "@/pages/err/index"
import LayoutContainer from '@/layout/index'
const defaultRouter  = createBrowserRouter([
  {
    path:"/",
    element: <LayoutContainer/>,
    children:[
      {
        path:"/home",
        element: <Home/>,
      },
      {
        path:"*",
        element: <Err type="404" subTitle="对不起，您访问的页面不存在." status="404" />
      }
    ]
  }
])

export default defaultRouter 
