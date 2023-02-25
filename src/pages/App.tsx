import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import About from "../domain/About";
import Hand from "../domain/Hand";
import Home from "../domain/Home";
import Menu from "../domain/Menu";
import "./App.css";

const AppRoute = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/fortune"
            element={
              <Hand
                text={[
                  "Focus on your question, then please draw your cards.",
                  "Draw your cards",
                ]}
                cards={4}
                title="JSC Tarot Fortune Teller"
              />
            }
          />
          <Route
            path="/question"
            element={
              <Hand
                text={[
                  "Focus on your questions then please draw your card.",
                  "Draw your card",
                ]}
                cards={1}
                title="JSC Tarot Question"
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

const App = () => {
  return (
    <>
      <header>
        <h1>Welcome to Sawan</h1>
        <Menu />
      </header>
      <main>
        <Outlet />
      </main>
      <footer role="complementary">JSC Tarot &copy; 2023 IndyTheDog</footer>
    </>
  );
};

export default AppRoute;
