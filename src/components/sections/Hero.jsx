// Hero.jsx
export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[60vh] flex flex-col justify-start px-4 pt-6 md:px-20 md:pt-0 md:pb-32"
    >
      {/* Presentación */}
      <div className="mb-4 flex justify-center md:justify-start">
        <div
          data-aos="fade-up"
          className="inline-flex items-center gap-2 border border-[#3A3B3C] rounded-xl px-6 py-2 text-base text-white font-ubuntu bg-transparent select-none"
        >
          <span className="text-lg">🏠</span>
          PRESENTACIÓN
        </div>
      </div>

      {/* Título principal */}
      <h1
        data-aos="fade-up"
        data-aos-delay="100"
        className="text-[5vw] font-light font-ubuntu leading-[1.05] tracking-tight"
      >
        Hola mi nombre es{" "}
        <span className="text-[#EAFF6A]">Yorby Correa</span>, desarrollador Backend
      </h1>

      {/* Descripción */}
      <p
        data-aos="fade-up"
        data-aos-delay="200"
        className="text-base md:text-xl text-gray-300 max-w-2xl mb-12 mt-5 font-ubuntu font-extralight"
      >
        "Mi verdadera pasión está en el desarrollo backend: disfruto diseñar arquitecturas robustas, optimizar bases de datos y crear APIs eficientes que sirven como el motor de cualquier aplicación web. Sin embargo, también tengo la capacidad de adaptarme al desarrollo frontend, permitiéndome aportar soluciones completas y funcionales cuando el proyecto lo requiere."
      </p>

      {/* Números grandes */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-40 mt-3">
        <div data-aos="fade-up" data-aos-delay="300">
          <div className="text-5xl md:text-6xl font-ubuntu font-normal text-[#EAFF6A]">3+</div>
          <div className="uppercase text-base md:text-xl text-[#595959] font-ubuntu mt-1">
            años de experiencia
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <div className="text-5xl md:text-6xl font-ubuntu font-normal text-[#EAFF6A]">100+</div>
          <div className="uppercase text-base md:text-xl text-[#595959] font-ubuntu mt-1">
            proyectos desarrollados
          </div>
        </div>
      </div>
    </section>
  );
}
