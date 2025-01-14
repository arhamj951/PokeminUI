import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import InfoPage from "./components/InfoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <HomePage></HomePage>
            </div>
          }
        />
        <Route
          path="/pokiInfo"
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
