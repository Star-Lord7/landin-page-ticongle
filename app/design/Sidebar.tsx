import { useRef } from "react"; //Hace referencia a elementos del DOM
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {

    //Referencia de lista de opciones
    const sidebarListRef = useRef<any>(null);
    const buttonRef = useRef<any>(null);

    const handleSidebar = () => {
        let isHidden = sidebarListRef.current.classList.contains("hidden");
        if(isHidden === true){
            //Mostramos el menú
            sidebarListRef.current.classList.remove("hidden");
            buttonRef.current.innerContent = <FontAwesomeIcon icon={faXmark} />;

            return; //Detenemos la ejecucion
        }

        //Ocultamos el menú
        sidebarListRef.current.classList.add("hidden");
        buttonRef.current.innerContent = <FontAwesomeIcon icon={faXmark} />;
        return;
    }

    return(
        <>
            <nav className="navbar fixed w-full top-0 left-0 z-50">
                <div className="navbar-container justify-between px-20">
                    <div>
                        <span className="text-2xl font-bold uppercase">
                            TicongleHub
                        </span>
                    </div>

                    <div>
                        <button 
                            ref={buttonRef}
                            className="text-3xl font-semibold cursor-pointer"
                            onClick={handleSidebar}
                            // onMouseOver={handleSidebar}
                        >
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </div>
                    
                </div>
            </nav>

            {/* Lista de opciones desplegable */}
            <div ref={sidebarListRef} className="hidden">
                <div className="sidebar">
                    <div className="sidebar-content">
                        <div className="sidebar-item">
                            <a href="/">
                                Inicio
                            </a>
                        </div>
                        <div className="sidebar-item">
                            <a href="/servicios">
                                Servicios
                            </a>
                        </div>
                        <div className="sidebar-item">
                            <a href="/contacto">
                                Contacto
                            </a>
                        </div>
                        <div className="sidebar-item">
                            <a href="/nosotros">
                                Nosotros
                            </a>
                        </div>
                        <div className="sidebar-item">
                            <a href="/blog">
                                Blog
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;