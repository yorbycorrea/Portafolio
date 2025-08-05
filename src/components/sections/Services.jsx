import React from "react";

const services = [
  {
    icon: "💻", // emoji tipo portafolio
    title: "Desarollo Backend",
    desc: "Como desarrollador backend, me especializo en crear y mantener APIs robustas y seguras, integrando bases de datos y automatizando procesos. Mi enfoque es asegurar que cada solución sea eficiente, escalable y lista para producción.",
    /* more: "10+ Proyectos" */
  },
  {
    icon: "🎨", // puedes cambiar por otro emoji de tu preferencia
    title: "Adaptabilidad Frontend",
    desc: "Tengo la capacidad de integrarme en el desarrollo frontend, utilizando herramientas modernas como React para construir interfaces limpias que conectan perfectamente con el backend, asegurando una experiencia de usuario coherente y funcional.",
    /* more: "100+ Proyectos" */
  },
  {
    icon: "🤝",
    title: "Trabajo en equipo y Scrum Master",
    desc: "He trabajado en equipos multidisciplinarios bajo metodologías ágiles (Scrum), colaborando como Scrum Master y desarrollador. Disfruto coordinar esfuerzos, comunicarme efectivamente y asegurar que cada proyecto avance hacia sus objetivos.",
   /*  more: "5+ Proyectos" */
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="px-2 py-12 pt-0 md:px-16 max-w-6xl md:pt-0 mx-auto"
    >
         {/* Servicios */}
        <div className="mb-4 flex justify-center md:justify-start">
        <div
          data-aos="fade-up"
          className="inline-flex items-center gap-2 border border-[#3A3B3C] rounded-xl px-6 py-2 text-base text-white font-ubuntu bg-transparent select-none"
        >
          <span className="text-lg">🛎️</span>
          Servicios
        </div>
      </div>
        
        
      <h2 className="text-4xl md:text-5xl font-bold mb-8">
        <span className="text-white">Mis</span> <span className="text-[#EAFF6A]">especialidades</span>
      </h2>
      <div className="space-y-8">
        {services.map((s, i) => (
          <div
            key={s.title}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="
              bg-[#191919]
              border border-[#C3C3C3]/20
              rounded-2xl
              px-8 py-8
              flex flex-col md:flex-row items-start
              gap-5 md:gap-8
              shadow
              transition-all
              hover:border-[#EAFF6A]
            "
          >
            {/* Icono grande */}
            <span className="text-4xl md:text-5xl bg-[#232323] rounded-xl p-4 text-[#EAFF6A] flex-shrink-0">
              {s.icon}
            </span>
            {/* Contenido */}
            <div>
              <h3 className="text-2xl font-bold mb-1">{s.title}</h3>
              <p className="text-gray-300 mb-2">{s.desc}</p>
              <div className="mt-2 text-base text-white font-medium">
                {s.more}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
