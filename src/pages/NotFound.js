
import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>Erro 404</h1>
      <h2>Página não encontrada!</h2>

      <p>
        O endereço que você tentou acessar não existe.
      </p>

      <Link to="/">Voltar para a página inicial</Link>
    </div>
  );
}

export default NotFound;
