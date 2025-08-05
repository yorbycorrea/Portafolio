// About.jsx
export default function About() {
  return (
    <section
      id="about"
      className="min-h-[60vh] flex flex-col justify-start px-2 pt-0 md:px-20 md:pt-0 md:pb-24"
    >
      {/* Etiqueta "Acerca de mí" */}
      <div className="mb-5 flex justify-center md:justify-start">
        <div
          data-aos="fade-up"
          className="inline-flex items-center gap-2 border border-[#3A3B3C] rounded-xl px-6 py-2 text-base text-white font-ubuntu bg-transparent select-none"
        >
          <span className="text-lg">👤</span>
          ACERCA DE MÍ
        </div>
      </div>

      {/* Título grande */}
      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-2xl md:text-5xl font-ubuntu font-normal text-white leading-tight mb-10"
      >
        El corazón de una aplicación late en su{" "}
        <span className="text-[#EAFF6A]">backend.</span>
      </h2>

      {/* Descripción en varios párrafos */}
      <div className="text-base md:text-xl text-gray-300 font-light font-ubuntu space-y-7 max-w-2xl">
        <p data-aos="fade-up" data-aos-delay="200">
          ¡Hola! Soy Yorby Correa, técnico en Ingeniería de Software con especialización en Inteligencia Artificial. Cuento con cerca de 3 años de experiencia enfocado principalmente en el desarrollo backend, donde he tenido la oportunidad de contribuir en startups y participar en proyectos reales a través de prácticas profesionales.
        </p>
        <p data-aos="fade-up" data-aos-delay="300">
          Nací en Piura, Perú, y desde muy joven descubrí mi pasión por la tecnología y el desarrollo de software. Para mí, el backend es el motor que da vida y sentido a las aplicaciones modernas; disfruto crear soluciones sólidas, seguras y escalables que realmente impacten a las personas y los negocios.
        </p>
        <p data-aos="fade-up" data-aos-delay="400">
          Mi meta es seguir creciendo como desarrollador, dominar nuevas tecnologías y, algún día, liderar equipos que creen productos innovadores impulsados por la inteligencia artificial.
          Sigo motivado cada día por el deseo de aprender, mejorar y aportar mi granito de arena al mundo tech.
        </p>
      </div>
    </section>
  );
}
