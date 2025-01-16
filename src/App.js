import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import PokemonInfoPage from "./components/PokemonInfoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <h1 style={{ textAlign: "center" }}>Choose Pokemon type to View Pokemons</h1>
              <HomePage />
            </div>
          }
        />
        <Route
          path={`/:type`}
          element={
            <div className="App">
              <PokemonInfoPage />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
