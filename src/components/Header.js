
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h2>Minha Aplicação React</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/user/1">Usuário</Link>
      </nav>
    </header>
  );
}

export default Header;
