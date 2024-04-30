import AppRouter from "@/router/appRouter";
import store from "@/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
