import { useState, useRef } from 'react';
import logo from '../Cioby_logo_resized.png';

// Translation object for German and English
const t = {
  de: {
    heroTitle: 'Cioby GmbH',
    heroSubtitle: 'Präzision im Beton – Kernbohrung & Betonschneiden',
    cta: 'Offerte anfragen',
    aboutTitle: 'Über uns',
    aboutDesc:
      'Cioby GmbH ist ein junges Unternehmen aus Thun, gegründet von Valentin Ciobanu. Wir sind spezialisiert auf professionelle Kernbohrungen, Betonschneiden und präzise Betonbearbeitung in der Region Bern, Thun, Interlaken und Gstaad.',
    servicesTitle: 'Dienstleistungen',
    services: [
      'Kernbohrung (Diamantbohren)',
      'Betonschneiden',
      'Wand- und Deckendurchbrüche',
      'Kleine Abbrucharbeiten',
      'Staubfreies Arbeiten & Wassergeführte Systeme',
    ],
    projectsTitle: 'Projekte',
    projects: [
      { title: 'Park Hotel Gstaad', desc: '' },
      { title: 'Interlaken Sporthalle', desc: '' },
      { title: 'Park Hotel Wengen', desc: '' },
      { title: 'Hotel Belvédère Wengen', desc: '' },
    ],
    contactTitle: 'Kontakt',
    contactDesc: 'Nehmen Sie Kontakt mit uns auf.',
    addressLabel: 'Adresse',
    address: 'Frutigenstrasse 68, 3604 Thun',
    phoneLabel: 'Telefon',
    phone: '077 216 22 98',
    emailLabel: 'E-Mail',
    email: 'cioby.info@gmail.com',
  },
  en: {
    heroTitle: 'Cioby GmbH',
    heroSubtitle: 'Precision in concrete – core drilling & concrete cutting',
    cta: 'Request a Quote',
    aboutTitle: 'About Us',
    aboutDesc:
      'Cioby GmbH is a young company based in Thun, founded by Valentin Ciobanu. We specialize in professional core drilling, concrete cutting, and precision concrete work across the Bern, Thun, Interlaken, and Gstaad region.',
    servicesTitle: 'Services',
    services: [
      'Core drilling (diamond drilling)',
      'Concrete cutting',
      'Wall and ceiling openings',
      'Small demolition work',
      'Dust-free & water-cooled systems',
    ],
    projectsTitle: 'Projects',
    projects: [
      { title: 'Park Hotel Gstaad', desc: '' },
      { title: 'Interlaken sports hall', desc: '' },
      { title: 'Park Hotel Wengen', desc: '' },
      { title: 'Hotel Belvédère Wengen', desc: '' },
    ],
    contactTitle: 'Contact',
    contactDesc: 'Get in touch with us.',
    addressLabel: 'Address',
    address: 'Frutigenstrasse 68, 3604 Thun',
    phoneLabel: 'Phone',
    phone: '077 216 22 98',
    emailLabel: 'Email',
    email: 'cioby.info@gmail.com',
  },
};

export default function App() {
  const [lang, setLang] = useState('de');
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Helper to smoothly scroll to a section
  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans">
      {/* Header with logo and language toggle */}
      <header className="flex justify-between items-center p-4">
        <img src={logo} alt="Logo" className="h-12" />
        <div className="space-x-4">
          <button
            onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
            className="text-sm underline"
          >
            {lang === 'de' ? 'EN' : 'DE'}
          </button>
        </div>
      </header>

      {/* Hero section with background image (placeholder for video) */}
      <section
        className="relative flex items-center justify-center h-screen bg-center bg-cover"
        style={{ backgroundImage: `url(${logo})` }}
      >
        <div className="bg-black bg-opacity-50 p-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {t[lang].heroTitle}
          </h1>
          <p className="text-lg md:text-2xl text-white mb-6">
            {t[lang].heroSubtitle}
          </p>
          <button
            onClick={() => scrollToRef(contactRef)}
            className="bg-red-600 text-white px-6 py-3 rounded"
          >
            {t[lang].cta}
          </button>
        </div>
      </section>

      {/* About section */}
      <section ref={aboutRef} className="py-20 px-4 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          {t[lang].aboutTitle}
        </h2>
        <p className="max-w-3xl mx-auto text-center">
          {t[lang].aboutDesc}
        </p>
      </section>

      {/* Services section */}
      <section ref={servicesRef} className="py-20 px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          {t[lang].servicesTitle}
        </h2>
        <div className="max-w-4xl mx-auto grid gap-4 md:grid-cols-2">
          {t[lang].services.map((service, idx) => (
            <div key={idx} className="p-6 border rounded shadow-sm">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Projects section */}
      <section ref={projectsRef} className="py-20 px-4 bg-gray-100">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          {t[lang].projectsTitle}
        </h2>
        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t[lang].projects.map((proj, idx) => (
            <div key={idx} className="text-center">
              <img
                src={logo}
                alt={proj.title}
                className="w-full h-32 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <p className="text-sm">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact section */}
      <section ref={contactRef} className="py-20 px-4">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          {t[lang].contactTitle}
        </h2>
        <p className="max-w-3xl mx-auto text-center mb-6">
          {t[lang].contactDesc}
        </p>
        <div className="max-w-3xl mx-auto space-y-2 text-center">
          <p>
            <strong>{t[lang].addressLabel}:</strong> {t[lang].address}
          </p>
          <p>
            <strong>{t[lang].phoneLabel}:</strong> {t[lang].phone}
          </p>
          <p>
            <strong>{t[lang].emailLabel}:</strong> {t[lang].email}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4">
        © 2025 Cioby GmbH – All rights reserved.
      </footer>
    </div>
  );
}