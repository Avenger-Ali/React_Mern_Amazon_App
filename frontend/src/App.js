import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen                       from "./screens/HomeScreen";
import ProductScreen                    from "./screens/ProductScreen";
import Navbar                           from "react-bootstrap/Navbar";
import Container                        from "react-bootstrap/Container";
import { LinkContainer }                from "react-router-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Amazon</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/" exact element={<HomeScreen />} />
              <Route path="/product/:slug" exact element={<ProductScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
