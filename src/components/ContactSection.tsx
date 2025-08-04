import { useState, useRef } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';


export default function ContactSection() {

    const formRef = useRef<HTMLFormElement | null>(null);
    const [status, setStatus] = useState<string>('');


    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Envoie en cours...');

        if (!formRef.current) return;

        emailjs.sendForm(
            'service_7v72o0s',
            'template_931vjd7',
            formRef.current,
            '3w5SGBM3mSmU4sDWw'
        )
        .then((result : EmailJSResponseStatus) => {
            console.log('Message sent successfully:', result.text);
            setStatus('Mail envoyé avec succès !');
            formRef.current?.reset();
        }, (error: { text: string}) => {
            console.error('Error sending message:', error.text);
            setStatus('Erreur lors de l\'envoi du mail. Veuillez réessayer plus tard.');
        }   
        );

};
 return (
        <section
      id="contact"
      className="min-h-[60vh] sm:min-h-screen bg-[var(--color-darker)] flex justify-center items-center px-4 pt-16 pb-24"
    >
      <div className="w-full max-w-3xl bg-[var(--color-dark)] text-white rounded-2xl shadow-lg p-8">
        <h2 className="text-5xl font-bold text-center mb-8 text-white">
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
            className="bg-[var(--color-darker)] text-white px-4 py-3 rounded-lg border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Votre email"
            required
            className="bg-[var(--color-darker)] text-white px-4 py-3 rounded-lg border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <textarea
            name="message"
            placeholder="Votre message"
            rows={6}
            required
            className="bg-[var(--color-darker)] text-white px-4 py-3 rounded-lg border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Envoyer le message
          </button>
          <p className="text-sm text-center mt-2">{status}</p>
        </form>
      </div>
    </section>
  );

}
        