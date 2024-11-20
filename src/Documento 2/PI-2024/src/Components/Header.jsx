import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src="/imagens/logo.jpeg" alt="Logo" className="logo" /> {/* Caminho para a pasta public */}
            </div>
            <nav>
                <ul>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/videopage">Vídeos</Link></li>
                    <li><Link to="/Envioform">Dúvidas</Link></li>
                </ul>
            </nav>
            <Link to="/Login" className="login-button">Login</Link>
        </header>
    );
}

