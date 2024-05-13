import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeScreen                             from "./screens/HomeScreen";
import ProductScreen                          from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Link to="/">Amazon</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" exact element={<HomeScreen />} />
            <Route path="/product/:slug" exact element={<ProductScreen />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
