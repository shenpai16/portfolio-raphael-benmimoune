import { useState, useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_7v72o0s",
        "template_931vjd7",
        formRef.current,
        "3w5SGBM3mSmU4sDWw"
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log("Message sent successfully:", result.text);
          setStatus("Mail envoyé avec succès !");
          formRef.current?.reset();
        },
        (error: { text: string }) => {
          console.error("Error sending message:", error.text);
          setStatus(
            "Erreur lors de l'envoi du mail. Veuillez réessayer plus tard."
          );
        }
      );
  };

  return (
    <section
      id="contact"
      className="
        relative min-h-[60vh] sm:min-h-screen 
        bg-[var(--color-darker)] 
        flex justify-center items-center px-4 py-24
        overflow-hidden
      "
    >
      {/* Glow bleu subtil */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 blur-[150px] rounded-full pointer-events-none"></div>

      <div
        className="
          w-full max-w-3xl 
          bg-white/5 backdrop-blur-xl 
          border border-white/10 
          shadow-xl shadow-black/40 
          rounded-2xl p-10 
          animate-fadeInUp
          relative z-10
        "
      >
        <h2 className="text-5xl font-bold text-center mb-10 text-white">
          Me contacter
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Votre nom"
            required
            className="
              bg-white/5 backdrop-blur-sm 
              text-white px-4 py-3 rounded-lg 
              border border-white/10 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              transition
            "
          />

          <input
            type="email"
            name="from_email"
            placeholder="Votre email"
            required
            className="
              bg-white/5 backdrop-blur-sm 
              text-white px-4 py-3 rounded-lg 
              border border-white/10 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              transition
            "
          />

          <textarea
            name="message"
            placeholder="Votre message"
            rows={6}
            required
            className="
              bg-white/5 backdrop-blur-sm 
              text-white px-4 py-3 rounded-lg 
              border border-white/10 
              focus:outline-none focus:ring-2 focus:ring-blue-500 
              resize-none transition
            "
          />

          <button
            type="submit"
            className="
              bg-blue-500 hover:bg-blue-600 
              text-white font-semibold py-3 rounded-lg 
              shadow-lg shadow-blue-500/30 
              transition-all duration-300
            "
          >
            Envoyer le message
          </button>

          <p
            className="
              text-sm text-center mt-2 
              text-gray-300 
              transition-opacity duration-300
            "
          >
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}