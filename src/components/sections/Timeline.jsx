import React from "react";

// Ejemplo de datos, puedes modificar a tu gusto
const timelineData = [
  {
    type: "CERTIFICACIONES",
    items: [
      { year: "2022", title: "Curso de Introducción al Pensamiento Computacional con Python", place: "Platzi" },
      { year: "2022", title: "Curso Básico de Python", place: "Platzi" }
    ]
  },
  {
    type: "EXPERIENCIA",
    items: [
      { year: "2022", title: "Desarrollador de Software", place: "Devoluzion" },
      { year: "2023", title: "Practicante Desarrollador", place: "Agro-Perú" },
      { year: "2024", title: "Practicante QA", place: "Identi" },
      /* { year: "2018 - 2021", title: "Jefe de soporte técnico", place: "Firecom Soluciones Tecnológicas" } */
    ]
  },
  {
    type: "EDUCACIÓN",
    items: [
      { year: "2021 - 2024", title: "Ingenieria de Software con inteligencia artificial", place: "SENATI" },
    { year: "2015 - 2017", title: "Tecnología de la Producción (Inconcluso IV ciclo)", place: "TECSUP" } 
    ]
  }
];

export default function Timeline() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 pt-0 md:px-16 md:pt-0 py-8">
      {/* Presentación */}
      <div className="mb-8 flex justify-center md:justify-start">
        <div data-aos="fade-up" className="inline-flex items-center gap-2 border border-[#3A3B3C] rounded-xl px-6 py-2 text-base text-white font-ubuntu bg-transparent select-none">
          <span className="text-lg">📝</span>
          CURRICULUM
        </div>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Educación, experiencia <span className="text-[#EAFF6A]">& Certificaciones</span>
      </h2>
      <div className="relative border-l-2 border-[#EAFF6A] ml-6">

        {/* CERTIFICACIONES */}
        <div id="experience" className="scroll-mt-32">
          <h3 className="text-lg font-bold text-[#EAFF6A] mb-2 ml-6">CERTIFICACIONES</h3>
          {timelineData[0].items.map((item, i) => (
            <div className="flex items-start mb-10 relative group" key={item.title + item.year + i} data-aos="fade-up" data-aos-delay={i * 100}>
              <span className="absolute -left-[17px] top-2 w-2.5 h-2.5 bg-[#181818] border-2 border-[#EAFF6A] rounded-full"></span>
              <div className="ml-4">
                <span className="block font-semibold text-gray-100 text-lg">{item.year}</span>
                <span className="block font-medium text-xl mt-1">{item.title}</span>
                <span className="block text-sm text-gray-400 mt-0.5">{item.place}</span>
              </div>
            </div>
          ))}
        </div>

        {/* EXPERIENCIA */}
        <div id="experience" className="scroll-mt-32">
          <h3 className="text-lg font-bold text-[#EAFF6A] mb-2 ml-6">EXPERIENCIA</h3>
          {timelineData[1].items.map((item, i) => (
            <div className="flex items-start mb-10 relative group" key={item.title + item.year + i} data-aos="fade-up" data-aos-delay={i * 100}>
              <span className="absolute -left-[17px] top-2 w-2.5 h-2.5 bg-[#181818] border-2 border-[#EAFF6A] rounded-full"></span>
              <div className="ml-4">
                <span className="block font-semibold text-gray-100 text-lg">{item.year}</span>
                <span className="block font-medium text-xl mt-1">{item.title}</span>
                <span className="block text-sm text-gray-400 mt-0.5">{item.place}</span>
              </div>
            </div>
          ))}
        </div>

        {/* EDUCACIÓN */}
        <div id="education" className="scroll-mt-32">
          <h3 className="text-lg font-bold text-[#EAFF6A] mb-2 ml-6">EDUCACIÓN</h3>
          {timelineData[2].items.map((item, i) => (
            <div className="flex items-start mb-10 relative group" key={item.title + item.year + i} data-aos="fade-up" data-aos-delay={i * 100}>
              <span className="absolute -left-[17px] top-2 w-2.5 h-2.5 bg-[#181818] border-2 border-[#EAFF6A] rounded-full"></span>
              <div className="ml-4">
                <span className="block font-semibold text-gray-100 text-lg">{item.year}</span>
                <span className="block font-medium text-xl mt-1">{item.title}</span>
                <span className="block text-sm text-gray-400 mt-0.5">{item.place}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
