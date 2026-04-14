import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Sobre from "./components/Sobre/Sobre";
import Projetos from "./components/Projetos/Projetos";
import Contato from "./components/Contato/Contato";
import Footer from "./components/Footer/Footer";

function App() {
  const [dark, setDark] = useState(false);

  function toggleTema() {
    setDark(!dark);
  }

  // Detelhe
  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [dark]);

  return (
    <>
      <Header toggleTema={toggleTema} dark={dark} />
      <Sobre />
      <Projetos />
      <Contato />
      <Footer />
    </>
  );
}

export default App;