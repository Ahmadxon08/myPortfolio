import { Route, Routes } from "react-router-dom";
import Hero from "./page/Hero";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./scss/Main.scss";
import { useEffect, useState } from "react";
// import About from "./page/about/About";
// import Skills from "./page/skills/Skills";
const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDark) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [isDark]);
  const handleClick = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };
  return (
    <div>
      <Header handleClick={handleClick} />
      <Routes>
        <Route path="/" element={<Hero isDark={isDark} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
