const Footer = () => {
    return (
        <footer>
        <div className="flex flex-wrap bg-blue-900 text-white p-8">
          <div className='w-1/3'>
            <h2 className="text-2xl font-bold mb-4">Mi Empresa</h2>
          </div>
          <div className="w-1/3 p-4 font-bold">
            <ul>
              <li>
                <a href="">Inicio</a>
              </li>
              <li>
                <a href="">Servicios</a>
              </li>
              <li>
                <a href="">Contactos</a>
              </li>
              <li>
                <a href="">Nosotros</a>
              </li>
            </ul>
          </div>
          <div className="w-1/3 p-4">
            <ul>
              <li>
                <a className='' href="">Facebook</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
            </ul>
          </div>
          <p className='w-full text-center mt-4'>Copyright © 2025 Mi Empresa. Todos los derechos reservados.</p>
        </div>
      </footer>
    )
}

export default Footer;