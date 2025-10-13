import IntroSection from "./components/IntroSection";
import Header from "./layouts/Header";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import OffersSection from "./components/OffersSection";
import ContactSection from "./components/ContactSection";
import Footer from "./layouts/Footer";


export default function App() {
  return (
    <>
      <Header />
      
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-sky-300 via-sky-500 to-blue-700">
        <IntroSection />
      </main>
      
      <AboutSection />
      <ServicesSection />
      <OffersSection />
      <ContactSection />
      <Footer />
    </>
  );
}
