import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import InfoPage from "./components/InfoPage";
import { useState } from "react";

function App() {
  const [typeClicked, setSetTypeClicked] = useState("");
  const [typeColor, setTypeColor] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <HomePage
                setSetTypeClicked={setSetTypeClicked}
                setTypeColor={setTypeColor}
              ></HomePage>
            </div>
          }
        />
        <Route
          path="/pokiInfo"
          element={
            <div className="App">
              <InfoPage typeClicked={typeClicked} typeColor={typeColor} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
