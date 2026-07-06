import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import Home from "./components/ui/Home";
import MentionsLegalesPages from "./pages/mentionsLegalesPages";
import { useState } from "react";


export default function App() {

  const [cookiesAccepted, setCookiesAccepted] = useState(
    localStorage.getItem("cookies") === "accepted"
  );

  const acceptCookies = () => {
    localStorage.setItem("cookies", "accepted");
    setCookiesAccepted(true);
  }

  
return (
  <>
  {!cookiesAccepted && (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center z-50">
      <p className="text-sm">Ce site utilise des cookies pour améliorer votre expérience. En continuant à naviguer sur ce site, vous acceptez l'utilisation de cookies.</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={acceptCookies}
      >
        Accepter les cookies
      </button>
    </div>
  )}

    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<Home />} />
        <Route path="/projets" element={<Home />} />
        <Route path="/mes-offres" element={<Home />} />
        <Route path="/contact" element={<Home />} />

        <Route path="/mentions-legales" element={<MentionsLegalesPages />} />
      </Routes>

      <Footer />
    </BrowserRouter>

    </>
  );
}
