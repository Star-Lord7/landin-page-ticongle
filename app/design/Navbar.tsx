// Componente de la barra de navegación (navbar)
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container justify-around">
                <div className="navbar-col w-1/3 !justify-start">
                    {/* Logo */}
                    <span className="text-2xl font-bold uppercase">
                        TicongleHub
                    </span>
                </div>

                <div className="navbar-col w-1/3">
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
                
            </div>
        </nav>
    );
};

export default Navbar;