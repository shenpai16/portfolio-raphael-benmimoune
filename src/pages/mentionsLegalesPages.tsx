export default function MentionsLegalesPage() {
  return (
    <section
      id="legal"
      className="
        relative min-h-screen 
        bg-[var(--color-darker)] 
        flex justify-center 
        px-4 sm:px-8 py-24
        overflow-hidden
      "
    >
      {/* Glow subtil */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 blur-[150px] rounded-full pointer-events-none"></div>

      <div
        className="
          relative z-10 w-full max-w-4xl 
          bg-white/5 backdrop-blur-xl 
          border border-white/10 
          shadow-xl shadow-black/40 
          rounded-2xl p-10 
          text-white leading-relaxed
          animate-fadeInUp
        "
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          Mentions légales
        </h1>

        <div className="space-y-12 text-base sm:text-lg">
          {/* Éditeur */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-blue-400">
              Éditeur du site
            </h2>
            <p>
              Ce site est édité par <strong>Raphaël Benmimoune</strong>, 
              micro-entrepreneur enregistré sous le numéro SIREN{" "}
              <strong>999 046 758</strong>.
            </p>
            <p className="mt-2">
              Adresse : 89130 Auxerre (France)  
              <br />
              Email : <strong>raphaelbenmimoune1@gmail.com</strong>
            </p>
          </section>

          {/* Hébergeur */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-blue-400">
              Hébergement
            </h2>
            <p>
              Le site est hébergé par <strong>LWS (Ligne Web Services)</strong>,  
              10 rue Penthièvre, 75008 Paris.  
              <br />
              Site web : https://www.lws.fr
            </p>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-blue-400">
              Propriété intellectuelle
            </h2>
            <p>
              L’ensemble du contenu présent sur ce site (textes, images, vidéos,
              code, design) est la propriété exclusive de Raphaël, sauf mention
              contraire. Toute reproduction, distribution ou modification sans
              autorisation préalable est interdite.
            </p>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-blue-400">
              Données personnelles
            </h2>
            <p>
              Ce site ne collecte aucune donnée personnelle à des fins
              commerciales. Les formulaires de contact servent uniquement à
              permettre un échange direct avec l’utilisateur.
            </p>
            <p className="mt-2">
              Conformément au RGPD, vous pouvez demander la suppression ou la
              récupération de vos données en écrivant à :  
              <strong> raphaelbenmimoune1@gmail.com</strong>
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-blue-400">
              Cookies
            </h2>
            <p>
              Ce site n’utilise pas de cookies à des fins de suivi ou
              d’analyse. Seuls des cookies techniques nécessaires au
              fonctionnement du site peuvent être utilisés.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-blue-400">
              Contact
            </h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez
              me contacter à :  
              <strong> raphaelbenmimoune1@gmail.com</strong>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}