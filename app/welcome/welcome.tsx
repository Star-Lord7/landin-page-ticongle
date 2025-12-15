import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Header from '~/components/main/Header';
import Nabvar from '../design/Navbar';
import ServicesSection from '~/content/home/ServicesSection';
import ContactSection from '~/content/home/ContactSection';
import Footer from '~/design/Footer';
import Sidebar from '~/design/Sidebar';

export function Welcome() {
  const initPage = () => {
    AOS.init();
  }

  useEffect(() => {
    initPage();
  }, []);

  return (
    <>
      {/**NavBar */}
      {/* <Nabvar/> */}
      <Sidebar/>

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