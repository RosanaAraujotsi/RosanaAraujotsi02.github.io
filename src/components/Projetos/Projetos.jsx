import "./Projetos.css";
import projetos from "../../data/Projetos";

function Projetos() {
  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>

      <div className="projetos-container">
        {projetos.map((proj, index) => {
          return (
            <article key={index} className="card-projetos">
              <h3>{proj.titulo}</h3>
              <img src={proj.imagem} alt={`Imagem do ${proj.titulo}`} />
              <p>{proj.descricao}</p>

              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                Ver no GitHub
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projetos;