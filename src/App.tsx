import { createContext, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import Navbar from "./components/navbar/navbar";
import "./App.css";

export const ThemeContext = createContext<any>(null);
export const useThemeContext = () => useContext(ThemeContext);
function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    setTheme((curr: string) => (curr === "light" ? "dark" : "light"));
  };
  const ThemeInLocalStorage = () => {
    localStorage.setItem("theme", theme);
  };
  useEffect(() => {
    ThemeInLocalStorage();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <>
        <div id={theme}>
          <Navbar /> {/* Include the Navbar here */}
          <Outlet /> {/* Render child routes */}
          <Footer />
        </div>
      </>
    </ThemeContext.Provider>
  );
}

export default App;
