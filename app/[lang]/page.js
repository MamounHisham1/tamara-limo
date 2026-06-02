import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import { getDictionary } from "./dictionaries";

export default async function Home({ params }) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang;
  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar dict={dict.nav} lang={lang} />
      <main>
        <Hero dict={dict.hero} />
        <Services dict={dict.services} />
        <About dict={dict.about} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} />
      <WhatsAppFloat dict={dict.whatsapp} />
    </>
  );
}
