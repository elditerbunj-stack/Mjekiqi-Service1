const translations = {

  en: {
    home: "HOME",
    about: "ABOUT",
    works: "WORKS",
    contact: "CONTACT",

    heroTitle: "Our Projects",
    heroSubtitle: "Take a look at some of our completed drywall, renovation, and interior projects.",

    featuredWork: "Featured Work",
    browseCategory: "Browse our projects by category.",
    drywall: "Drywall",
    ceilings: "Ceilings",
    renovations: "Renovations",
    interiors: "Interiors",

    heroDesc: "Mjekiqi Service is your trusted partner in drywall, renovation, and full building management — delivering quality, precision, and reliability in every project.",
    services: "Services",
    service1: "Drywall & Ceiling",
    service2: "Renovations",
    service3: "Interior Finishing",
    service4: "Building Management",
    contactTitle: "Contact",
    locationTitle: "Location",
    footerCopyright: "© 2026 Mjekiqi Service. All rights reserved."
  },

  sq: {
    home: "BALLINA",
    about: "RRETH NESH",
    works: "PUNIMET",
    contact: "KONTAKT",

    heroTitle: "Projektet Tona",
    heroSubtitle: "Shikoni disa nga projektet tona të përfunduara në drywall, renovime dhe interier.",

    featuredWork: "Punimet Kryesore",
    browseCategory: "Shfletoni projektet sipas kategorisë.",
    drywall: "Drywall",
    ceilings: "Tavane",
    renovations: "Renovime",
    interiors: "Interier",

    heroDesc: "Mjekiqi Service është partneri juaj i besuar për drywall, renovime dhe menaxhim të ndërtesave — cilësi dhe përpikmëri në çdo projekt.",
    services: "Shërbimet",
    service1: "Drywall & Tavane",
    service2: "Renovime",
    service3: "Punime të Brendshme",
    service4: "Menaxhim Ndërtese",
    contactTitle: "Kontakti",
    locationTitle: "Lokacioni",
    footerCopyright: "© 2026 Mjekiqi Service. Të gjitha të drejtat e rezervuara."
  },

  de: {
    home: "STARTSEITE",
    about: "ÜBER UNS",
    works: "PROJEKTE",
    contact: "KONTAKT",

    heroTitle: "Unsere Projekte",
    heroSubtitle: "Sehen Sie sich einige unserer abgeschlossenen Trockenbau-, Renovierungs- und Innenraumprojekte an.",

    featuredWork: "Ausgewählte Arbeiten",
    browseCategory: "Durchsuchen Sie unsere Projekte nach Kategorie.",
    drywall: "Trockenbau",
    ceilings: "Decken",
    renovations: "Renovierungen",
    interiors: "Innenräume",

    heroDesc: "Mjekiqi Service ist Ihr zuverlässiger Partner für Trockenbau, Renovierung und Gebäudemanagement — Qualität und Präzision in jedem Projekt.",
    services: "Dienstleistungen",
    service1: "Trockenbau & Decken",
    service2: "Renovierungen",
    service3: "Innenausbau",
    service4: "Gebäudemanagement",
    contactTitle: "Kontakt",
    locationTitle: "Standort",
    footerCopyright: "© 2026 Mjekiqi Service. Alle Rechte vorbehalten."
  },

  nl: {
    home: "HOME",
    about: "OVER ONS",
    works: "PROJECTEN",
    contact: "CONTACT",

    heroTitle: "Onze Projecten",
    heroSubtitle: "Bekijk enkele van onze afgeronde gipsplaat-, renovatie- en interieurprojecten.",

    featuredWork: "Uitgelicht Werk",
    browseCategory: "Blader door onze projecten per categorie.",
    drywall: "Gipsplaten",
    ceilings: "Plafonds",
    renovations: "Renovaties",
    interiors: "Interieurs",

    heroDesc: "Mjekiqi Service is uw betrouwbare partner voor droogbouw, renovatie en gebouwbeheer — kwaliteit en precisie in elk project.",
    services: "Diensten",
    service1: "Droogbouw & Plafonds",
    service2: "Renovaties",
    service3: "Interieurafwerking",
    service4: "Gebouwbeheer",
    contactTitle: "Contact",
    locationTitle: "Locatie",
    footerCopyright: "© 2026 Mjekiqi Service. Alle rechten voorbehouden."
  },

  cs: {
    home: "DOMŮ",
    about: "O NÁS",
    works: "PROJEKTY",
    contact: "KONTAKT",

    heroTitle: "Naše Projekty",
    heroSubtitle: "Podívejte se na některé z našich dokončených projektů v oblasti sádrokartonu, renovací a interiérů.",

    featuredWork: "Vybrané Práce",
    browseCategory: "Prohlédněte si naše projekty podle kategorie.",
    drywall: "Sádrokarton",
    ceilings: "Stropy",
    renovations: "Renovace",
    interiors: "Interiéry",

    heroDesc: "Mjekiqi Service je váš spolehlivý partner pro sádrokarton, renovace a správu budov — kvalita a přesnost v každém projektu.",
    services: "Služby",
    service1: "Sádrokarton & Stropy",
    service2: "Renovace",
    service3: "Interiérové práce",
    service4: "Správa budov",
    contactTitle: "Kontakt",
    locationTitle: "Lokalita",
    footerCopyright: "© 2026 Mjekiqi Service. Všechna práva vyhrazena."
  }
};


document.addEventListener("DOMContentLoaded", () => {

  const switcher = document.getElementById("languageSwitcher");
  if (!switcher) return;

  function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    localStorage.setItem("lang", lang);
  }

  const savedLang = localStorage.getItem("lang") || "en";
  switcher.value = savedLang;
  setLanguage(savedLang);

  switcher.addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });

});