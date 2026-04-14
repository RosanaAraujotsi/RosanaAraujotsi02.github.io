import "./Header.css";

export default function Header({ toggleTema, dark }) {
  return (
    <header>
      <h1>Rosana Araújo</h1>

      <div className="container nav-container">
        <nav>
          <ul className="menu">
            <li><a href="#">Início</a></li>
            <li><a href="#sobre">Sobre Mim</a></li>
            <li><a href="#projetos">Meus Projetos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>

        <button id="btn-tema" type="button" onClick={toggleTema}>
          {dark ? "☀️ Tema Claro" : "🌙 Tema Escuro"}
        </button>
      </div>
    </header>
  );
}