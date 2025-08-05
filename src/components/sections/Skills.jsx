import { FaNodeJs, FaPython, FaJs, FaReact, FaDatabase, FaPeopleCarry } from "react-icons/fa";
import { SiMysql, SiMongodb, SiExpress, SiHtml5, SiCss3, SiTypescript, SiDjango } from "react-icons/si";

function SkillCard({ icon, name, percent, color, dataAos, dataAosDelay }) {
  return (
    <div
      className="flex flex-col items-center bg-[#232323] rounded-xl p-4 shadow-lg w-36 m-2"
      data-aos={dataAos}
      data-aos-delay={dataAosDelay}
    >
      <span className="text-4xl mb-2" style={{ color }}>{icon}</span>
      <span className="text-base font-bold text-white mb-1">{name}</span>
      <div className="w-full bg-[#353535] rounded-full h-2 mb-1">
        <div
          className="h-2 rounded-full transition-all duration-700"
          style={{
            width: `${percent}%`,
            background: color,
          }}
        />
      </div>
      <span className="text-xs text-gray-400">{percent}%</span>
    </div>
  );
}

export default function Skills() {
  const backendSkills = [
    { icon: <FaNodeJs />, name: "Node.js", percent: 85, color: "#6cc24a" },
    { icon: <SiDjango />, name: "Django", percent: 80, color: "#092E20" },
    { icon: <FaPython />, name: "Python", percent: 80, color: "#4B8BBE" },
    { icon: <FaDatabase />, name: "SQL", percent: 75, color: "#FFD700" },
    { icon: <SiMongodb />, name: "MongoDB", percent: 75, color: "#4DB33D" },
  ];

  const frontendSkills = [
    { icon: <SiHtml5 />, name: "HTML5", percent: 85, color: "#e34c26" },
    { icon: <SiCss3 />, name: "CSS3", percent: 80, color: "#264de4" },
    { icon: <FaJs />, name: "JavaScript", percent: 85, color: "#F7DF1E" },
    { icon: <SiTypescript />, name: "TypeScript", percent: 70, color: "#3178c6" },
    { icon: <FaReact />, name: "React", percent: 75, color: "#61dafb" },
  ];

  const softSkills = [
    { icon: <FaPeopleCarry />, name: "Trabajo en equipo", percent: 90, color: "#EAFF6A" },
    // agrega más soft skills si lo deseas...
  ];

  return (
    <section id="skills" className="my-16 pl-15 pt-0 md:pt-0 ">
        {/* Habilidades */}
      <div className="mb-4 flex justify-center md:justify-start">
        <div
          data-aos="fade-up"
          className="inline-flex items-center gap-2 border border-[#3A3B3C] rounded-xl px-6 py-2 text-base text-white font-ubuntu bg-transparent select-none"
        >
          <span className="text-lg">🛠️</span>
          Habilidades
        </div>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
        Mis <span className="text-[#EAFF6A]">Habilidades</span>
      </h2>
      <div>
        <h3 className="text-xl text-white font-semibold mb-3">Backend</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {backendSkills.map((skill, i) => (
            <SkillCard
              key={i}
              {...skill}
              dataAos="fade-up"
              dataAosDelay={i * 100}
            />
          ))}
        </div>
        <h3 className="text-xl text-white font-semibold mb-3">Frontend</h3>
        <div className="flex flex-wrap gap-2 mb-6">
          {frontendSkills.map((skill, i) => (
            <SkillCard
              key={i}
              {...skill}
              dataAos="fade-up"
              dataAosDelay={i * 100}
            />
          ))}
        </div>
        <h3 className="text-xl text-white font-semibold mb-3">Habilidades blandas</h3>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill, i) => (
            <SkillCard
              key={i}
              {...skill}
              dataAos="fade-up"
              dataAosDelay={i * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
