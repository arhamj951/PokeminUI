import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import InfoPage from "./components/InfoPage";
import { useState } from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <h1 style={{ textAlign: "center" }}>
                Choose Pokemon type to View Pokemons
              </h1>
              <HomePage></HomePage>
            </div>
          }
        />
        <Route
          path={`/:type`}
          element={
            <div className="App">
              <InfoPage />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
