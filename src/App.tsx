import { BrowserRouter } from "react-router-dom";
import { GlobalCss } from "./styles";

import Rotas from "./routes";
import { Provider } from "react-redux";
import { store } from "./store";
import Cart from "./Cart";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss></GlobalCss>
        <Rotas />
        <Cart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
