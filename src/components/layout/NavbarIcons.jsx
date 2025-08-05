import React from "react";
import { FaHome, FaUser, FaBriefcase, FaGraduationCap, FaCogs, FaCode, FaProjectDiagram, FaComments, FaEnvelope, FaTimes, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const menuItems = [
  { label: "INICIO", to: "hero" },
  { label: "SOBRE MÍ", to: "about" },
  { label: "PROYECTOS", to: "portfolio" },
  { label: "GITHUB", to: "github", external: true, url: "https://github.com/tuusuario" }
];

const icons = [
  { icon: <FaHome />, to: "hero", label: "Inicio" },
  { icon: <FaUser />, to: "about", label: "Sobre mí" },
  { icon: <FaBriefcase />, to: "experience", label: "Experiencia" },
  { icon: <FaGraduationCap />, to: "education", label: "Educación" },
  { icon: <FaCogs />, to: "services", label: "Servicios" },
  { icon: <FaCode />, to: "skills", label: "Habilidades" },
  { icon: <FaProjectDiagram />, to: "portfolio", label: "Portafolio" },
  /* { icon: <FaComments />, to: "testimonials", label: "Testimonios" }, */
  { icon: <FaEnvelope />, to: "contact", label: "Contacto" },
];

export default function NavbarIcons({ menuOpen, setMenuOpen }) {
  return (
    <>
      {/* Menú flotante central */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#232323]/95 flex flex-col items-center justify-center z-50 transition">
          <button
            className="absolute top-12 right-16 w-14 h-14 rounded-full border border-[#333] flex items-center justify-center hover:bg-[#EAFF6A] hover:text-black transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            <FaTimes className="text-3xl text-[#EAFF6A]" />
          </button>
          <ul className="space-y-8">
            {menuItems.map(({ label, to, external, url }) =>
              external ? (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white text-4xl font-normal tracking-wide hover:text-[#EAFF6A] transition-all duration-200 text-center"
                  >
                    {label}
                  </a>
                </li>
              ) : (
                <li key={label}>
                  <Link
                    to={to}
                    smooth={true}
                    duration={500}
                    className="block text-white text-4xl font-normal tracking-wide hover:text-[#EAFF6A] transition-all duration-200 text-center"
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}

      {/* Barra vertical de iconos SOLO desktop */}
      <nav className="
        fixed top-1/2 right-8 
        -translate-y-1/2 
        flex flex-col gap-3 z-40 
        hidden md:flex 
        bg-[#181818] 
        border border-[#3A3B3C] 
        rounded-2xl
        px-2 py-4
        shadow-xl
        ">
  {icons.map(({ icon, to, label }) => (
    <Link
      key={to}
      to={to}
      smooth={true}
      duration={500}
      spy={true}
      offset={-50}
      className="group relative cursor-pointer"
      activeClass="active-navbar"
    >
      {/* Tooltip alineado justo al centro vertical del icono */}
      <div className="
        absolute right-full top-1/2
        -translate-y-1/2
        mr-3 px-3 py-1
        bg-[#171717]
        text-white
        text-base
        rounded-md
        opacity-0
        pointer-events-none
        group-hover:opacity-100
        group-hover:pointer-events-auto
        transition-opacity
        duration-200
        whitespace-nowrap
        shadow-lg
        z-50
      ">
        {label}
        {/* Flecha */}
        <span className="absolute left-full top-1/2 -translate-y-1/2 w-2 h-2 bg-[#171717] rotate-45"></span>
      </div>

      <div className={`
        flex items-center justify-center 
        w-9 h-9 
        rounded-xl 
        text-gray-400 
        group-hover:bg-[#EAFF6A] 
        group-hover:text-black 
        transition-all duration-200
        shadow
        group-[.active-navbar]:bg-[#EAFF6A]
        group-[.active-navbar]:text-black
      `}>
        <span className="text-lg">{icon}</span>
      </div>
    </Link>
  ))}
</nav>


    </>
  );
}
