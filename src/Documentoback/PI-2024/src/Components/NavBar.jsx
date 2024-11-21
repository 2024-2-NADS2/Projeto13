import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/cadastro">Cadastro</Link>
                </li>
                <li class>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/videos">Vídeos</Link>
                </li>
                <li>
                    <Link to="/conteudos">Conteúdos</Link>
                </li>
                <li>
                    <Link to="/comentarios">Comentários</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

