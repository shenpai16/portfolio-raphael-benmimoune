import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import IntroSection from "../IntroSection";
import AboutSection from "../AboutSection";
import ServicesSection from "../ServicesSection";
import OffersSection from "../OffersSection";
import ContactSection from "../ContactSection";


export default function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== '/'){
            const target = location.pathname.replace('/', '');
            const element = document.getElementById(target);

            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location.pathname]);

    return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-sky-300 via-sky-500 to-blue-700">
        <IntroSection />
      </main>

      <AboutSection />
      <ServicesSection />
      <OffersSection />
      <ContactSection />
    </>
  );

}