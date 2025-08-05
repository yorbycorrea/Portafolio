import AOS from "aos";
import { useEffect } from "react";
import Layout from "./components/layout/Layout";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Timeline from "./components/sections/Timeline";
import Services from "./components/sections/Services";
import Skills from "./components/sections/Skills";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";
// NO importes Sidebar ni NavbarIcons aquí

export default function App() {
    useEffect(() => {
    AOS.init({
      duration: 800,  // Duración de animación (ms)
      once: true,     // Solo animar una vez
      easing: 'ease-out-cubic', // Efecto suave
      offset: 50,     // Cuánto antes de que el elemento esté visible se anima
    });
  }, []);



  return (
    <Layout>
      
          <Hero />
          <About />
          <Timeline />
          <Services />
          <Skills />
          <Portfolio />
          <Contact />
        
    </Layout>
  );
}
