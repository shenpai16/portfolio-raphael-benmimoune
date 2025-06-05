import IntroSection from "./components/IntroSection";
import Header from "./layouts/Header";
import AboutSection from "./components/AboutSection";

export default function App() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[var(--color-dark)] to-[var(--color-blood)]">
        <IntroSection />
      </main>
      <AboutSection />
    </>
  );
}
