import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import Home from "./components/ui/Home";
import MentionsLegalesPages from "./pages/mentionsLegalesPages";


export default function App() {
return (
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
  );
}
