
import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return (
    <div>
      <h1>Perfil do Usuário</h1>
      <p>Você está visualizando o usuário de ID: {id}</p>
      <p>Esta página utiliza uma rota dinâmica do React Router.</p>
    </div>
  );
}

export default User;
