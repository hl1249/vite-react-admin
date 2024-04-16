import AppRouter from "@/router/appRouter";
import store from "@/store";
import { Provider } from "react-redux";
import { createContext, useContext } from "react";

export const nameContext = createContext("默认值1");
function App() {
  return (
    <>
      <nameContext.Consumer>
        {(value) => (
          <div>
            <h1>Default value from nameContext in App: {value}</h1>
          </div>
        )}
      </nameContext.Consumer>
      <nameContext.Provider value="默认值2">
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </nameContext.Provider>
    </>
  );
}

export default App;
