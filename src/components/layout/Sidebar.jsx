import { FaGithub, FaInstagram, FaLinkedin, FaBars } from "react-icons/fa";
import profileImg from "../../assets/img/yorby.jpg";

export default function Sidebar({ onOpenMenu }) {
  return (
    <aside
      className={`
        bg-[#1c1c1c] rounded-2xl shadow-xl border border-[#3A3B3C]
        flex flex-col justify-between items-center
        mx-auto my-4 w-[96vw] max-w-sm px-4 py-6
        md:fixed md:left-6 md:top-6 md:h-[96%] md:w-[360px] md:max-w-none md:mx-0 md:my-0 md:px-6 md:py-6
        z-40
      `}
    >
      {/* Parte superior */}
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-white text-xl font-bold">Yorby</h1>
          <span className="text-gray-400 text-xs text-right">
            Desarrollador / Backend
          </span>
        </div>
        {/* Foto responsiva */}
        <div className="relative w-32 h-32 mx-auto md:w-64 md:h-64 rounded-xl overflow-hidden mb-6">
          <div className="absolute inset-0 bg-gradient-to-b from-lime-400 to-[#1c1c1c] opacity-80" />
          <img
            src={profileImg}
            alt="Foto perfil"
            className="relative w-full h-full object-cover grayscale"
          />
        </div>
        {/* Contacto */}
        <p className="mt-2 text-lg text-center text-gray-300 break-all">
          yorbyaries,98@gmail.com
        </p>
        <p className="text-sm text-center text-gray-500">
          Sullana-Piura-Peru
        </p>
      </div>

      {/* Redes sociales */}
      <div className="flex justify-center gap-4 mt-6">
        <a href="https://github.com/yorbycorrea" className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full text-gray-400 hover:border-lime-400 hover:text-lime-400 transition">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/yorbycorrea/" className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full text-gray-400 hover:border-lime-400 hover:text-lime-400 transition">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/yorby-correa-pacherres-870428a6/" className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full text-gray-400 hover:border-lime-400 hover:text-lime-400 transition">
          <FaLinkedin />
        </a>
      </div>

      {/* Botón Contrátame y Hamburguesa solo en móvil */}
      <div className="mt-6 w-full flex items-center justify-center gap-2 relative">
         <a
          href="#contact"
          className="cursor-pointer w-full bg-[#EAFF6A] text-black text-lg py-6 rounded-full font-medium flex items-center justify-center gap-2 border-2 border-lime-400 hover:bg-transparent hover:text-lime-400 transition-all duration-300"
        >
          <span>✉</span> Contrátame
        </a>
        {/* Botón hamburguesa SOLO móvil */}
        <button
          onClick={onOpenMenu}
          className="block md:hidden bg-[#EAFF6A] text-black rounded-full w-12 h-12 flex items-center justify-center border-2 border-[#EAFF6A] hover:bg-transparent hover:text-[#EAFF6A] transition-all duration-300 ml-2"
        >
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Footer */}
      <p className="mt-4 text-[10px] text-gray-500 text-center">
        © 2025 yorby. Todos los derechos reservados
      </p>
    </aside>
  );
}
