import React from "react";
import "./Contato.css";

function Contato() {
  return (
    <section id="contato">
      <h2>Contatos</h2>

      <div className="contato">
        <p>
          <img src="/img/logoemail.png" alt="Email" />
          <a href="mailto:rosanaed150@gmail.com">
            rosanaed150@gmail.com
          </a>
        </p>

        <p>
          <img src="/img/logozap.png" alt="WhatsApp" />
          <a
            href="https://wa.me/5586999847880"
            target="_blank"
            rel="noopener noreferrer"
          >
            (86) 99984-7880
          </a>
        </p>

        <p>
          <img src="/img/GitHub-Logo.png" alt="GitHub" />
          <a
            href="https://github.com/RosanaAraujotsi"
            target="_blank"
            rel="noopener noreferrer"
          >
            RosanaAraujotsi
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contato;