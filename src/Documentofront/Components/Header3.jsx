import { Link } from 'react-router-dom';
import logo from '../img/logo.jpeg'

export default function Header() {
    return (
        <div>
            <header>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
                <div className="logo"></div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/VideoPage">Videos</Link></li>
                        <li><Link to="/Envioform">Duvidas</Link></li>
                    </ul>
                </nav>
                <Link to="/Login" className="login-button">Login</Link> 
            </header>
        </div>
    );
}
