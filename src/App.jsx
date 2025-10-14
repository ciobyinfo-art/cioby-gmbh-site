import React, { useState, useRef } from 'react';

function App() {
  const [lang, setLang] = useState('de');

  const t = {
    de: {
      heroTitle: 'Cioby GmbH',
      heroSubtitle: 'Pr\u00e4zision im Beton \u2013 Kernbohrung & Betonschneiden',
      cta: 'Offerte anfragen',
      aboutTitle: '\u00dcber uns',
      aboutText: 'Cioby GmbH ist ein junges Unternehmen aus Thun, gegr\u00fcndet von Valentin Ciobanu. Wir sind spezialisiert auf professionelle Kernbohrungen, Betonschneiden und pr\u00e4zise Betonbearbeitung im Raum Bern, Thun, Interlaken und Gstaad.',
      servicesTitle: 'Leistungen',
      services: [
        'Kernbohrung / Diamant-Kernbohrung',
        'Betonschneiden / Diamant-Betonschneiden',
        'Wand- und Deckendurchbr\u00fcche',
        'Kleine Abbrucharbeiten',
        'Staubfreies Arbeiten & wassergef\u00fchrte Systeme',
      ],
      projectsTitle: 'Referenzen',
      projectsDesc: 'Hier sind einige unserer j\u00fcngsten Projekte, bei denen wir Kernbohrung und Betonschneiden mit hoher Pr\u00e4zision durchgef\u00fchrt haben.',
      projects: [
        { title: 'Park Hotel Gstaad', desc: 'Exklusive Kernbohrungen im Luxusresort.', image: '/assets/van.png' },
        { title: 'Interlaken Sporthalle', desc: 'Pr\u00e4zises Betonschneiden f\u00fcr Sportanlagen.', image: '/assets/van.png' },
        { title: 'Park Hotel Wengen', desc: 'Spezialprojekte in den Berner Alpen.', image: '/assets/van.png' },
        { title: 'Hotel Belv\u00e9d\u00e8re Wengen', desc: 'Leistungsstarke Kernbohrungen und Schnitte.', image: '/assets/van.png' },
      ],
      contactTitle: 'Kontakt',
      contactDesc: 'Kontaktieren Sie uns f\u00fcr eine unverbindliche Offerte oder weitere Informationen.',
      addressLabel: 'Adresse',
      address: 'Frutigenstrasse 68, 3604 Thun',
      phoneLabel: 'Telefon',
      phone: '077 216 22 98',
      emailLabel: 'E-Mail',
      email: 'cioby.info@gmail.com',
      aboutNav: '\u00dcber uns',
      servicesNav: 'Leistungen',
      projectsNav: 'Referenzen',
      contactNav: 'Kontakt',
    },
    en: {
      heroTitle: 'Cioby GmbH',
      heroSubtitle: 'Precision in concrete – Core drilling & concrete cutting',
      cta: 'Request a Quote',
      aboutTitle: 'About Us',
      aboutText: 'Cioby GmbH is a young company based in Thun, founded by Valentin Ciobanu. We specialize in professional core drilling, concrete cutting, and precision concrete work across the Bern, Thun, Interlaken, and Gstaad region.',
      servicesTitle: 'Services',
      services: [
        'Core drilling / Diamond core drilling',
        'Concrete cutting / Diamond concrete cutting',
        'Wall & ceiling openings',
        'Small demolition works',
        'Dust-free & water-cooled systems',
      ],
      projectsTitle: 'Projects',
      projectsDesc: 'Here are some of our recent projects where we\'ve performed core drilling and concrete cutting with high precision.',
      projects: [
        { title: 'Park Hotel Gstaad', desc: 'Exclusive core drilling in the luxury resort.', image: '/assets/van.png' },
        { title: 'Interlaken Sport Hall', desc: 'Precise concrete cutting for sports facilities.', image: '/assets/van.png' },
        { title: 'Park Hotel Wengen', desc: 'Special projects in the Bernese Alps.', image: '/assets/van.png' },
        { title: 'Hotel Belv\u00e9d\u00e8re Wengen', desc: 'Powerful core drillings and cuts.', image: '/assets/van.png' },
      ],
      contactTitle: 'Contact',
      contactDesc: 'Get in touch for a free quote or further information.',
      addressLabel: 'Address',
      address: 'Frutigenstrasse 68, 3604 Thun',
      phoneLabel: 'Phone',
      phone: '077 216 22 98',
      emailLabel: 'Email',
      email: 'cioby.info@gmail.com',
      aboutNav: 'About Us',
      servicesNav: 'Services',
      projectsNav: 'Projects',
      contactNav: 'Contact',
    },
  };

  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans">
      <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 z-20 bg-gradient-to-b from-black via-black/80 to-transparent text-white">
        <div className="flex items-center space-x-4">
          <img src="/assets/logo.png" alt="Cioby Logo" className="h-8 w-8" />
          <span className="font-bold text-lg">{t[lang].heroTitle}</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <button onClick={() => scrollTo(aboutRef)} className="hover:underline">{t[lang].aboutNav}</button>
          <button onClick={() => scrollTo(servicesRef)} className="hover:underline">{t[lang].servicesNav}</button>
          <button onClick={() => scrollTo(projectsRef)} className="hover:underline">{t[lang].projectsNav}</button>
          <button onClick={() => scrollTo(contactRef)} className="hover:underline">{t[lang].contactNav}</button>
        </nav>
        <div className="flex space-x-2">
          <button onClick={() => setLang('de')} className={`px-2 py-1 rounded ${lang==='de' ? 'bg-red-600' : 'bg-gray-700'}`}>DE</button>
          <button onClick={() => setLang('en')} className={`px-2 py-1 rounded ${lang==='en' ? 'bg-red-600' : 'bg-gray-700'}`}>EN</button>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted playsInline>
          <source src="/assets/hero.mov" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex flex-col items-center justify-center p-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{t[lang].heroTitle}</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl drop-shadow-lg">{t[lang].heroSubtitle}</p>
          <button onClick={() => scrollTo(contactRef)} className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full text-lg font-semibold">{t[lang].cta}</button>
        </div>
      </section>

      <section ref={aboutRef} className="py-20 px-4 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{t[lang].aboutTitle}</h2>
          <p className="text-lg leading-relaxed">{t[lang].aboutText}</p>
        </div>
      </section>

      <section ref={servicesRef} className="py-20 px-4 bg-gray-100 text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{t[lang].servicesTitle}</h2>
          <ul className="list-disc list-inside space-y-3 text-lg">
            {t[lang].services.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section ref={projectsRef} className="py-20 px-4 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{t[lang].projectsTitle}</h2>
          <p className="mb-8 text-lg">{t[lang].projectsDesc}</p>
          <div className="grid gap-6 md:grid-cols-2">
            {t[lang].projects.map((proj, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden shadow-lg bg-gray-100">
                <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
                  <p className="text-sm">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={contactRef} className="py-20 px-4 bg-gray-100 text-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">{t[lang].contactTitle}</h2>
          <p className="mb-6 text-lg">{t[lang].contactDesc}</p>
          <div className="space-y-4 text-lg">
            <p><strong>{t[lang].addressLabel}:</strong> {t[lang].address}</p>
            <p><strong>{t[lang].phoneLabel}:</strong> {t[lang].phone}</p>
            <p><strong>{t[lang].emailLabel}:</strong> {t[lang].email}</p>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white text-center py-4">
        © 2025 Cioby GmbH – All rights reserved.
      </footer>
    </div>
  );
}

export default App;
