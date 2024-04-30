import { Outlet } from "react-router-dom";
import Setting from "./setting";
const Main = () => {
  return(
    <div className="main">
        <Outlet />
        <Setting />
    </div>
  )
}

export default Main;