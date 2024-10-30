import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <header>
                <div className="logo">Nossa plataforma</div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobre">Sobre</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/videopage">Videos</Link></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}
