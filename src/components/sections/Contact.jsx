import { FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef(null);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 900 });
  }, []);

  // Cambia estos por tus valores reales de EmailJS
  const SERVICE_ID = "default_service";          // O tu serviceID personalizado
  const TEMPLATE_ID = "template_2bjxvb1";        // El que creaste en EmailJS
  const PUBLIC_KEY = "a3SiWAjbdhTOt1dxC";        // Tu Public Key

  const handleSendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setSending(false);
        alert("¡Mensaje enviado correctamente!");
        form.current.reset();
      })
      .catch((err) => {
        setSending(false);
        alert("Ocurrió un error: " + JSON.stringify(err));
      });
  };

  return (
    <section id="contact" className="w-full py-14 md:py-20 px-4 md:px-20">
      {/* Encabezado breadcrumb */}
      <div className="inline-flex items-center gap-2 border border-[#3A3B3C] rounded-xl px-6 py-2 text-base text-white font-ubuntu bg-transparent select-none mb-8">
        <span className="text-lg"><FaEnvelope /></span>
        CONTACTO
      </div>

      <div className="w-full">
        <form
          ref={form}
          onSubmit={handleSendEmail}
          className="w-full bg-[#1a1a1a] rounded-2xl shadow-2xl p-8 border border-[#3A3B3C] flex flex-col gap-4 mx-auto"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold mb-2 text-white">
            ¡Trabajemos <span className="text-[#EAFF6A]">juntos!</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="w-full bg-[#232323] rounded-lg px-5 py-3 text-white border border-[#3A3B3C] focus:border-[#EAFF6A] focus:outline-none transition"
              type="text"
              name="name"
              placeholder="Nombre completo*"
              required
            />
            <input
              className="w-full bg-[#232323] rounded-lg px-5 py-3 text-white border border-[#3A3B3C] focus:border-[#EAFF6A] focus:outline-none transition"
              type="email"
              name="email"
              placeholder="Correo electrónico*"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="w-full bg-[#232323] rounded-lg px-5 py-3 text-white border border-[#3A3B3C] focus:border-[#EAFF6A] focus:outline-none transition"
              type="text"
              name="whatsapp"
              placeholder="WhatsApp (opcional)"
            />
            <input
              className="w-full bg-[#232323] rounded-lg px-5 py-3 text-white border border-[#3A3B3C] focus:border-[#EAFF6A] focus:outline-none transition"
              type="text"
              name="title"
              placeholder="Asunto*"
              required
            />
          </div>
          <textarea
            className="w-full bg-[#232323] rounded-lg px-5 py-3 text-white border border-[#3A3B3C] focus:border-[#EAFF6A] focus:outline-none transition resize-none"
            rows={4}
            name="message"
            placeholder="Mensaje*"
            required
          />
          <button
            type="submit"
            className="mt-4 w-full bg-[#EAFF6A] text-black font-bold py-4 rounded-full text-xl shadow-lg hover:bg-transparent hover:text-[#EAFF6A] border-2 border-[#EAFF6A] transition-all duration-200"
            disabled={sending}
          >
            {sending ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
}
