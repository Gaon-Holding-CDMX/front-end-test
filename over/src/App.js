import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Roles from "./components/Roles";
import Batman from "./components/Batman";
import Superman from "./components/Superman";
import Flash from "./components/Flash";
import Header from "./components/Header";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("heroe");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "heroe" ? "villain" : "heroe"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/batman" element={<Batman />} />
            <Route path="/superman" element={<Superman />} />
            <Route path="/flash" element={<Flash />} />
          </Routes>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
