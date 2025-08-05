import { FaGithub, FaExternalLinkAlt, FaThLarge } from "react-icons/fa";
import AOS from "aos";
import { useEffect } from "react";
import paginaWebImg from "../../assets/img/pagina_web.jpg";
import listatareas from "../../assets/img/Lista_Tareas.jpg";
import porfolio from "../../assets/img/portafolio.jpg";


const projects = [
  {
    title: "Lista de Tareas",
    img: listatareas,
    desc: "Aplicación web simple para gestionar tareas diarias. Permite agregar, marcar como completadas y eliminar tareas de forma intuitiva, todo desde una interfaz minimalista y responsiva.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/yorbycorrea/Lista-de-Tareas",
    demo: "https://yorbycorrea.github.io/Lista-de-Tareas/",
  },
  {
    title: "Pagina Web Corporativa",
    img: paginaWebImg,
    desc: "Sitio web informativo para Agro Perú, diseñado para destacar los servicios, productos y misión de la empresa",
    tech: ["HTML", "CSS"],
    repo: "https://github.com/yorbycorrea/Pagina-Web-Agro-Peru",
    demo: "https://yorbycorrea.github.io/Pagina-Web-Agro-Peru/index.html",
  },
  {
    title: "Landing Page Portafolio",
    img: porfolio,
    desc: "Landing moderna hecha en React y Tailwind, adaptada a móvil.",
    tech: ["React", "Tailwind"],
    repo: "https://github.com/tuusuario/landing",
    demo: "https://landing-demo.vercel.app",
  },
  // ... más proyectos
];

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 80 });
  }, []);

  return (
    <section id="portfolio" className="py-12 px-4 md:px-20">
          {/* Encabezado estilo breadcrumb */}
    <div className="inline-flex items-center gap-2 border border-[#3A3B3C] rounded-xl px-6 py-2 text-base text-white font-ubuntu bg-transparent select-none mb-8">
      <span className="text-lg"><FaThLarge /></span>
      PORTAFOLIO
    </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
        Últimos <span className="text-[#EAFF6A]">proyectos</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((p, i) => (
          <div
            key={i}
            data-aos="fade-up"
            className="group relative bg-[#232323] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-5 flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <div className="flex gap-2 flex-wrap">
                {p.tech.map((t) => (
                  <span key={t} className="bg-[#EAFF6A]/20 text-[#EAFF6A] px-2 py-0.5 rounded-full text-xs">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 text-sm my-2">{p.desc}</p>
              <div className="flex gap-2 mt-2">
                <a href={p.repo} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-lg border border-[#EAFF6A] text-[#EAFF6A] hover:bg-[#EAFF6A] hover:text-black transition">
                  <FaGithub /> Código
                </a>
                <a href={p.demo} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-lg border border-[#EAFF6A] text-[#EAFF6A] hover:bg-[#EAFF6A] hover:text-black transition">
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
