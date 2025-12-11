// Componente de la barra de navegación (navbar)
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <span className="navbar-item">
                    <a className="navbar-link" href="/">
                        Inicio
                    </a>
                </span>
                <span className="navbar-item">
                    <a className="navbar-link" href="/servicios">
                        Servicios
                    </a>
                </span>
                <span className="navbar-item">
                    <a className="navbar-link" href="/contacto">
                        Contacto
                    </a>
                </span>
                <span className="navbar-item">
                    <a className="navbar-link" href="/nosotros">
                        Nosotros
                    </a>
                </span>
            </div>
        </nav>
    );
};

export default Navbar;