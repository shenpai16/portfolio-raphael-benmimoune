export default function mentionsLegalesPages() {
  return (
    <section
      id="legal"
      className="min-h-screen bg-[var(--color-darker)] flex flex-col justify-center items-center px-4 sm:px-8 py-20"
      style={{ backgroundColor: "rgba(30, 30, 30, 1)" }}
    >
      <div className="w-full max-w-3xl text-white leading-relaxed">
        <h1 className="text-5xl font-bold mb-12 text-center">
          Mentions légales
        </h1>

        <div className="space-y-10 text-base sm:text-lg">
          {/* Éditeur */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Éditeur du site</h2>
            <p>
              Ce site est édité par <strong>Raphaël Benmimoune</strong>,
              micro-entrepreneur enregistré sous le numéro SIREN{" "}
              <strong>999 046 758</strong>.
            </p>
            <p>
              Adresse : 89130 Auxerre (France)  
              Email : <strong>raphaelbenmimoune1@gmail.com</strong>
            </p>
          </section>

          {/* Hébergeur */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Hébergement</h2>
            <p>
              Le site est hébergé par :  
              <strong>LWS (Ligne Web Services)</strong>  
              10 rue Penthièvre, 75008 Paris  
              Site web : https://www.lws.fr
            </p>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Propriété intellectuelle
            </h2>
            <p>
              L’ensemble du contenu présent sur ce site (textes, images, vidéos,
              code, design) est la propriété exclusive de Raphaël, sauf mention
              contraire.  
              Toute reproduction, distribution ou modification sans autorisation
              préalable est interdite.
            </p>
          </section>

          {/* Données personnelles */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Données personnelles
            </h2>
            <p>
              Ce site ne collecte aucune donnée personnelle à des fins
              commerciales.  
              Les éventuels formulaires de contact ne servent qu’à permettre un
              échange direct avec l’utilisateur.
            </p>
            <p>
              Conformément au RGPD, vous pouvez demander la suppression ou la
              récupération de vos données en écrivant à :  
              <strong>raphaelbenmimoune1@gmail.com</strong>
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
            <p>
              Ce site n’utilise pas de cookies à des fins de suivi ou
              d’analyse.  
              Seuls des cookies techniques nécessaires au fonctionnement du site
              peuvent être utilisés.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact</h2>
            <p>
              Pour toute question concernant ces mentions légales, vous pouvez
              me contacter à :  
              <strong>raphaelbenmimoune1@gmail.com</strong>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
