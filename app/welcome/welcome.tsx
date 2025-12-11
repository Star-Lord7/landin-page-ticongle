import Header from '~/components/main/Header';
import Nabvar from '../design/Navbar';
import ServicesSection from '~/content/home/ServicesSection';
import ContactSection from '~/content/home/ContactSection';
import Footer from '~/design/Footer';

export function Welcome() {
  return (
    <>
      {/**NavBar */}
      <Nabvar/>

      {/**Header */}
      <Header/>

      {/**Main Contenido Principal */}
      <main>
        {/* Seccion de Servicio */}
        <ServicesSection limit={3}/>

        {/**Seccion de Contactos */}
        <ContactSection/>
      </main>

      {/**Footer */}
      <Footer/>
    </>
  );
}